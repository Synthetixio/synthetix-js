import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/rinkeby/SystemSettings';

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
   * @returns BigNumber
   **/
  this.crossDomainMessageGasLimit = async () => {
    return await this.contract.crossDomainMessageGasLimit();
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
   * @param _crossDomainMessageGasLimit {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setCrossDomainMessageGasLimit = async (_crossDomainMessageGasLimit, txParams) => {
    txParams = txParams || {};
    return await this.contract.setCrossDomainMessageGasLimit(_crossDomainMessageGasLimit, txParams);
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
}

export default SystemSettings;
