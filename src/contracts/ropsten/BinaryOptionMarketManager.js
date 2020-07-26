import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/ropsten/BinaryOptionMarketManager';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function BinaryOptionMarketManager(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['BinaryOptionMarketManager'],
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
   * Call (no gas consumed, doesn't require signer)
   * @param index {BigNumber}
   * @param pageSize {BigNumber}
   * @returns address[]
   **/
  this.activeMarkets = async (index, pageSize) => {
    return await this.contract.activeMarkets(index, pageSize);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param market {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.cancelMarket = async (market, txParams) => {
    txParams = txParams || {};
    return await this.contract.cancelMarket(market, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param oracleKey {bytes32}
   * @param strikePrice {BigNumber}
   * @param refundsEnabled {boolean}
   * @param times {uint256[2]}
   * @param bids {uint256[2]}
   * @param txParams {TxParams}
   * @returns String<EthAddress>
   **/
  this.createMarket = async (oracleKey, strikePrice, refundsEnabled, times, bids, txParams) => {
    txParams = txParams || {};
    return await this.contract.createMarket(
      oracleKey,
      strikePrice,
      refundsEnabled,
      times,
      bids,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.creatorLimits = async () => {
    return await this.contract.creatorLimits();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param delta {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.decrementTotalDeposited = async (delta, txParams) => {
    txParams = txParams || {};
    return await this.contract.decrementTotalDeposited(delta, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.durations = async () => {
    return await this.contract.durations();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param markets {address[]}
   * @param txParams {TxParams}
  
   **/
  this.expireMarkets = async (markets, txParams) => {
    txParams = txParams || {};
    return await this.contract.expireMarkets(markets, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.fees = async () => {
    return await this.contract.fees();
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
   * @param delta {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.incrementTotalDeposited = async (delta, txParams) => {
    txParams = txParams || {};
    return await this.contract.incrementTotalDeposited(delta, txParams);
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
  this.lastPauseTime = async () => {
    return await this.contract.lastPauseTime();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.marketCreationEnabled = async () => {
    return await this.contract.marketCreationEnabled();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param index {BigNumber}
   * @param pageSize {BigNumber}
   * @returns address[]
   **/
  this.maturedMarkets = async (index, pageSize) => {
    return await this.contract.maturedMarkets(index, pageSize);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param receivingManager {String<EthAddress>}
   * @param active {boolean}
   * @param marketsToMigrate {address[]}
   * @param txParams {TxParams}
  
   **/
  this.migrateMarkets = async (receivingManager, active, marketsToMigrate, txParams) => {
    txParams = txParams || {};
    return await this.contract.migrateMarkets(receivingManager, active, marketsToMigrate, txParams);
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
   * @returns BigNumber
   **/
  this.numActiveMarkets = async () => {
    return await this.contract.numActiveMarkets();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.numMaturedMarkets = async () => {
    return await this.contract.numMaturedMarkets();
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
   * @returns boolean
   **/
  this.paused = async () => {
    return await this.contract.paused();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param active {boolean}
   * @param marketsToReceive {address[]}
   * @param txParams {TxParams}
  
   **/
  this.receiveMarkets = async (active, marketsToReceive, txParams) => {
    txParams = txParams || {};
    return await this.contract.receiveMarkets(active, marketsToReceive, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param market {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.resolveMarket = async (market, txParams) => {
    txParams = txParams || {};
    return await this.contract.resolveMarket(market, txParams);
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
   * @param _creatorCapitalRequirement {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setCreatorCapitalRequirement = async (_creatorCapitalRequirement, txParams) => {
    txParams = txParams || {};
    return await this.contract.setCreatorCapitalRequirement(_creatorCapitalRequirement, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _creatorFee {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setCreatorFee = async (_creatorFee, txParams) => {
    txParams = txParams || {};
    return await this.contract.setCreatorFee(_creatorFee, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _creatorSkewLimit {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setCreatorSkewLimit = async (_creatorSkewLimit, txParams) => {
    txParams = txParams || {};
    return await this.contract.setCreatorSkewLimit(_creatorSkewLimit, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _expiryDuration {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setExpiryDuration = async (_expiryDuration, txParams) => {
    txParams = txParams || {};
    return await this.contract.setExpiryDuration(_expiryDuration, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param enabled {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setMarketCreationEnabled = async (enabled, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMarketCreationEnabled(enabled, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _maxOraclePriceAge {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMaxOraclePriceAge = async (_maxOraclePriceAge, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaxOraclePriceAge(_maxOraclePriceAge, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _maxTimeToMaturity {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMaxTimeToMaturity = async (_maxTimeToMaturity, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaxTimeToMaturity(_maxTimeToMaturity, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param manager {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setMigratingManager = async (manager, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMigratingManager(manager, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _paused {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setPaused = async (_paused, txParams) => {
    txParams = txParams || {};
    return await this.contract.setPaused(_paused, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _poolFee {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setPoolFee = async (_poolFee, txParams) => {
    txParams = txParams || {};
    return await this.contract.setPoolFee(_poolFee, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _refundFee {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setRefundFee = async (_refundFee, txParams) => {
    txParams = txParams || {};
    return await this.contract.setRefundFee(_refundFee, txParams);
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
   * @param _resolver {String<EthAddress>}
   * @param marketsToSync {address[]}
   * @param txParams {TxParams}
  
   **/
  this.setResolverAndSyncCacheOnMarkets = async (_resolver, marketsToSync, txParams) => {
    txParams = txParams || {};
    return await this.contract.setResolverAndSyncCacheOnMarkets(_resolver, marketsToSync, txParams);
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
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalDeposited = async () => {
    return await this.contract.totalDeposited();
  };
}

export default BinaryOptionMarketManager;
