import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/ropsten/DappMaintenance';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function DappMaintenance(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['DappMaintenance'],
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
  this.isPausedSX = async () => {
    return await this.contract.isPausedSX();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.isPausedStaking = async () => {
    return await this.contract.isPausedStaking();
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
   * Transaction (consumes gas, requires signer)
   * @param isPaused {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setMaintenanceModeAll = async (isPaused, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaintenanceModeAll(isPaused, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param isPaused {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setMaintenanceModeSX = async (isPaused, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaintenanceModeSX(isPaused, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param isPaused {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setMaintenanceModeStaking = async (isPaused, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaintenanceModeStaking(isPaused, txParams);
  };
}

export default DappMaintenance;
