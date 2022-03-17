import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan/SystemStatus';

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
  this.SECTION_FUTURES = async () => {
    return await this.contract.SECTION_FUTURES();
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
  this.SECTION_SYNTH_EXCHANGE = async () => {
    return await this.contract.SECTION_SYNTH_EXCHANGE();
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
   * @param  {bytes32}
   * @returns Object
   **/
  this.futuresMarketSuspension = async bytes32_1 => {
    return await this.contract.futuresMarketSuspension(bytes32_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.futuresSuspension = async () => {
    return await this.contract.futuresSuspension();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param marketKeys {bytes32[]}
   * @returns Object
   **/
  this.getFuturesMarketSuspensions = async marketKeys => {
    return await this.contract.getFuturesMarketSuspensions(marketKeys);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param synths {bytes32[]}
   * @returns Object
   **/
  this.getSynthExchangeSuspensions = async synths => {
    return await this.contract.getSynthExchangeSuspensions(synths);
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
   * @param sourceCurrencyKey {bytes32}
   * @param destinationCurrencyKey {bytes32}
  
   **/
  this.requireExchangeBetweenSynthsAllowed = async (sourceCurrencyKey, destinationCurrencyKey) => {
    return await this.contract.requireExchangeBetweenSynthsAllowed(
      sourceCurrencyKey,
      destinationCurrencyKey
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
  
   **/
  this.requireFuturesActive = async () => {
    return await this.contract.requireFuturesActive();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param marketKey {bytes32}
  
   **/
  this.requireFuturesMarketActive = async marketKey => {
    return await this.contract.requireFuturesMarketActive(marketKey);
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
   * @param currencyKey {bytes32}
  
   **/
  this.requireSynthExchangeActive = async currencyKey => {
    return await this.contract.requireSynthExchangeActive(currencyKey);
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
  this.resumeFutures = async txParams => {
    txParams = txParams || {};
    return await this.contract.resumeFutures(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param marketKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.resumeFuturesMarket = async (marketKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.resumeFuturesMarket(marketKey, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param marketKeys {bytes32[]}
   * @param txParams {TxParams}
  
   **/
  this.resumeFuturesMarkets = async (marketKeys, txParams) => {
    txParams = txParams || {};
    return await this.contract.resumeFuturesMarkets(marketKeys, txParams);
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
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.resumeSynthExchange = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.resumeSynthExchange(currencyKey, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKeys {bytes32[]}
   * @param txParams {TxParams}
  
   **/
  this.resumeSynths = async (currencyKeys, txParams) => {
    txParams = txParams || {};
    return await this.contract.resumeSynths(currencyKeys, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKeys {bytes32[]}
   * @param txParams {TxParams}
  
   **/
  this.resumeSynthsExchange = async (currencyKeys, txParams) => {
    txParams = txParams || {};
    return await this.contract.resumeSynthsExchange(currencyKeys, txParams);
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
  this.suspendFutures = async (reason, txParams) => {
    txParams = txParams || {};
    return await this.contract.suspendFutures(reason, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param marketKey {bytes32}
   * @param reason {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.suspendFuturesMarket = async (marketKey, reason, txParams) => {
    txParams = txParams || {};
    return await this.contract.suspendFuturesMarket(marketKey, reason, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param marketKeys {bytes32[]}
   * @param reason {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.suspendFuturesMarkets = async (marketKeys, reason, txParams) => {
    txParams = txParams || {};
    return await this.contract.suspendFuturesMarkets(marketKeys, reason, txParams);
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
   * @param currencyKey {bytes32}
   * @param reason {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.suspendSynthExchange = async (currencyKey, reason, txParams) => {
    txParams = txParams || {};
    return await this.contract.suspendSynthExchange(currencyKey, reason, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKeys {bytes32[]}
   * @param reason {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.suspendSynths = async (currencyKeys, reason, txParams) => {
    txParams = txParams || {};
    return await this.contract.suspendSynths(currencyKeys, reason, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKeys {bytes32[]}
   * @param reason {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.suspendSynthsExchange = async (currencyKeys, reason, txParams) => {
    txParams = txParams || {};
    return await this.contract.suspendSynthsExchange(currencyKeys, reason, txParams);
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
  this.synthExchangeSuspension = async bytes32_1 => {
    return await this.contract.synthExchangeSuspension(bytes32_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.synthSuspended = async currencyKey => {
    return await this.contract.synthSuspended(currencyKey);
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
   * @returns boolean
   **/
  this.systemSuspended = async () => {
    return await this.contract.systemSuspended();
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

  /**
   * Transaction (consumes gas, requires signer)
   * @param sections {bytes32[]}
   * @param accounts {address[]}
   * @param canSuspends {bool[]}
   * @param canResumes {bool[]}
   * @param txParams {TxParams}
  
   **/
  this.updateAccessControls = async (sections, accounts, canSuspends, canResumes, txParams) => {
    txParams = txParams || {};
    return await this.contract.updateAccessControls(
      sections,
      accounts,
      canSuspends,
      canResumes,
      txParams
    );
  };
}

export default SystemStatus;
