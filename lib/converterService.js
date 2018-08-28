import { Contract, providers, utils, Interface } from "ethers";
import { CONTRACT_ABIS } from "./abi/contracts";
import { MAINNET_ADDRESSES } from "./addresses";

const addressList = MAINNET_ADDRESSES;
const MAINNET_CHAIN_ID = 1;
const DEFAULT_GAS_LIMIT = 200000;
export const defaultProvider = new providers.getDefaultProvider();

const signers = require("./signers");
const contracts = {
  havven: new Contract(
    addressList["Havven"],
    CONTRACT_ABIS["Havven"],
    defaultProvider
  ),
  havven_state: new Contract(
    addressList["HavvenState"],
    CONTRACT_ABIS["State"],
    defaultProvider
  ),
  havven_proxy: new Contract(
    addressList["HavvenProxy"],
    CONTRACT_ABIS["Havven"],
    defaultProvider
  ),
  nomin: new Contract(
    addressList["Nomin"],
    CONTRACT_ABIS["Nomin"],
    defaultProvider
  ),
  escrow: new Contract(
    addressList["Escrow"],
    CONTRACT_ABIS["Escrow"],
    defaultProvider
  ),
  issuanceController: new Contract(
    addressList["IssuanceController"],
    CONTRACT_ABIS["IssuanceController"],
    defaultProvider
  ),
  issuanceControllerInterface: new Interface(
    CONTRACT_ABIS["IssuanceController"]
  ),
  nominInterface: new Interface(CONTRACT_ABIS["Nomin"])
};

export const exchangeEtherForNomins = async ({
  inputAmount,
  gasPrice = 1,
  walletType,
  fromAddress
}) => {
  if (!inputAmount) {
    throw new Error("amount required");
  }
  if (!walletType) {
    throw new Error("walletType required");
  }
  if (!fromAddress) {
    throw new Error("fromAddress required");
  }
  const data = contracts.issuanceControllerInterface.functions.exchangeEtherForNomins();
  const transaction = {
    to: addressList.IssuanceController,
    data: data.data,
    value: utils.parseEther(inputAmount.toString()).toHexString(),
    gasPrice: utils.parseUnits(gasPrice.toString(), "gwei").toHexString()
  };
  return signAndSendTransaction({
    transaction,
    walletType,
    fromAddress
  });
};

export const signAndSendTransaction = async ({
  transaction,
  walletType,
  fromAddress
}) => {
  const nonce = await defaultProvider.getTransactionCount(fromAddress);
  transaction.nonce = nonce;
  transaction.gasLimit = DEFAULT_GAS_LIMIT;
  transaction.chainId = MAINNET_CHAIN_ID;

  const signedTx = await signers[walletType].signTransaction(transaction);
  const signedSerialziedTx = "0x" + signedTx.serialize().toString("hex");
  const res = await defaultProvider.sendTransaction(signedSerialziedTx);
  return res;
};
/**
 * Returns event logs for a specific contract event and fetches block timestamp for each transaction
 * @param contractAddress {String} in format "0x1234567890abcdef"
 * @param event - {Object<ethers.Interface>}ethers.js event interface
 * @param fromBlock
 * @returns {Promise<*>}
 */
export const getEventLogs = async (contractAddress, event, fromBlock) => {
  const blockTimestampMap = {};
  try {
    const logs = await defaultProvider.getLogs({
      fromBlock: fromBlock,
      address: contractAddress,
      topics: event.topics
    });
    const events = logs.map(log => ({
      ...log,
      parsedData: event.parse(log.topics, log.data)
    }));
    const blocks = await Promise.all(
      events.map(event => defaultProvider.getBlock(event.blockNumber))
    );
    blocks.forEach(block => {
      blockTimestampMap[block.number] = new Date(block.timestamp * 1000);
    });
    events.forEach(event => {
      event.timestamp = blockTimestampMap[event.blockNumber];
    });
    return events;
  } catch (err) {
    console.log(err);
  }
};

export const getLatestConversions = async () => {
  const latestBlockNumber = await defaultProvider.getBlockNumber();
  const contractAddr = addressList.IssuanceController;
  const icContract = new Contract(
    contractAddr,
    CONTRACT_ABIS.IssuanceController,
    defaultProvider
  );
  const ExchangeEvent = icContract.interface.events.Exchange;
  let events = await getEventLogs(
    contractAddr,
    ExchangeEvent,
    latestBlockNumber - 10000
  );
  if (events.length < 5) {
    events = await getEventLogs(
      contractAddr,
      ExchangeEvent,
      latestBlockNumber - 100000
    );
  }
  if (!events || !events.length) {
    return [];
  }
  return events.reverse().slice(0, 20);
};

export const parseEther = utils.parseEther;
export const formatEther = utils.formatEther;
