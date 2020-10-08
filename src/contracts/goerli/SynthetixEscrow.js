import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/goerli/SynthetixEscrow';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function SynthetixEscrow(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['SynthetixEscrow'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_VESTING_ENTRIES = async () => {
    return await this.contract.MAX_VESTING_ENTRIES();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.QUANTITY_INDEX = async () => {
    return await this.contract.QUANTITY_INDEX();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.TIME_INDEX = async () => {
    return await this.contract.TIME_INDEX();
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
   * Assumes that the quantities are nonzero and that the sequence of timestamps is strictly increasing. This may only be called by the owner during the contract's setup period., Construct a vesting schedule to release a quantities of SNX over a series of intervals.<br>
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
   * A call to this should be accompanied by either enough balance already available in this contract, or a corresponding call to synthetix.endow(), to ensure that when the funds are withdrawn, there is enough balance, as well as correctly calculating the fees. This may only be called by the owner during the contract's setup period. Note; although this function could technically be used to produce unbounded arrays, it's only in the foundation's command to add to these lists., Add a new vesting entry at a given time and quantity to an account's schedule.<br>
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
   * A simple alias to totalVestedAccountBalance: provides ERC20 balance integration.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.balanceOf = async account => {
    return await this.contract.balanceOf(account);
  };

  /**
   * Obtain the next schedule entry that will vest for a given user.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns uint256[2]
   **/
  this.getNextVestingEntry = async account => {
    return await this.contract.getNextVestingEntry(account);
  };

  /**
   * Obtain the index of the next schedule entry that will vest for a given user.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.getNextVestingIndex = async account => {
    return await this.contract.getNextVestingIndex(account);
  };

  /**
   * Obtain the quantity which the next schedule entry will vest for a given user.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.getNextVestingQuantity = async account => {
    return await this.contract.getNextVestingQuantity(account);
  };

  /**
   * Obtain the time at which the next schedule entry will vest for a given user.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.getNextVestingTime = async account => {
    return await this.contract.getNextVestingTime(account);
  };

  /**
   * Get the quantity of SNX associated with a given schedule entry.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param index {BigNumber}
   * @returns BigNumber
   **/
  this.getVestingQuantity = async (account, index) => {
    return await this.contract.getVestingQuantity(account, index);
  };

  /**
   * Get a particular schedule entry for an account.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param index {BigNumber}
   * @returns uint256[2]
   **/
  this.getVestingScheduleEntry = async (account, index) => {
    return await this.contract.getVestingScheduleEntry(account, index);
  };

  /**
   * Get the time at which a given schedule entry will vest.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param index {BigNumber}
   * @returns BigNumber
   **/
  this.getVestingTime = async (account, index) => {
    return await this.contract.getVestingTime(account, index);
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
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * The number of vesting dates in an account's schedule.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.numVestingEntries = async account => {
    return await this.contract.numVestingEntries(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Destroy the vesting information associated with an account.<br>
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
   * @param _synthetix {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSynthetix = async (_synthetix, txParams) => {
    txParams = txParams || {};
    return await this.contract.setSynthetix(_synthetix, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.setupExpiryTime = async () => {
    return await this.contract.setupExpiryTime();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.synthetix = async () => {
    return await this.contract.synthetix();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns BigNumber
   **/
  this.totalVestedAccountBalance = async address_1 => {
    return await this.contract.totalVestedAccountBalance(address_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalVestedBalance = async () => {
    return await this.contract.totalVestedBalance();
  };

  /**
   * Allow a user to withdraw any SNX in their schedule that have vested.<br>
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.vest = async txParams => {
    txParams = txParams || {};
    return await this.contract.vest(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @param  {BigNumber}
   * @param  {BigNumber}
   * @returns BigNumber
   **/
  this.vestingSchedules = async (address_1, uint256_1, uint256_2) => {
    return await this.contract.vestingSchedules(address_1, uint256_1, uint256_2);
  };
}

export default SynthetixEscrow;
