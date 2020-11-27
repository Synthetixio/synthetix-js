import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/goerli/SystemStatus';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function SystemStatus(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['SystemStatus'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.SECTION_EXCHANGE = async () => {
    return await this.contract.SECTION_EXCHANGE();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.SECTION_ISSUANCE = async () => {
    return await this.contract.SECTION_ISSUANCE();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.SECTION_SYNTH = async () => {
    return await this.contract.SECTION_SYNTH();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.SECTION_SYSTEM = async () => {
    return await this.contract.SECTION_SYSTEM();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns uint248
   **/
  this.SUSPENSION_REASON_UPGRADE = async () => {
    return await this.contract.SUSPENSION_REASON_UPGRADE();
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
   * @param  {bytes32}
   * @param  {String<EthAddress>}
   * @returns Object
   **/
  this.accessControl = async (bytes32_1, address_1) => {
    return await this.contract.accessControl(bytes32_1, address_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.exchangeSuspension = async () => {
    return await this.contract.exchangeSuspension();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param synths {bytes32[]}
   * @returns Object
   **/
  this.getSynthSuspensions = async synths => {
    return await this.contract.getSynthSuspensions(synths);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.isSystemUpgrading = async () => {
    return await this.contract.isSystemUpgrading();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.issuanceSuspension = async () => {
    return await this.contract.issuanceSuspension();
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
  
   **/
  this.requireExchangeActive = async () => {
    return await this.contract.requireExchangeActive();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
  
   **/
  this.requireIssuanceActive = async () => {
    return await this.contract.requireIssuanceActive();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
  
   **/
  this.requireSynthActive = async currencyKey => {
    return await this.contract.requireSynthActive(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param sourceCurrencyKey {bytes32}
   * @param destinationCurrencyKey {bytes32}
  
   **/
  this.requireSynthsActive = async (sourceCurrencyKey, destinationCurrencyKey) => {
    return await this.contract.requireSynthsActive(sourceCurrencyKey, destinationCurrencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
  
   **/
  this.requireSystemActive = async () => {
    return await this.contract.requireSystemActive();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.resumeExchange = async txParams => {
    txParams = txParams || {};
    return await this.contract.resumeExchange(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.resumeIssuance = async txParams => {
    txParams = txParams || {};
    return await this.contract.resumeIssuance(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.resumeSynth = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.resumeSynth(currencyKey, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.resumeSystem = async txParams => {
    txParams = txParams || {};
    return await this.contract.resumeSystem(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param reason {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.suspendExchange = async (reason, txParams) => {
    txParams = txParams || {};
    return await this.contract.suspendExchange(reason, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param reason {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.suspendIssuance = async (reason, txParams) => {
    txParams = txParams || {};
    return await this.contract.suspendIssuance(reason, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param reason {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.suspendSynth = async (currencyKey, reason, txParams) => {
    txParams = txParams || {};
    return await this.contract.suspendSynth(currencyKey, reason, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param reason {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.suspendSystem = async (reason, txParams) => {
    txParams = txParams || {};
    return await this.contract.suspendSystem(reason, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns Object
   **/
  this.synthSuspension = async bytes32_1 => {
    return await this.contract.synthSuspension(bytes32_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.systemSuspension = async () => {
    return await this.contract.systemSuspension();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param section {bytes32}
   * @param account {String<EthAddress>}
   * @param canSuspend {boolean}
   * @param canResume {boolean}
   * @param txParams {TxParams}
  
   **/
  this.updateAccessControl = async (section, account, canSuspend, canResume, txParams) => {
    txParams = txParams || {};
    return await this.contract.updateAccessControl(
      section,
      account,
      canSuspend,
      canResume,
      txParams
    );
  };
}

export default SystemStatus;
