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
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.activated = async () => {
    return await this.contract.activated();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.completeWithdrawal = async (account, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.completeWithdrawal(account, amount, txParams);
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
   * @param depositAmount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.initiateDeposit = async (depositAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.initiateDeposit(depositAmount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param entryIDs {uint256[][]}
   * @param txParams {TxParams}
  
   **/
  this.initiateEscrowMigration = async (entryIDs, txParams) => {
    txParams = txParams || {};
    return await this.contract.initiateEscrowMigration(entryIDs, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.initiateRewardDeposit = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.initiateRewardDeposit(amount, txParams);
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
   * @param newBridge {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.migrateBridge = async (newBridge, txParams) => {
    txParams = txParams || {};
    return await this.contract.migrateBridge(newBridge, txParams);
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
}

export default SynthetixBridgeToOptimism;
