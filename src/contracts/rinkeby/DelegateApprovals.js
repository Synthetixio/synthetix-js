import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/rinkeby/DelegateApprovals';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function DelegateApprovals(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['DelegateApprovals'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param authoriser {String<EthAddress>}
   * @param delegate {String<EthAddress>}
   * @returns boolean
   **/
  this.canIssueFor = async (authoriser, delegate) => {
    return await this.contract.canIssueFor(authoriser, delegate);
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
   * @param authoriser {String<EthAddress>}
   * @param delegate {String<EthAddress>}
   * @returns boolean
   **/
  this.canClaimFor = async (authoriser, delegate) => {
    return await this.contract.canClaimFor(authoriser, delegate);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.ISSUE_FOR_ADDRESS = async () => {
    return await this.contract.ISSUE_FOR_ADDRESS();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param delegate {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.approveClaimOnBehalf = async (delegate, txParams) => {
    txParams = txParams || {};
    return await this.contract.approveClaimOnBehalf(delegate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param delegate {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.removeIssueOnBehalf = async (delegate, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeIssueOnBehalf(delegate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param delegate {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.approveExchangeOnBehalf = async (delegate, txParams) => {
    txParams = txParams || {};
    return await this.contract.approveExchangeOnBehalf(delegate, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param delegate {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.removeBurnOnBehalf = async (delegate, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeBurnOnBehalf(delegate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param delegate {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.removeClaimOnBehalf = async (delegate, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeClaimOnBehalf(delegate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param delegate {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.removeAllDelegatePowers = async (delegate, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeAllDelegatePowers(delegate, txParams);
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
   * @param authoriser {String<EthAddress>}
   * @param delegate {String<EthAddress>}
   * @returns boolean
   **/
  this.canBurnFor = async (authoriser, delegate) => {
    return await this.contract.canBurnFor(authoriser, delegate);
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
   * @returns String<EthAddress>
   **/
  this.eternalStorage = async () => {
    return await this.contract.eternalStorage();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param delegate {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.approveBurnOnBehalf = async (delegate, txParams) => {
    txParams = txParams || {};
    return await this.contract.approveBurnOnBehalf(delegate, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.APPROVE_ALL = async () => {
    return await this.contract.APPROVE_ALL();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param delegate {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.approveIssueOnBehalf = async (delegate, txParams) => {
    txParams = txParams || {};
    return await this.contract.approveIssueOnBehalf(delegate, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param authoriser {String<EthAddress>}
   * @param delegate {String<EthAddress>}
   * @returns boolean
   **/
  this.approvedAll = async (authoriser, delegate) => {
    return await this.contract.approvedAll(authoriser, delegate);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _eternalStorage {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setEternalStorage = async (_eternalStorage, txParams) => {
    txParams = txParams || {};
    return await this.contract.setEternalStorage(_eternalStorage, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param delegate {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.removeExchangeOnBehalf = async (delegate, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeExchangeOnBehalf(delegate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param delegate {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.approveAllDelegatePowers = async (delegate, txParams) => {
    txParams = txParams || {};
    return await this.contract.approveAllDelegatePowers(delegate, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.CLAIM_FOR_ADDRESS = async () => {
    return await this.contract.CLAIM_FOR_ADDRESS();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.EXCHANGE_FOR_ADDRESS = async () => {
    return await this.contract.EXCHANGE_FOR_ADDRESS();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.BURN_FOR_ADDRESS = async () => {
    return await this.contract.BURN_FOR_ADDRESS();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param authoriser {String<EthAddress>}
   * @param delegate {String<EthAddress>}
   * @returns boolean
   **/
  this.canExchangeFor = async (authoriser, delegate) => {
    return await this.contract.canExchangeFor(authoriser, delegate);
  };
}

export default DelegateApprovals;
