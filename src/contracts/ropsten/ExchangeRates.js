import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/ropsten/ExchangeRates';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function ExchangeRates(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['ExchangeRates'],
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
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY();
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
   * @param currencyKey {bytes32}
   * @param aggregatorAddress {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.addAggregator = async (currencyKey, aggregatorAddress, txParams) => {
    txParams = txParams || {};
    return await this.contract.addAggregator(currencyKey, aggregatorAddress, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns bytes32
   **/
  this.aggregatorKeys = async uint256_1 => {
    return await this.contract.aggregatorKeys(uint256_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.aggregatorWarningFlags = async () => {
    return await this.contract.aggregatorWarningFlags();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns String<EthAddress>
   **/
  this.aggregators = async bytes32_1 => {
    return await this.contract.aggregators(bytes32_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKeys {bytes32[]}
   * @returns boolean
   **/
  this.anyRateIsInvalid = async currencyKeys => {
    return await this.contract.anyRateIsInvalid(currencyKeys);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.canFreezeRate = async currencyKey => {
    return await this.contract.canFreezeRate(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param aggregator {String<EthAddress>}
   * @returns bytes32[]
   **/
  this.currenciesUsingAggregator = async aggregator => {
    return await this.contract.currenciesUsingAggregator(aggregator);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns BigNumber
   **/
  this.currentRoundForRate = async bytes32_1 => {
    return await this.contract.currentRoundForRate(bytes32_1);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.deleteRate = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.deleteRate(currencyKey, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @returns BigNumber
   **/
  this.effectiveValue = async (sourceCurrencyKey, sourceAmount, destinationCurrencyKey) => {
    return await this.contract.effectiveValue(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @returns Object
   **/
  this.effectiveValueAndRates = async (sourceCurrencyKey, sourceAmount, destinationCurrencyKey) => {
    return await this.contract.effectiveValueAndRates(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param roundIdForSrc {BigNumber}
   * @param roundIdForDest {BigNumber}
   * @returns BigNumber
   **/
  this.effectiveValueAtRound = async (
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    roundIdForSrc,
    roundIdForDest
  ) => {
    return await this.contract.effectiveValueAtRound(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      roundIdForSrc,
      roundIdForDest
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.freezeRate = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.freezeRate(currencyKey, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.getCurrentRoundId = async currencyKey => {
    return await this.contract.getCurrentRoundId(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @param startingRoundId {BigNumber}
   * @param startingTimestamp {BigNumber}
   * @param timediff {BigNumber}
   * @returns BigNumber
   **/
  this.getLastRoundIdBeforeElapsedSecs = async (
    currencyKey,
    startingRoundId,
    startingTimestamp,
    timediff
  ) => {
    return await this.contract.getLastRoundIdBeforeElapsedSecs(
      currencyKey,
      startingRoundId,
      startingTimestamp,
      timediff
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
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.initiateSelfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.initiateSelfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns Object
   **/
  this.inversePricing = async bytes32_1 => {
    return await this.contract.inversePricing(bytes32_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns bytes32
   **/
  this.invertedKeys = async uint256_1 => {
    return await this.contract.invertedKeys(uint256_1);
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
   * @returns BigNumber
   **/
  this.lastRateUpdateTimes = async currencyKey => {
    return await this.contract.lastRateUpdateTimes(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKeys {bytes32[]}
   * @returns uint256[]
   **/
  this.lastRateUpdateTimesForCurrencies = async currencyKeys => {
    return await this.contract.lastRateUpdateTimesForCurrencies(currencyKeys);
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
  this.oracle = async () => {
    return await this.contract.oracle();
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
   * @param currencyKey {bytes32}
   * @param roundId {BigNumber}
   * @returns Object
   **/
  this.rateAndTimestampAtRound = async (currencyKey, roundId) => {
    return await this.contract.rateAndTimestampAtRound(currencyKey, roundId);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns Object
   **/
  this.rateAndUpdatedTime = async currencyKey => {
    return await this.contract.rateAndUpdatedTime(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.rateForCurrency = async currencyKey => {
    return await this.contract.rateForCurrency(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.rateIsFlagged = async currencyKey => {
    return await this.contract.rateIsFlagged(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.rateIsFrozen = async currencyKey => {
    return await this.contract.rateIsFrozen(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.rateIsInvalid = async currencyKey => {
    return await this.contract.rateIsInvalid(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.rateIsStale = async currencyKey => {
    return await this.contract.rateIsStale(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.rateStalePeriod = async () => {
    return await this.contract.rateStalePeriod();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKeys {bytes32[]}
   * @returns Object
   **/
  this.ratesAndInvalidForCurrencies = async currencyKeys => {
    return await this.contract.ratesAndInvalidForCurrencies(currencyKeys);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @param numRounds {BigNumber}
   * @returns Object
   **/
  this.ratesAndUpdatedTimeForCurrencyLastNRounds = async (currencyKey, numRounds) => {
    return await this.contract.ratesAndUpdatedTimeForCurrencyLastNRounds(currencyKey, numRounds);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKeys {bytes32[]}
   * @returns uint256[]
   **/
  this.ratesForCurrencies = async currencyKeys => {
    return await this.contract.ratesForCurrencies(currencyKeys);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.removeAggregator = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeAggregator(currencyKey, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.removeInversePricing = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeInversePricing(currencyKey, txParams);
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
   * @param txParams {TxParams}
  
   **/
  this.selfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.selfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param entryPoint {BigNumber}
   * @param upperLimit {BigNumber}
   * @param lowerLimit {BigNumber}
   * @param freezeAtUpperLimit {boolean}
   * @param freezeAtLowerLimit {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setInversePricing = async (
    currencyKey,
    entryPoint,
    upperLimit,
    lowerLimit,
    freezeAtUpperLimit,
    freezeAtLowerLimit,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.setInversePricing(
      currencyKey,
      entryPoint,
      upperLimit,
      lowerLimit,
      freezeAtUpperLimit,
      freezeAtLowerLimit,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _oracle {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setOracle = async (_oracle, txParams) => {
    txParams = txParams || {};
    return await this.contract.setOracle(_oracle, txParams);
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
   * @param _beneficiary {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSelfDestructBeneficiary = async (_beneficiary, txParams) => {
    txParams = txParams || {};
    return await this.contract.setSelfDestructBeneficiary(_beneficiary, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.terminateSelfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.terminateSelfDestruct(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKeys {bytes32[]}
   * @param newRates {uint256[]}
   * @param timeSent {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.updateRates = async (currencyKeys, newRates, timeSent, txParams) => {
    txParams = txParams || {};
    return await this.contract.updateRates(currencyKeys, newRates, timeSent, txParams);
  };
}

export default ExchangeRates;
