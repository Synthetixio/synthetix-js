import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan/SystemSettings';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function SystemSettings(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['SystemSettings'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.CONTRACT_NAME = async () => {
    return await this.contract.CONTRACT_NAME();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_ATOMIC_TWAP_WINDOW = async () => {
    return await this.contract.MAX_ATOMIC_TWAP_WINDOW();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW = async () => {
    return await this.contract.MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_ATOMIC_VOLUME_PER_BLOCK = async () => {
    return await this.contract.MAX_ATOMIC_VOLUME_PER_BLOCK();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_CROSS_DOMAIN_GAS_LIMIT = async () => {
    return await this.contract.MAX_CROSS_DOMAIN_GAS_LIMIT();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_EXCHANGE_FEE_RATE = async () => {
    return await this.contract.MAX_EXCHANGE_FEE_RATE();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_FEE_PERIOD_DURATION = async () => {
    return await this.contract.MAX_FEE_PERIOD_DURATION();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_ISSUANCE_RATIO = async () => {
    return await this.contract.MAX_ISSUANCE_RATIO();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_LIQUIDATION_DELAY = async () => {
    return await this.contract.MAX_LIQUIDATION_DELAY();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_LIQUIDATION_PENALTY = async () => {
    return await this.contract.MAX_LIQUIDATION_PENALTY();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_LIQUIDATION_RATIO = async () => {
    return await this.contract.MAX_LIQUIDATION_RATIO();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_MINIMUM_STAKE_TIME = async () => {
    return await this.contract.MAX_MINIMUM_STAKE_TIME();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_TARGET_THRESHOLD = async () => {
    return await this.contract.MAX_TARGET_THRESHOLD();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns int256
   **/
  this.MAX_WRAPPER_BURN_FEE_RATE = async () => {
    return await this.contract.MAX_WRAPPER_BURN_FEE_RATE();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns int256
   **/
  this.MAX_WRAPPER_MINT_FEE_RATE = async () => {
    return await this.contract.MAX_WRAPPER_MINT_FEE_RATE();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MIN_ATOMIC_TWAP_WINDOW = async () => {
    return await this.contract.MIN_ATOMIC_TWAP_WINDOW();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW = async () => {
    return await this.contract.MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MIN_CROSS_DOMAIN_GAS_LIMIT = async () => {
    return await this.contract.MIN_CROSS_DOMAIN_GAS_LIMIT();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MIN_FEE_PERIOD_DURATION = async () => {
    return await this.contract.MIN_FEE_PERIOD_DURATION();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MIN_LIQUIDATION_DELAY = async () => {
    return await this.contract.MIN_LIQUIDATION_DELAY();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.RATIO_FROM_TARGET_BUFFER = async () => {
    return await this.contract.RATIO_FROM_TARGET_BUFFER();
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
   * @returns String<EthAddress>
   **/
  this.aggregatorWarningFlags = async () => {
    return await this.contract.aggregatorWarningFlags();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns String<EthAddress>
   **/
  this.atomicEquivalentForDexPricing = async currencyKey => {
    return await this.contract.atomicEquivalentForDexPricing(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.atomicExchangeFeeRate = async currencyKey => {
    return await this.contract.atomicExchangeFeeRate(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.atomicMaxVolumePerBlock = async () => {
    return await this.contract.atomicMaxVolumePerBlock();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.atomicPriceBuffer = async currencyKey => {
    return await this.contract.atomicPriceBuffer(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.atomicTwapWindow = async () => {
    return await this.contract.atomicTwapWindow();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.atomicVolatilityConsiderationWindow = async currencyKey => {
    return await this.contract.atomicVolatilityConsiderationWindow(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.atomicVolatilityUpdateThreshold = async currencyKey => {
    return await this.contract.atomicVolatilityUpdateThreshold(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param collateral {String<EthAddress>}
   * @returns BigNumber
   **/
  this.collapseFeeRate = async collateral => {
    return await this.contract.collapseFeeRate(collateral);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param collateral {String<EthAddress>}
   * @returns String<EthAddress>
   **/
  this.collateralManager = async collateral => {
    return await this.contract.collateralManager(collateral);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param gasLimitType {Number}
   * @returns BigNumber
   **/
  this.crossDomainMessageGasLimit = async gasLimitType => {
    return await this.contract.crossDomainMessageGasLimit(gasLimitType);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.debtSnapshotStaleTime = async () => {
    return await this.contract.debtSnapshotStaleTime();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.etherWrapperBurnFeeRate = async () => {
    return await this.contract.etherWrapperBurnFeeRate();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.etherWrapperMaxETH = async () => {
    return await this.contract.etherWrapperMaxETH();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.etherWrapperMintFeeRate = async () => {
    return await this.contract.etherWrapperMintFeeRate();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.exchangeFeeRate = async currencyKey => {
    return await this.contract.exchangeFeeRate(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.feePeriodDuration = async () => {
    return await this.contract.feePeriodDuration();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param collateral {String<EthAddress>}
   * @returns BigNumber
   **/
  this.interactionDelay = async collateral => {
    return await this.contract.interactionDelay(collateral);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.isResolverCached = async () => {
    return await this.contract.isResolverCached();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.issuanceRatio = async () => {
    return await this.contract.issuanceRatio();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.liquidationDelay = async () => {
    return await this.contract.liquidationDelay();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.liquidationPenalty = async () => {
    return await this.contract.liquidationPenalty();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.liquidationRatio = async () => {
    return await this.contract.liquidationRatio();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param collateral {String<EthAddress>}
   * @returns BigNumber
   **/
  this.minCratio = async collateral => {
    return await this.contract.minCratio(collateral);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.minimumStakeTime = async () => {
    return await this.contract.minimumStakeTime();
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
   * @returns BigNumber
   **/
  this.rateStalePeriod = async () => {
    return await this.contract.rateStalePeriod();
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
   * @param _flags {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setAggregatorWarningFlags = async (_flags, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAggregatorWarningFlags(_flags, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _currencyKey {bytes32}
   * @param _equivalent {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setAtomicEquivalentForDexPricing = async (_currencyKey, _equivalent, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAtomicEquivalentForDexPricing(
      _currencyKey,
      _equivalent,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _currencyKey {bytes32}
   * @param _exchangeFeeRate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setAtomicExchangeFeeRate = async (_currencyKey, _exchangeFeeRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAtomicExchangeFeeRate(_currencyKey, _exchangeFeeRate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _maxVolume {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setAtomicMaxVolumePerBlock = async (_maxVolume, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAtomicMaxVolumePerBlock(_maxVolume, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _currencyKey {bytes32}
   * @param _buffer {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setAtomicPriceBuffer = async (_currencyKey, _buffer, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAtomicPriceBuffer(_currencyKey, _buffer, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _window {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setAtomicTwapWindow = async (_window, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAtomicTwapWindow(_window, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _currencyKey {bytes32}
   * @param _window {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setAtomicVolatilityConsiderationWindow = async (_currencyKey, _window, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAtomicVolatilityConsiderationWindow(
      _currencyKey,
      _window,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _currencyKey {bytes32}
   * @param _threshold {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setAtomicVolatilityUpdateThreshold = async (_currencyKey, _threshold, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAtomicVolatilityUpdateThreshold(
      _currencyKey,
      _threshold,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _collateral {String<EthAddress>}
   * @param _collapseFeeRate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setCollapseFeeRate = async (_collateral, _collapseFeeRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setCollapseFeeRate(_collateral, _collapseFeeRate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _collateral {String<EthAddress>}
   * @param _newCollateralManager {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setCollateralManager = async (_collateral, _newCollateralManager, txParams) => {
    txParams = txParams || {};
    return await this.contract.setCollateralManager(_collateral, _newCollateralManager, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _gasLimitType {Number}
   * @param _crossDomainMessageGasLimit {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setCrossDomainMessageGasLimit = async (
    _gasLimitType,
    _crossDomainMessageGasLimit,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.setCrossDomainMessageGasLimit(
      _gasLimitType,
      _crossDomainMessageGasLimit,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _seconds {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setDebtSnapshotStaleTime = async (_seconds, txParams) => {
    txParams = txParams || {};
    return await this.contract.setDebtSnapshotStaleTime(_seconds, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _rate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setEtherWrapperBurnFeeRate = async (_rate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setEtherWrapperBurnFeeRate(_rate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _maxETH {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setEtherWrapperMaxETH = async (_maxETH, txParams) => {
    txParams = txParams || {};
    return await this.contract.setEtherWrapperMaxETH(_maxETH, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _rate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setEtherWrapperMintFeeRate = async (_rate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setEtherWrapperMintFeeRate(_rate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param synthKeys {bytes32[]}
   * @param exchangeFeeRates {uint256[]}
   * @param txParams {TxParams}
  
   **/
  this.setExchangeFeeRateForSynths = async (synthKeys, exchangeFeeRates, txParams) => {
    txParams = txParams || {};
    return await this.contract.setExchangeFeeRateForSynths(synthKeys, exchangeFeeRates, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _feePeriodDuration {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setFeePeriodDuration = async (_feePeriodDuration, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFeePeriodDuration(_feePeriodDuration, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _collateral {String<EthAddress>}
   * @param _interactionDelay {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setInteractionDelay = async (_collateral, _interactionDelay, txParams) => {
    txParams = txParams || {};
    return await this.contract.setInteractionDelay(_collateral, _interactionDelay, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _issuanceRatio {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setIssuanceRatio = async (_issuanceRatio, txParams) => {
    txParams = txParams || {};
    return await this.contract.setIssuanceRatio(_issuanceRatio, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param time {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setLiquidationDelay = async (time, txParams) => {
    txParams = txParams || {};
    return await this.contract.setLiquidationDelay(time, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param penalty {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setLiquidationPenalty = async (penalty, txParams) => {
    txParams = txParams || {};
    return await this.contract.setLiquidationPenalty(penalty, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _liquidationRatio {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setLiquidationRatio = async (_liquidationRatio, txParams) => {
    txParams = txParams || {};
    return await this.contract.setLiquidationRatio(_liquidationRatio, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _collateral {String<EthAddress>}
   * @param _minCratio {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMinCratio = async (_collateral, _minCratio, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMinCratio(_collateral, _minCratio, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _seconds {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMinimumStakeTime = async (_seconds, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMinimumStakeTime(_seconds, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _priceDeviationThresholdFactor {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setPriceDeviationThresholdFactor = async (_priceDeviationThresholdFactor, txParams) => {
    txParams = txParams || {};
    return await this.contract.setPriceDeviationThresholdFactor(
      _priceDeviationThresholdFactor,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param period {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setRateStalePeriod = async (period, txParams) => {
    txParams = txParams || {};
    return await this.contract.setRateStalePeriod(period, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _percent {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setTargetThreshold = async (_percent, txParams) => {
    txParams = txParams || {};
    return await this.contract.setTargetThreshold(_percent, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _tradingRewardsEnabled {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setTradingRewardsEnabled = async (_tradingRewardsEnabled, txParams) => {
    txParams = txParams || {};
    return await this.contract.setTradingRewardsEnabled(_tradingRewardsEnabled, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _waitingPeriodSecs {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setWaitingPeriodSecs = async (_waitingPeriodSecs, txParams) => {
    txParams = txParams || {};
    return await this.contract.setWaitingPeriodSecs(_waitingPeriodSecs, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _wrapper {String<EthAddress>}
   * @param _rate {int256}
   * @param txParams {TxParams}
  
   **/
  this.setWrapperBurnFeeRate = async (_wrapper, _rate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setWrapperBurnFeeRate(_wrapper, _rate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _wrapper {String<EthAddress>}
   * @param _maxTokenAmount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setWrapperMaxTokenAmount = async (_wrapper, _maxTokenAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.setWrapperMaxTokenAmount(_wrapper, _maxTokenAmount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _wrapper {String<EthAddress>}
   * @param _rate {int256}
   * @param txParams {TxParams}
  
   **/
  this.setWrapperMintFeeRate = async (_wrapper, _rate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setWrapperMintFeeRate(_wrapper, _rate, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.targetThreshold = async () => {
    return await this.contract.targetThreshold();
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

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param wrapper {String<EthAddress>}
   * @returns int256
   **/
  this.wrapperBurnFeeRate = async wrapper => {
    return await this.contract.wrapperBurnFeeRate(wrapper);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param wrapper {String<EthAddress>}
   * @returns BigNumber
   **/
  this.wrapperMaxTokenAmount = async wrapper => {
    return await this.contract.wrapperMaxTokenAmount(wrapper);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param wrapper {String<EthAddress>}
   * @returns int256
   **/
  this.wrapperMintFeeRate = async wrapper => {
    return await this.contract.wrapperMintFeeRate(wrapper);
  };
}

export default SystemSettings;
