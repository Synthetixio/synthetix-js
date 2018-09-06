import { Interface, utils } from 'ethers';
import abis from '../lib/abis/index';
import IssuanceController from './contracts/IssuanceController';
import Nomin from './contracts/Nomin';
import Havven from './contracts/Havven';

const GWEI = 1000000000;
const DEFAULT_GAS_LIMIT = 200000;

class Converter {
  constructor(contractSettings) {
    this.contractSettings = contractSettings;
    this.issuanceController = new IssuanceController(contractSettings);
    this.nomin = new Nomin(contractSettings);
    this.havven = new Havven(contractSettings);
    this.issuanceControllerInterface = new Interface(abis.IssuanceController);
    this.nominInterface = new Interface(abis.Nomin);

    this.convertEtherToNomins = this.convertEtherToNomins.bind(this);
    this.convertNominsToEther = this.convertNominsToEther.bind(this);
    this.convertNominsToHavvens = this.convertNominsToHavvens.bind(this);
    this.convertHavvensToNomins = this.convertHavvensToNomins.bind(this);
    this.encodeEthExchangeFunctionCall = this.encodeEthExchangeFunctionCall.bind(this);
    this.encodeApproveNominsForHavvensFunctionCall = this.encodeApproveNominsForHavvensFunctionCall.bind(
      this
    );
    this.encodeExchangeNominsForHavvensFunctionCall = this.encodeExchangeNominsForHavvensFunctionCall.bind(
      this
    );
    this.getEtherToNominsExchangeRate = this.getEtherToNominsExchangeRate.bind(this);
    this.getNominsReceivedForEther = this.getNominsReceivedForEther.bind(this);
    this.getNominToHavvenExchangeRate = this.getNominToHavvenExchangeRate.bind(this);
    this.getEtherBalance = this.getEtherBalance.bind(this);
    this.getHavvenBalance = this.getHavvenBalance.bind(this);
    this.getNominBalance = this.getNominBalance.bind(this);
    this.getTotalSupply = this.getTotalSupply.bind(this);
    this.getHavvenTotalSupply = this.getHavvenTotalSupply.bind(this);
    this.getEtherPrice = this.getEtherPrice.bind(this);
    this.getHavvenPrice = this.getHavvenPrice.bind(this);
    this.getNominPrice = this.getNominPrice.bind(this);
    this.getNominTransferFeeRate = this.getNominTransferFeeRate.bind(this);
    this.getApprovedNominTransferBalance = this.getApprovedNominTransferBalance.bind(this);
    this.approveNominsForHavvens = this.approveNominsForHavvens.bind(this);
    this.exchangeEtherForNomins = this.exchangeEtherForNomins.bind(this);
    this.exchangeNominsForHavvens = this.exchangeNominsForHavvens.bind(this);
    this.exchangeEtherForHavvens = this.exchangeEtherForHavvens.bind(this);
    this.convertEtherToHavvens = this.convertEtherToHavvens.bind(this);
    this.getEtherToHavvensExchangeRate = this.getEtherToHavvensExchangeRate.bind(this);
    this.getHavvensReceivedForEther = this.getHavvensReceivedForEther.bind(this);
    this.setAccount = this.setAccount.bind(this);
  }

  /**
   *
   * @returns {Number.data|*}
   */
  encodeEthExchangeFunctionCall() {
    const { data } = this.issuanceControllerInterface.functions.exchangeEtherForNomins();

    return data;
  }

  /**
   *
   * @param amount
   * @returns {Boolean.data}
   */
  encodeApproveNominsForHavvensFunctionCall(amount) {
    const { data } = this.nominInterface.functions.approve(
      this.getToAddress(),
      utils.parseEther(amount)
    );

    return data;
  }

  /**
   *
   * @param amount
   * @returns {Number.data|*}
   */
  encodeExchangeNominsForHavvensFunctionCall(amount) {
    const { data } = this.issuanceControllerInterface.functions.exchangeNominsForHavvens(
      utils.parseEther(amount)
    );

    return data;
  }

  /**
   *
   * @param inputAmount
   * @returns {string}
   */
  cleanInput(inputAmount) {
    if (typeof inputAmount !== 'string' && inputAmount.toString) {
      inputAmount = inputAmount.toString();
    }
    if (typeof inputAmount !== 'string') {
      throw new Error('amount must be a string');
    }

    // Strip non-numeric characters from the string
    let clean = inputAmount.replace(/[^0-9.]/g, '');

    if (clean.length === 0) {
      clean = '0';
    }

    return clean;
  }

  /**
   *
   * @param inputAmount
   * @returns {Promise<{etherAmount: string, exchangeRate: void, nominAmount: void, nominFeeAmount: *}>}
   */
  async convertEtherToNomins(inputAmount) {
    inputAmount = this.cleanInput(inputAmount);

    const etherAmount = utils.parseEther(inputAmount);
    const [exchangeRate, nominAmount] = await Promise.all([
      this.getEtherToNominsExchangeRate(),
      this.getNominsReceivedForEther(etherAmount),
    ]);

    const nominFeeAmount = etherAmount
      .mul(exchangeRate)
      .div(utils.parseEther('1'))
      .sub(nominAmount);

    return {
      etherAmount: inputAmount,
      exchangeRate,
      nominAmount,
      nominFeeAmount,
    };
  }

  /**
   *
   * @param inputAmount
   * @returns {Promise<{nominAmount: string, exchangeRate: void, etherAmount: *, nominFeeAmount: *}>}
   */
  async convertNominsToEther(inputAmount) {
    inputAmount = this.cleanInput(inputAmount);

    const unit = utils.parseEther('1');

    const fromAmount = utils.parseEther(inputAmount);
    const [exchangeRate, transferFeeRate] = await Promise.all([
      this.getEtherToNominsExchangeRate(),
      this.getNominTransferFeeRate(),
    ]);

    const nominFeeAmount = fromAmount.mul(transferFeeRate).div(unit);
    const amountIncludingFee = fromAmount.add(nominFeeAmount);
    const reverseExchangeRate = unit.mul(unit).div(exchangeRate);

    const etherAmount = amountIncludingFee.mul(reverseExchangeRate).div(unit);

    return {
      nominAmount: inputAmount,
      exchangeRate,
      etherAmount,
      nominFeeAmount,
    };
  }

  /**
   *
   * @param inputAmount
   * @returns {Promise<{nominAmount: string, exchangeRate: void, havvenAmount: void, nominFeeAmount: *}>}
   */
  async convertNominsToHavvens(inputAmount) {
    inputAmount = this.cleanInput(inputAmount);

    const fromAmount = utils.parseEther(inputAmount);
    const [amountReceived, exchangeRate, havvenAmount] = await Promise.all([
      this.getNominAmountReceived(fromAmount),
      this.getNominToHavvenExchangeRate(),
      this.getHavvensReceivedForNomins(fromAmount),
    ]);

    const nominFeeAmount = fromAmount.sub(amountReceived);

    return {
      nominAmount: inputAmount,
      exchangeRate,
      havvenAmount,
      nominFeeAmount,
    };
  }

  /**
   *
   * @param inputAmount
   * @returns {Promise<{havvenAmount: string, exchangeRate: void, nominAmount: *, nominFeeAmount: *}>}
   */
  async convertHavvensToNomins(inputAmount) {
    inputAmount = this.cleanInput(inputAmount);

    const unit = utils.parseEther('1');

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
      nominFeeAmount,
    };
  }

  /**
   *
   * @returns {Promise<void>}
   */
  async getEtherToNominsExchangeRate() {
    return await this.issuanceController.usdToEthPrice();
  }

  /**
   *
   * @param amount
   * @returns {Promise<void>}
   */
  async getNominsReceivedForEther(amount) {
    return await this.issuanceController.nominsReceivedForEther(amount);
  }

  /**
   *
   * @param amount
   * @returns {Promise<void>}
   */
  async getHavvensReceivedForNomins(amount) {
    return await this.issuanceController.havvensReceivedForNomins(amount);
  }

  /**
   *
   * @returns {Promise<void>}
   */
  async getNominToHavvenExchangeRate() {
    const unit = utils.parseEther('1');
    const havvenToNominPrice = await this.issuanceController.usdToHavPrice();
    const ret = unit.mul(unit).div(havvenToNominPrice);
    return await ret;
  }

  /**
   *
   * @returns {Promise<void>}
   */
  async getEtherBalance() {
    return await this.provider.getBalance(this.account);
  }

  /**
   *
   * @returns {Promise<void>}
   */
  async getHavvenBalance() {
    if (!this.account) {
      throw new Error('You must make this instance with an account');
    }
    return await this.havven.balanceOf(this.account);
  }

  /**
   *
   * @returns {Promise<void>}
   */
  async getNominBalance() {
    if (!this.account) {
      throw new Error('You must make this instance with an account');
    }
    return await this.nomin.balanceOf(this.account);
  }

  /**
   *
   * @returns {Promise<void>}
   */
  async getTotalSupply() {
    return await this.nomin.totalSupply();
  }

  /**
   *
   * @returns {Promise<void>}
   */
  async getHavvenTotalSupply() {
    return await this.havven.totalSupply();
  }

  /**
   *
   * @returns {Promise<void>}
   */
  async getEtherPrice() {
    return await this.issuanceController.usdToEthPrice();
  }

  /**
   *
   * @returns {Promise<void>}
   */
  async getHavvenPrice() {
    return await this.issuanceController.usdToHavPrice();
  }

  /**
   *
   * @returns {Promise<void>}
   */
  async getNominPrice() {
    return await this.issuanceController.usdToHavPrice();
  }

  /**
   *
   * @returns {Promise<void>}
   */
  async getNominTransferFeeRate() {
    return await this.nomin.transferFeeRate();
  }

  /**
   *
   * @param amountSent
   * @returns {Promise<void>}
   */
  async getNominAmountReceived(amountSent) {
    return await this.nomin.amountReceived(amountSent);
  }

  /**
   *
   * @returns {Promise<number>}
   */
  async getApprovedNominTransferBalance() {
    if (this.account) {
      return await this.nomin.allowance(this.account, this.getToAddress());
    }

    return 0;
  }

  /**
   *
   * @param inputAmount
   * @param gasPrice
   * @returns {Promise<*>}
   */
  async exchangeEtherForNomins(inputAmount, gasPrice = 1) {
    if (typeof inputAmount !== 'string') {
      throw new Error('amount must be a string');
    }
    if (typeof gasPrice !== 'number') {
      throw new Error('gasPrice must be a number');
    }
    return await this.issuanceController.exchangeEtherForNomins({
      value: utils.parseEther(inputAmount),
      gasPrice: gasPrice * GWEI,
      gasLimit: DEFAULT_GAS_LIMIT,
    });
  }

  /**
   *
   * @param inputAmount
   * @param gasPrice
   * @returns {Promise<*>}
   */
  async exchangeEtherForHavvens(inputAmount, gasPrice = 1) {
    if (typeof inputAmount !== 'string') {
      throw new Error('amount must be a string');
    }
    if (typeof gasPrice !== 'number') {
      throw new Error('gasPrice must be a number');
    }
    return await this.issuanceController.exchangeEtherForHavvens({
      value: utils.parseEther(inputAmount),
      gasPrice: gasPrice * GWEI,
      gasLimit: DEFAULT_GAS_LIMIT,
    });
  }

  /**
   *
   * @param inputAmount
   * @returns {Promise<{nominAmount: string, exchangeRate: void, etherAmount: *, nominFeeAmount: *}>}
   */
  async convertHavvensToEther(inputAmount) {
    inputAmount = this.cleanInput(inputAmount);

    const unit = utils.parseEther('1');

    const fromAmount = utils.parseEther(inputAmount);
    const [exchangeRate, transferFeeRate] = await Promise.all([
      this.getEtherToHavvensExchangeRate(),
      this.getNominTransferFeeRate(),
    ]);

    const nominFeeAmount = fromAmount.mul(transferFeeRate).div(unit);
    const amountIncludingFee = fromAmount.add(nominFeeAmount);
    const reverseExchangeRate = unit.mul(unit).div(exchangeRate);

    const etherAmount = amountIncludingFee.mul(reverseExchangeRate).div(unit);

    return {
      nominAmount: inputAmount,
      exchangeRate,
      etherAmount,
      nominFeeAmount,
    };
  }

  /**
   *
   * @param inputAmount
   * @returns {Promise<{etherAmount: string, exchangeRate: void, havvenAmount: void, nominFeeAmount: *}>}
   */
  async convertEtherToHavvens(inputAmount) {
    inputAmount = this.cleanInput(inputAmount);

    const etherAmount = utils.parseEther(inputAmount);
    const [exchangeRate, havvenAmount] = await Promise.all([
      this.getEtherToHavvensExchangeRate(),
      this.getHavvensReceivedForEther(etherAmount),
    ]);

    const nominFeeAmount = etherAmount
      .mul(exchangeRate)
      .div(utils.parseEther('1'))
      .sub(havvenAmount);

    return {
      etherAmount: inputAmount,
      exchangeRate,
      havvenAmount,
      nominFeeAmount,
    };
  }
  /**
   *
   * @returns {Promise<void>}
   */
  async getEtherToHavvensExchangeRate() {
    const etherUSDPrice = await this.getEtherPrice();
    const havvenUSDPrice = await this.getHavvenPrice();
    return etherUSDPrice.mul(havvenUSDPrice);
  }
  /**
   *
   * @param amount
   * @returns {Promise<void>}
   */
  async getHavvensReceivedForEther(amount) {
    return await this.issuanceController.havvensReceivedForEther(amount);
  }

  /**
   *
   * @param inputAmount
   * @param gasPrice
   * @returns {Promise<void>}
   */
  async approveNominsForHavvens(inputAmount, gasPrice = 1) {
    if (typeof inputAmount !== 'string') {
      throw new Error('amount must be a string');
    }
    if (typeof gasPrice !== 'number') {
      throw new Error('gasPrice must be a number');
    }

    const value = await this.nomin.approve(this.getToAddress(), utils.parseEther(inputAmount), {
      gasPrice: gasPrice * GWEI,
      gasLimit: DEFAULT_GAS_LIMIT,
    });
    return value;
  }

  async exchangeNominsForHavvens(inputAmount, gasPrice = 1) {
    if (typeof inputAmount !== 'string') {
      throw new Error('amount must be a string');
    }

    if (typeof gasPrice !== 'number') {
      throw new Error('gasPrice must be a number');
    }
    return await this.issuanceController.exchangeNominsForHavvens(utils.parseEther(inputAmount), {
      gasPrice: gasPrice * GWEI,
      gasLimit: DEFAULT_GAS_LIMIT,
    });
  }

  getToAddress() {
    return this.contractSettings.addresssList.IssuanceController;
  }

  setAccount(account) {
    this.account = account;
  }
}

export default Converter;
