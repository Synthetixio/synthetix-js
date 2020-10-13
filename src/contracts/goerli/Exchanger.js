import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/goerli/Exchanger';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Exchanger(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['Exchanger'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.CIRCUIT_BREAKER_SUSPENSION_REASON = async () => {
    return await this.contract.CIRCUIT_BREAKER_SUSPENSION_REASON();
  };

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
   * @param from {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @param amount {BigNumber}
   * @param refunded {BigNumber}
   * @returns BigNumber
   **/
  this.calculateAmountAfterSettlement = async (from, currencyKey, amount, refunded) => {
    return await this.contract.calculateAmountAfterSettlement(from, currencyKey, amount, refunded);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param destinationAddress {String<EthAddress>}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchange = async (
    from,
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    destinationAddress,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchange(
      from,
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      destinationAddress,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param exchangeForAddress {String<EthAddress>}
   * @param from {String<EthAddress>}
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeOnBehalf = async (
    exchangeForAddress,
    from,
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeOnBehalf(
      exchangeForAddress,
      from,
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param exchangeForAddress {String<EthAddress>}
   * @param from {String<EthAddress>}
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param originator {String<EthAddress>}
   * @param trackingCode {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeOnBehalfWithTracking = async (
    exchangeForAddress,
    from,
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    originator,
    trackingCode,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeOnBehalfWithTracking(
      exchangeForAddress,
      from,
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      originator,
      trackingCode,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param destinationAddress {String<EthAddress>}
   * @param originator {String<EthAddress>}
   * @param trackingCode {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeWithTracking = async (
    from,
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    destinationAddress,
    originator,
    trackingCode,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeWithTracking(
      from,
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      destinationAddress,
      originator,
      trackingCode,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param sourceCurrencyKey {bytes32}
   * @param destinationCurrencyKey {bytes32}
   * @returns BigNumber
   **/
  this.feeRateForExchange = async (sourceCurrencyKey, destinationCurrencyKey) => {
    return await this.contract.feeRateForExchange(sourceCurrencyKey, destinationCurrencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param sourceAmount {BigNumber}
   * @param sourceCurrencyKey {bytes32}
   * @param destinationCurrencyKey {bytes32}
   * @returns Object
   **/
  this.getAmountsForExchange = async (sourceAmount, sourceCurrencyKey, destinationCurrencyKey) => {
    return await this.contract.getAmountsForExchange(
      sourceAmount,
      sourceCurrencyKey,
      destinationCurrencyKey
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[24]
   **/
  this.getResolverAddressesRequired = async () => {
    return await this.contract.getResolverAddressesRequired();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.hasWaitingPeriodOrSettlementOwing = async (account, currencyKey) => {
    return await this.contract.hasWaitingPeriodOrSettlementOwing(account, currencyKey);
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
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.isSynthRateInvalid = async currencyKey => {
    return await this.contract.isSynthRateInvalid(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns BigNumber
   **/
  this.lastExchangeRate = async bytes32_1 => {
    return await this.contract.lastExchangeRate(bytes32_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.maxSecsLeftInWaitingPeriod = async (account, currencyKey) => {
    return await this.contract.maxSecsLeftInWaitingPeriod(account, currencyKey);
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
   * @returns BigNumber
   **/
  this.priceDeviationThresholdFactor = async () => {
    return await this.contract.priceDeviationThresholdFactor();
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
   * @param currencyKey {bytes32}
   * @param rate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setLastExchangeRateForSynth = async (currencyKey, rate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setLastExchangeRateForSynth(currencyKey, rate, txParams);
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

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
   * @returns Object
   **/
  this.settle = async (from, currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.settle(from, currencyKey, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns Object
   **/
  this.settlementOwing = async (account, currencyKey) => {
    return await this.contract.settlementOwing(account, currencyKey);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.suspendSynthWithInvalidRate = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.suspendSynthWithInvalidRate(currencyKey, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.tradingRewardsEnabled = async () => {
    return await this.contract.tradingRewardsEnabled();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.waitingPeriodSecs = async () => {
    return await this.contract.waitingPeriodSecs();
  };
}

export default Exchanger;
