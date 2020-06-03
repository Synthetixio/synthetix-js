import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/rinkeby/RewardsDistribution';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function RewardsDistribution(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['RewardsDistribution'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.distributionsLength = async () => {
    return await this.contract.distributionsLength();
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
   * @param  {BigNumber}
   * @returns Object
   **/
  this.distributions = async uint256_1 => {
    return await this.contract.distributions(uint256_1);
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
   * @returns boolean
   **/
  this.distributeRewards = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.distributeRewards(amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _rewardEscrow {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setRewardEscrow = async (_rewardEscrow, txParams) => {
    txParams = txParams || {};
    return await this.contract.setRewardEscrow(_rewardEscrow, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param destination {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.addRewardDistribution = async (destination, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.addRewardDistribution(destination, amount, txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param _authority {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setAuthority = async (_authority, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAuthority(_authority, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param index {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.removeRewardDistribution = async (index, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeRewardDistribution(index, txParams);
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
   * @param _synthetixProxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSynthetixProxy = async (_synthetixProxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setSynthetixProxy(_synthetixProxy, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.rewardEscrow = async () => {
    return await this.contract.rewardEscrow();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.synthetixProxy = async () => {
    return await this.contract.synthetixProxy();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.authority = async () => {
    return await this.contract.authority();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.feePoolProxy = async () => {
    return await this.contract.feePoolProxy();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _feePoolProxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFeePoolProxy = async (_feePoolProxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFeePoolProxy(_feePoolProxy, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param index {BigNumber}
   * @param destination {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.editRewardDistribution = async (index, destination, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.editRewardDistribution(index, destination, amount, txParams);
  };
}

export default RewardsDistribution;
