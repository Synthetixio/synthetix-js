import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/ovm/SecondaryDeposit';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function SecondaryDeposit(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['SecondaryDeposit'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_ADDRESSES_FROM_RESOLVER = async () => {
    return await this.contract.MAX_ADDRESSES_FROM_RESOLVER();
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
   * @returns boolean
   **/
  this.activated = async () => {
    return await this.contract.activated();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param  {String<EthAddress>}
   * @param  {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.completeWithdrawal = async (address_1, uint256_1, txParams) => {
    txParams = txParams || {};
    return await this.contract.completeWithdrawal(address_1, uint256_1, txParams);
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
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[24]
   **/
  this.getResolverAddressesRequired = async () => {
    return await this.contract.getResolverAddressesRequired();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param  {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.initiateWithdrawal = async (uint256_1, txParams) => {
    txParams = txParams || {};
    return await this.contract.initiateWithdrawal(uint256_1, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _resolver {String<EthAddress>}
   * @returns boolean
   **/
  this.isResolverCached = async _resolver => {
    return await this.contract.isResolverCached(_resolver);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.maximumDeposit = async () => {
    return await this.contract.maximumDeposit();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param newDeposit {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.migrateDeposit = async (newDeposit, txParams) => {
    txParams = txParams || {};
    return await this.contract.migrateDeposit(newDeposit, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.mintSecondaryFromDeposit = async (account, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.mintSecondaryFromDeposit(account, amount, txParams);
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
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
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
   * @param  {BigNumber}
   * @returns bytes32
   **/
  this.resolverAddressesRequired = async uint256_1 => {
    return await this.contract.resolverAddressesRequired(uint256_1);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _resolver {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setResolverAndSyncCache = async (_resolver, txParams) => {
    txParams = txParams || {};
    return await this.contract.setResolverAndSyncCache(_resolver, txParams);
  };
}

export default SecondaryDeposit;
