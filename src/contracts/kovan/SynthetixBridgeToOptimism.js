import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan/SynthetixBridgeToOptimism';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function SynthetixBridgeToOptimism(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['SynthetixBridgeToOptimism'],
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
   * Transaction (consumes gas, requires signer)
   * @param snxBackedAmount {BigNumber}
   * @param totalDebtShares {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.closeFeePeriod = async (snxBackedAmount, totalDebtShares, txParams) => {
    txParams = txParams || {};
    return await this.contract.closeFeePeriod(snxBackedAmount, totalDebtShares, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.deposit = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.deposit(amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param depositAmount {BigNumber}
   * @param entryIDs {uint256[][]}
   * @param txParams {TxParams}
  
   **/
  this.depositAndMigrateEscrow = async (depositAmount, entryIDs, txParams) => {
    txParams = txParams || {};
    return await this.contract.depositAndMigrateEscrow(depositAmount, entryIDs, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.depositReward = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.depositReward(amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param to {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.depositTo = async (to, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.depositTo(to, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param to {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.finalizeWithdrawal = async (to, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.finalizeWithdrawal(to, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param token {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.forwardTokensToEscrow = async (token, txParams) => {
    txParams = txParams || {};
    return await this.contract.forwardTokensToEscrow(token, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.initiationActive = async () => {
    return await this.contract.initiationActive();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.isResolverCached = async () => {
    return await this.contract.isResolverCached();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param entryIDs {uint256[][]}
   * @param txParams {TxParams}
  
   **/
  this.migrateEscrow = async (entryIDs, txParams) => {
    txParams = txParams || {};
    return await this.contract.migrateEscrow(entryIDs, txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.notifyRewardAmount = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.notifyRewardAmount(amount, txParams);
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
   * @param txParams {TxParams}
  
   **/
  this.resumeInitiation = async txParams => {
    txParams = txParams || {};
    return await this.contract.resumeInitiation(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.suspendInitiation = async txParams => {
    txParams = txParams || {};
    return await this.contract.suspendInitiation(txParams);
  };
}

export default SynthetixBridgeToOptimism;
