import { Contract } from 'ethers';
import abis from '../../lib/abis/index';
import ContractSettings from '../contractSettings';
const abi = abis.Escrow;

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Escrow(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['Escrow'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.purgeAccount = async (account, txParams) => {
    txParams = txParams || {};
    return await this.contract.purgeAccount(account, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _owner {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.nominateNewOwner = async (_owner, txParams) => {
    txParams = txParams || {};
    return await this.contract.nominateNewOwner(_owner, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param quantity {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.withdrawHavvens = async (quantity, txParams) => {
    txParams = txParams || {};
    return await this.contract.withdrawHavvens(quantity, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.getNextVestingIndex = async account => {
    return await this.contract.getNextVestingIndex(account);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param time {BigNumber}
   * @param quantity {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.appendVestingEntry = async (account, time, quantity, txParams) => {
    txParams = txParams || {};
    return await this.contract.appendVestingEntry(account, time, quantity, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.numVestingEntries = async account => {
    return await this.contract.numVestingEntries(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns BigNumber
   **/
  this.totalVestedAccountBalance = async address => {
    return await this.contract.totalVestedAccountBalance(address);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns uint256[2]
   **/
  this.getNextVestingEntry = async account => {
    return await this.contract.getNextVestingEntry(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.decimals = async () => {
    return await this.contract.decimals();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.vest = async txParams => {
    txParams = txParams || {};
    return await this.contract.vest(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param address {String<EthAddress>}
   * @param a {BigNumber}
   * @param b {BigNumber}
   * @returns BigNumber
   **/
  this.vestingSchedules = async (address, a, b) => {
    return await this.contract.vestingSchedules(address, a, b);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _havven {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setHavven = async (_havven, txParams) => {
    txParams = txParams || {};
    return await this.contract.setHavven(_havven, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.getNextVestingTime = async account => {
    return await this.contract.getNextVestingTime(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.balanceOf = async account => {
    return await this.contract.balanceOf(account);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    return await this.contract.acceptOwnership(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.getNextVestingQuantity = async account => {
    return await this.contract.getNextVestingQuantity(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param index {BigNumber}
   * @returns BigNumber
   **/
  this.getVestingTime = async (account, index) => {
    return await this.contract.getVestingTime(account, index);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.havven = async () => {
    return await this.contract.havven();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.UNIT = async () => {
    return await this.contract.UNIT();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalVestedBalance = async () => {
    return await this.contract.totalVestedBalance();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param times {uint256[]}
   * @param quantities {uint256[]}
   * @param txParams {TxParams}
  
   **/
  this.addVestingSchedule = async (account, times, quantities, txParams) => {
    txParams = txParams || {};
    return await this.contract.addVestingSchedule(account, times, quantities, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param index {BigNumber}
   * @returns uint256[2]
   **/
  this.getVestingScheduleEntry = async (account, index) => {
    return await this.contract.getVestingScheduleEntry(account, index);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param index {BigNumber}
   * @returns BigNumber
   **/
  this.getVestingQuantity = async (account, index) => {
    return await this.contract.getVestingQuantity(account, index);
  };
}

export default Escrow;
