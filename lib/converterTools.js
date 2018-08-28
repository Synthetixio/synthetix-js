import { Contract, Interface, providers, utils, Wallet } from "ethers";

import {
  ROPSTEN_ADDRESSES,
  MAINNET_ADDRESSES,
  KOVAN_ADDRESSES
} from "./addresses";
import { CONTRACT_ABIS } from "./abi/contracts";
const GWEI = 1000000000;
const DEFAULT_GAS_LIMIT = 200000;

export default class ConverterTools {
  account = null;
  signer = null;
  provider = null;
  contracts = null;
  addresses = null;

  createContractObjects(addressList) {
    const signerOrProvider = this.signer || this.provider;
    return {
      havven: new Contract(
        addressList["Havven"],
        CONTRACT_ABIS["Havven"],
        signerOrProvider
      ),
      havven_state: new Contract(
        addressList["HavvenState"],
        CONTRACT_ABIS["State"],
        signerOrProvider
      ),
      havven_proxy: new Contract(
        addressList["HavvenProxy"],
        CONTRACT_ABIS["Havven"],
        signerOrProvider
      ),
      nomin: new Contract(
        addressList["Nomin"],
        CONTRACT_ABIS["Nomin"],
        signerOrProvider
      ),
      //nomin_state: new Contract(addressList['NominState'], CONTRACT_ABIS['State'], signerOrProvider),
      //court: new Contract(addressList['Court'], abiList['Court'], signerOrProvider),
      escrow: new Contract(
        addressList["Escrow"],
        CONTRACT_ABIS["Escrow"],
        signerOrProvider
      ),
      issuanceController: new Contract(
        addressList["IssuanceController"],
        CONTRACT_ABIS["IssuanceController"],
        signerOrProvider
      ),
      issuanceControllerInterface: new Interface(
        CONTRACT_ABIS["IssuanceController"]
      ),
      nominInterface: new Interface(CONTRACT_ABIS["Nomin"])
    };
  }

  constructor(account, signer, provider, networkId) {
    let addresses;
    let network;
    switch (networkId) {
      case 1:
        addresses = MAINNET_ADDRESSES;
        network = "mainnet";
        break;
      case 2:
        throw new Error("This is the deprecated Morden test network.");

      case 3:
        addresses = ROPSTEN_ADDRESSES;
        network = "ropsten";
        break;
      case 4:
        throw new Error("This is the Rinkeby test network.");

      case 42:
        addresses = KOVAN_ADDRESSES;
        network = "kovan";
        break;
      default:
        throw new Error("This is an unknown network.");
    }

    this.account = account;
    this.signer = signer;
    this.provider = provider;
    this.network = network;

    this.contracts = this.createContractObjects(addresses);
    this.addresses = addresses;

    this.convertEtherToNomins = this.convertEtherToNomins.bind(this);
    this.convertNominsToEther = this.convertNominsToEther.bind(this);
    this.convertNominsToHavvens = this.convertNominsToHavvens.bind(this);
    this.convertHavvensToNomins = this.convertHavvensToNomins.bind(this);
    this.encodeEthExchangeFunctionCall = this.encodeEthExchangeFunctionCall.bind(
      this
    );
    this.encodeApproveNominsForHavvensFunctionCall = this.encodeApproveNominsForHavvensFunctionCall.bind(
      this
    );
    this.encodeExchangeNominsForHavvensFunctionCall = this.encodeExchangeNominsForHavvensFunctionCall.bind(
      this
    );
    this.getEtherToNominsExchangeRate = this.getEtherToNominsExchangeRate.bind(
      this
    );
    this.getNominsReceivedForEther = this.getNominsReceivedForEther.bind(this);
    this.getNominToHavvenExchangeRate = this.getNominToHavvenExchangeRate.bind(
      this
    );
    this.getEtherBalance = this.getEtherBalance.bind(this);
    this.getHavvenBalance = this.getHavvenBalance.bind(this);
    this.getNominBalance = this.getNominBalance.bind(this);
    this.getTotalSupply = this.getTotalSupply.bind(this);
    this.getHavvenTotalSupply = this.getHavvenTotalSupply.bind(this);
    this.getEtherPrice = this.getEtherPrice.bind(this);
    this.getHavvenPrice = this.getHavvenPrice.bind(this);
    this.getNominPrice = this.getNominPrice.bind(this);
    this.getNominTransferFeeRate = this.getNominTransferFeeRate.bind(this);
    this.getApprovedNominTransferBalance = this.getApprovedNominTransferBalance.bind(
      this
    );
    this.approveNominsForHavvens = this.approveNominsForHavvens.bind(this);
    this.exchangeEtherForNomins = this.exchangeEtherForNomins.bind(this);
    this.exchangeNominsForHavvens = this.exchangeNominsForHavvens.bind(this);
    this.getTransactionInformation = this.getTransactionInformation.bind(this);
  }

  encodeEthExchangeFunctionCall() {
    const {
      data
    } = this.contracts.issuanceControllerInterface.functions.exchangeEtherForNomins();

    return data;
  }

  encodeApproveNominsForHavvensFunctionCall(amount) {
    const { data } = this.contracts.nominInterface.functions.approve(
      this.getToAddress(),
      utils.parseEther(amount)
    );

    return data;
  }

  encodeExchangeNominsForHavvensFunctionCall(amount) {
    const {
      data
    } = this.contracts.issuanceControllerInterface.functions.exchangeNominsForHavvens(
      utils.parseEther(amount)
    );

    return data;
  }

  cleanInput(inputAmount) {
    if (typeof inputAmount !== "string" && inputAmount.toString) {
      inputAmount = inputAmount.toString();
    }
    if (typeof inputAmount !== "string") {
      throw new Error("amount must be a string");
    }

    // Strip non-numeric characters from the string
    let clean = inputAmount.replace(/[^0-9.]/g, "");

    if (clean.length === 0) {
      clean = "0";
    }

    return clean;
  }

  async convertEtherToNomins(inputAmount) {
    inputAmount = this.cleanInput(inputAmount);

    const etherAmount = utils.parseEther(inputAmount);
    const [exchangeRate, nominAmount] = await Promise.all([
      this.getEtherToNominsExchangeRate(),
      this.getNominsReceivedForEther(etherAmount)
    ]);

    const nominFeeAmount = etherAmount
      .mul(exchangeRate)
      .div(utils.parseEther("1"))
      .sub(nominAmount);

    return {
      etherAmount: inputAmount,
      exchangeRate,
      nominAmount,
      nominFeeAmount
    };
  }

  async convertNominsToEther(inputAmount) {
    inputAmount = this.cleanInput(inputAmount);

    const unit = utils.parseEther("1");

    const fromAmount = utils.parseEther(inputAmount);
    const [exchangeRate, transferFeeRate] = await Promise.all([
      this.getEtherToNominsExchangeRate(),
      this.getNominTransferFeeRate()
    ]);

    const nominFeeAmount = fromAmount.mul(transferFeeRate).div(unit);
    const amountIncludingFee = fromAmount.add(nominFeeAmount);
    const reverseExchangeRate = unit.mul(unit).div(exchangeRate);

    const etherAmount = amountIncludingFee.mul(reverseExchangeRate).div(unit);

    return {
      nominAmount: inputAmount,
      exchangeRate,
      etherAmount,
      nominFeeAmount
    };
  }

  async convertNominsToHavvens(inputAmount) {
    inputAmount = this.cleanInput(inputAmount);

    const fromAmount = utils.parseEther(inputAmount);
    const [amountReceived, exchangeRate, havvenAmount] = await Promise.all([
      this.getNominAmountReceived(fromAmount),
      this.getNominToHavvenExchangeRate(),
      this.getHavvensReceivedForNomins(fromAmount)
    ]);

    const nominFeeAmount = fromAmount.sub(amountReceived);

    return {
      nominAmount: inputAmount,
      exchangeRate,
      havvenAmount,
      nominFeeAmount
    };
  }

  async convertHavvensToNomins(inputAmount) {
    inputAmount = this.cleanInput(inputAmount);

    const unit = utils.parseEther("1");

    const fromAmount = utils.parseEther(inputAmount);
    const exchangeRate = await this.getNominToHavvenExchangeRate();

    const reverseExchangeRate = unit.mul(unit).div(exchangeRate);

    const nominAmount = fromAmount.mul(reverseExchangeRate).div(unit);
    const nominsReceived = await this.getNominAmountReceived(nominAmount);
    const nominFeeAmount = nominAmount.sub(nominsReceived);

    return {
      havvenAmount: inputAmount,
      exchangeRate,
      nominAmount,
      nominFeeAmount
    };
  }

  async getEtherToNominsExchangeRate() {
    return await this.contracts.issuanceController.usdToEthPrice();
  }

  async getNominsReceivedForEther(amount) {
    return await this.contracts.issuanceController.nominsReceivedForEther(
      amount
    );
  }

  async getHavvensReceivedForNomins(amount) {
    return await this.contracts.issuanceController.havvensReceivedForNomins(
      amount
    );
  }

  async getNominToHavvenExchangeRate() {
    const unit = utils.parseEther("1");
    const havvenToNominPrice = await this.contracts.issuanceController.usdToHavPrice();
    const ret = unit.mul(unit).div(havvenToNominPrice);
    return await ret;
  }

  async getEtherBalance() {
    return await this.provider.getBalance(this.account);
  }

  async getHavvenBalance() {
    if (!this.account) {
      throw new Error("You must make this instance with an account");
    }
    return await this.contracts.havven.balanceOf(this.account);
  }

  async getNominBalance() {
    if (!this.account) {
      throw new Error("You must make this instance with an account");
    }
    return await this.contracts.nomin.balanceOf(this.account);
  }

  async getTotalSupply() {
    return await this.contracts.nomin.totalSupply();
  }

  async getHavvenTotalSupply() {
    return await this.contracts.havven.totalSupply();
  }

  async getEtherPrice() {
    return await this.contracts.issuanceController.usdToEthPrice();
  }

  async getHavvenPrice() {
    return await this.contracts.issuanceController.usdToHavPrice();
  }

  async getNominPrice() {
    return await this.contracts.issuanceController.usdToHavPrice();
  }

  async getNominTransferFeeRate() {
    return await this.contracts.nomin.transferFeeRate();
  }

  async getNominAmountReceived(amountSent) {
    return await this.contracts.nomin.amountReceived(amountSent);
  }

  async getApprovedNominTransferBalance() {
    if (this.account) {
      return await this.contracts.nomin.allowance(
        this.account,
        this.getToAddress()
      );
    }

    return 0;
  }

  async exchangeEtherForNomins(inputAmount, gasPrice = 1) {
    if (typeof inputAmount !== "string") {
      throw new Error("amount must be a string");
    }
    if (typeof gasPrice !== "number") {
      throw new Error("gasPrice must be a number");
    }
    return await this.contracts.issuanceController.exchangeEtherForNomins({
      value: utils.parseEther(inputAmount),
      gasPrice: gasPrice * GWEI,
      gasLimit: DEFAULT_GAS_LIMIT
    });
  }

  exchangeEtherForHavvens = async (inputAmount, gasPrice = 1) => {
    if (typeof inputAmount !== "string") {
      throw new Error("amount must be a string");
    }
    if (typeof gasPrice !== "number") {
      throw new Error("gasPrice must be a number");
    }
    return await this.contracts.issuanceController.exchangeEtherForHavvens({
      value: utils.parseEther(inputAmount),
      gasPrice: gasPrice * GWEI,
      gasLimit: DEFAULT_GAS_LIMIT
    });
  };

  async convertHavvensToEther(inputAmount) {
    inputAmount = this.cleanInput(inputAmount);

    const unit = utils.parseEther("1");

    const fromAmount = utils.parseEther(inputAmount);
    const [exchangeRate, transferFeeRate] = await Promise.all([
      this.getEtherToHavvensExchangeRate(),
      this.getNominTransferFeeRate()
    ]);

    const nominFeeAmount = fromAmount.mul(transferFeeRate).div(unit);
    const amountIncludingFee = fromAmount.add(nominFeeAmount);
    const reverseExchangeRate = unit.mul(unit).div(exchangeRate);

    const etherAmount = amountIncludingFee.mul(reverseExchangeRate).div(unit);

    return {
      nominAmount: inputAmount,
      exchangeRate,
      etherAmount,
      nominFeeAmount
    };
  }

  // todo implement
  convertEtherToHavvens = async inputAmount => {
    inputAmount = this.cleanInput(inputAmount);

    const etherAmount = utils.parseEther(inputAmount);
    const [exchangeRate, havvenAmount] = await Promise.all([
      this.getEtherToHavvensExchangeRate(),
      this.getHavvensReceivedForEther(etherAmount)
    ]);

    const nominFeeAmount = etherAmount
      .mul(exchangeRate)
      .div(utils.parseEther("1"))
      .sub(havvenAmount);

    return {
      etherAmount: inputAmount,
      exchangeRate,
      havvenAmount,
      nominFeeAmount
    };
  };

  getEtherToHavvensExchangeRate = async () => {
    const etherUSDPrice = await this.getEtherPrice();
    const havvenUSDPrice = await this.getHavvenPrice();
    return etherUSDPrice.mul(havvenUSDPrice);
  };

  getHavvensReceivedForEther = async amount => {
    return await this.contracts.issuanceController.havvensReceivedForEther(
      amount
    );
  };

  async approveNominsForHavvens(inputAmount, gasPrice = 1) {
    if (typeof inputAmount !== "string") {
      throw new Error("amount must be a string");
    }
    if (typeof gasPrice !== "number") {
      throw new Error("gasPrice must be a number");
    }

    const value = await this.contracts.nomin.approve(
      this.getToAddress(),
      utils.parseEther(inputAmount),
      {
        gasPrice: gasPrice * GWEI,
        gasLimit: DEFAULT_GAS_LIMIT
      }
    );
    return value;
  }

  async exchangeNominsForHavvens(inputAmount, gasPrice = 1) {
    if (typeof inputAmount !== "string") {
      throw new Error("amount must be a string");
    }

    if (typeof gasPrice !== "number") {
      throw new Error("gasPrice must be a number");
    }
    return await this.contracts.issuanceController.exchangeNominsForHavvens(
      utils.parseEther(inputAmount),
      {
        gasPrice: gasPrice * GWEI,
        gasLimit: DEFAULT_GAS_LIMIT
      }
    );
  }

  async getTransactionInformation(transactionHash) {
    if (typeof transactionHash !== "string") {
      throw new Error("transactionHash must be a string");
    }
    return await this.provider.getTransaction(transactionHash);
  }

  //
  // 	return new Promise(resolve=> {
  // 	this.provider.getTransactionReceipt(transactionHash,(err,result)=>{
  // 	resol
  // })
  // });
  getToAddress() {
    return this.addresses["IssuanceController"];
  }

  /**
   * Estimates gas for a transaction
   * @param toAddress - where to send transaction
   * @param ethValue - optional - if function requires ETH to be sent
   * @param data - optional if function requires data to be sent
   * example  (new Interface(CONTRACT_ABIS.IssuanceController).functions.exchangeEtherForNomins()).data
   * example2 nominInterface.functions.approve(MAINNET_ADDRESSES.IssuanceController, utils.parseEther("2")).data;
   * @returns {Promise<String>}
   */
  getGasEstimate = async (toAddress, ethValue, data) => {
    // to get the gas estimate, the contract needs to be
    // initialized with a wallet or a customSigner
    const privateKey =
      "0x0123456789012345678901234567890123456789012345678901234567890123";
    const wallet = new Wallet(privateKey, this.provider);
    const tx = { to: toAddress };
    if (ethValue) {
      tx.value = ethValue;
    }
    if (data) {
      tx.data = data;
    }
    const estimate = await wallet.estimateGas(tx);
    return estimate.toString();
  };

  getGasAndSpeedInfo = async () => {
    // ethToNomin uses approx 80,000, nominToHav 40,000 but approve 70,000; 100,000 is safe average
    const convetorTxGasPrice = DEFAULT_GAS_LIMIT;
    let [egsData, ethPrice] = await Promise.all([
      fetch("https://ethgasstation.info/json/ethgasAPI.json"),
      this.getEtherPrice()
    ]);
    egsData = await egsData.json();
    ethPrice = Number(utils.formatEther(ethPrice));
    const data = {
      gasFastGwei: egsData.fast / 10,
      gasAverageGwei: egsData.average / 10,
      gasSlowGwei: egsData.safeLow / 10,
      timeFastMinutes: egsData.fastWait,
      timeAverageMinutes: egsData.avgWait,
      timeSlowMinutes: egsData.safeLowWait
    };
    data.priceFastUsd =
      Math.round(
        ((data.gasFastGwei * ethPrice * convetorTxGasPrice) / GWEI) * 1000
      ) / 1000;
    data.priceAverageUsd =
      Math.round(
        ((data.gasAverageGwei * ethPrice * convetorTxGasPrice) / GWEI) * 1000
      ) / 1000;
    data.priceSlowUsd =
      Math.round(
        ((data.gasSlowGwei * ethPrice * convetorTxGasPrice) / GWEI) * 1000
      ) / 1000;
    return data;
  };

  setAccount = account => {
    this.account = account;
  };

  waitForTransaction = async transactionHash => {
    return new Promise(resolve => {
      const check = async () => {
        const transactionInformation = await this.getTransactionInformation(
          transactionHash
        );
        if (transactionInformation && transactionInformation.blockHash) {
          resolve(true);
        } else {
          setTimeout(check, 1000);
        }
      };
      check();
    });
  };
}
