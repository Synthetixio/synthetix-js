import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/ovm/ImportableRewardEscrowV2';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function RewardEscrowV2(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['RewardEscrowV2'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

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
   * @returns BigNumber
   **/
  this.accountMergingDuration = async () => {
    return await this.contract.accountMergingDuration();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.accountMergingIsOpen = async () => {
    return await this.contract.accountMergingIsOpen();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.accountMergingStartTime = async () => {
    return await this.contract.accountMergingStartTime();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @param  {BigNumber}
   * @returns BigNumber
   **/
  this.accountVestingEntryIDs = async (address_1, uint256_1) => {
    return await this.contract.accountVestingEntryIDs(address_1, uint256_1);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param quantity {BigNumber}
   * @param duration {BigNumber}
   * @param txParams {TxParams}

   **/
  this.appendVestingEntry = async (account, quantity, duration, txParams) => {
    txParams = txParams || {};
    return await this.contract.appendVestingEntry(account, quantity, duration, txParams);
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
   * @param  {String<EthAddress>}
   * @param  {uint256[]}
   * @param txParams {TxParams}
   * @returns Object
   **/
  this.burnForMigration = async (address_1, uint256_1, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnForMigration(address_1, uint256_1, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param beneficiary {String<EthAddress>}
   * @param deposit {BigNumber}
   * @param duration {BigNumber}
   * @param txParams {TxParams}

   **/
  this.createEscrowEntry = async (beneficiary, deposit, duration, txParams) => {
    txParams = txParams || {};
    return await this.contract.createEscrowEntry(beneficiary, deposit, duration, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param index {BigNumber}
   * @param pageSize {BigNumber}
   * @returns uint256[]
   **/
  this.getAccountVestingEntryIDs = async (account, index, pageSize) => {
    return await this.contract.getAccountVestingEntryIDs(account, index, pageSize);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param entryID {BigNumber}
   * @returns Object
   **/
  this.getVestingEntry = async (account, entryID) => {
    return await this.contract.getVestingEntry(account, entryID);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param entryID {BigNumber}
   * @returns BigNumber
   **/
  this.getVestingEntryClaimable = async (account, entryID) => {
    return await this.contract.getVestingEntryClaimable(account, entryID);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param entryIDs {uint256[]}
   * @returns BigNumber
   **/
  this.getVestingQuantity = async (account, entryIDs) => {
    return await this.contract.getVestingQuantity(account, entryIDs);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param index {BigNumber}
   * @param pageSize {BigNumber}
   * @returns tuple[]
   **/
  this.getVestingSchedules = async (account, index, pageSize) => {
    return await this.contract.getVestingSchedules(account, index, pageSize);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param escrowedAmount {BigNumber}
   * @param vestingEntries {tuple[]}
   * @param txParams {TxParams}

   **/
  this.importVestingEntries = async (account, escrowedAmount, vestingEntries, txParams) => {
    txParams = txParams || {};
    return await this.contract.importVestingEntries(
      account,
      escrowedAmount,
      vestingEntries,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.isResolverCached = async () => {
    return await this.contract.isResolverCached();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.maxAccountMergingDuration = async () => {
    return await this.contract.maxAccountMergingDuration();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.max_duration = async () => {
    return await this.contract.max_duration();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param accountToMerge {String<EthAddress>}
   * @param entryIDs {uint256[]}
   * @param txParams {TxParams}

   **/
  this.mergeAccount = async (accountToMerge, entryIDs, txParams) => {
    txParams = txParams || {};
    return await this.contract.mergeAccount(accountToMerge, entryIDs, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param  {address[]}
   * @param  {uint256[]}
   * @param  {uint256[]}
   * @param txParams {TxParams}

   **/
  this.migrateAccountEscrowBalances = async (address_1, uint256_1, uint256_2, txParams) => {
    txParams = txParams || {};
    return await this.contract.migrateAccountEscrowBalances(
      address_1,
      uint256_1,
      uint256_2,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param  {String<EthAddress>}
   * @param txParams {TxParams}

   **/
  this.migrateVestingSchedule = async (address_1, txParams) => {
    txParams = txParams || {};
    return await this.contract.migrateVestingSchedule(address_1, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.nextEntryId = async () => {
    return await this.contract.nextEntryId();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param txParams {TxParams}

   **/
  this.nominateAccountToMerge = async (account, txParams) => {
    txParams = txParams || {};
    return await this.contract.nominateAccountToMerge(account, txParams);
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
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns String<EthAddress>
   **/
  this.nominatedReceiver = async address_1 => {
    return await this.contract.nominatedReceiver(address_1);
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
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}

   **/
  this.rebuildCache = async txParams => {
    txParams = txParams || {};
    return await this.contract.rebuildCache(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.resolver = async () => {
    return await this.contract.resolver();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[]
   **/
  this.resolverAddressesRequired = async () => {
    return await this.contract.resolverAddressesRequired();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param duration {BigNumber}
   * @param txParams {TxParams}

   **/
  this.setAccountMergingDuration = async (duration, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAccountMergingDuration(duration, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param duration {BigNumber}
   * @param txParams {TxParams}

   **/
  this.setMaxAccountMergingWindow = async (duration, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaxAccountMergingWindow(duration, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param duration {BigNumber}
   * @param txParams {TxParams}

   **/
  this.setMaxEscrowDuration = async (duration, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaxEscrowDuration(duration, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.setupExpiryTime = async () => {
    return await this.contract.setupExpiryTime();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}

   **/
  this.startMergingWindow = async txParams => {
    txParams = txParams || {};
    return await this.contract.startMergingWindow(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns BigNumber
   **/
  this.totalEscrowedAccountBalance = async address_1 => {
    return await this.contract.totalEscrowedAccountBalance(address_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalEscrowedBalance = async () => {
    return await this.contract.totalEscrowedBalance();
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
   * Transaction (consumes gas, requires signer)
   * @param entryIDs {uint256[]}
   * @param txParams {TxParams}

   **/
  this.vest = async (entryIDs, txParams) => {
    txParams = txParams || {};
    return await this.contract.vest(entryIDs, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @param  {BigNumber}
   * @returns Object
   **/
  this.vestingSchedules = async (address_1, uint256_1) => {
    return await this.contract.vestingSchedules(address_1, uint256_1);
  };
}

export default RewardEscrowV2;
