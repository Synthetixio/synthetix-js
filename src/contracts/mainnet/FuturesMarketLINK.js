import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/mainnet/FuturesMarket';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function FuturesMarketLINK(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['FuturesMarketLINK'],
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
   * @param account {String<EthAddress>}
   * @returns Object
   **/
  this.accruedFunding = async account => {
    return await this.contract.accruedFunding(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.baseAsset = async () => {
    return await this.contract.baseAsset();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.cancelOrder = async txParams => {
    txParams = txParams || {};
    return await this.contract.cancelOrder(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.closePosition = async txParams => {
    txParams = txParams || {};
    return await this.contract.closePosition(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.confirmOrder = async (account, txParams) => {
    txParams = txParams || {};
    return await this.contract.confirmOrder(account, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns int256
   **/
  this.currentFundingRate = async () => {
    return await this.contract.currentFundingRate();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.currentRoundId = async () => {
    return await this.contract.currentRoundId();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns int256
   **/
  this.entryMarginSumMinusNotionalSkew = async () => {
    return await this.contract.entryMarginSumMinusNotionalSkew();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns int256
   **/
  this.entryNotionalSkew = async () => {
    return await this.contract.entryNotionalSkew();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.exchangeFee = async () => {
    return await this.contract.exchangeFee();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.fundingLastRecomputed = async () => {
    return await this.contract.fundingLastRecomputed();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.fundingParameters = async () => {
    return await this.contract.fundingParameters();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns int256
   **/
  this.fundingSequence = async uint256_1 => {
    return await this.contract.fundingSequence(uint256_1);
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
   * @param _resolver {String<EthAddress>}
   * @returns boolean
   **/
  this.isResolverCached = async _resolver => {
    return await this.contract.isResolverCached(_resolver);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param includeFunding {boolean}
   * @returns BigNumber
   **/
  this.liquidationPrice = async (account, includeFunding) => {
    return await this.contract.liquidationPrice(account, includeFunding);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.marketDebt = async () => {
    return await this.contract.marketDebt();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.marketSize = async () => {
    return await this.contract.marketSize();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.marketSizes = async () => {
    return await this.contract.marketSizes();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns int256
   **/
  this.marketSkew = async () => {
    return await this.contract.marketSkew();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.maxLeverage = async () => {
    return await this.contract.maxLeverage();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.maxMarketDebt = async () => {
    return await this.contract.maxMarketDebt();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.minInitialMargin = async () => {
    return await this.contract.minInitialMargin();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param startIndex {BigNumber}
   * @param endIndex {BigNumber}
   * @returns Object
   **/
  this.netFundingPerUnit = async (startIndex, endIndex) => {
    return await this.contract.netFundingPerUnit(startIndex, endIndex);
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
   * @param account {String<EthAddress>}
   * @returns Object
   **/
  this.notionalValue = async account => {
    return await this.contract.notionalValue(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param margin {int256}
   * @param leverage {BigNumber}
   * @returns BigNumber
   **/
  this.orderFee = async (account, margin, leverage) => {
    return await this.contract.orderFee(account, margin, leverage);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns Object
   **/
  this.orders = async address_1 => {
    return await this.contract.orders(address_1);
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
  this.pendingOrderValue = async () => {
    return await this.contract.pendingOrderValue();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns Object
   **/
  this.positions = async address_1 => {
    return await this.contract.positions(address_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.priceAndInvalid = async () => {
    return await this.contract.priceAndInvalid();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns Object
   **/
  this.profitLoss = async account => {
    return await this.contract.profitLoss(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns int256
   **/
  this.proportionalSkew = async () => {
    return await this.contract.proportionalSkew();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns Object
   **/
  this.remainingMargin = async account => {
    return await this.contract.remainingMargin(account);
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
   * @param fee {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setExchangeFee = async (fee, txParams) => {
    txParams = txParams || {};
    return await this.contract.setExchangeFee(fee, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param maxFundingRate {BigNumber}
   * @param maxFundingRateSkew {BigNumber}
   * @param maxFundingRateDelta {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setFundingParameters = async (
    maxFundingRate,
    maxFundingRateSkew,
    maxFundingRateDelta,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.setFundingParameters(
      maxFundingRate,
      maxFundingRateSkew,
      maxFundingRateDelta,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param leverage {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMaxLeverage = async (leverage, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaxLeverage(leverage, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param cap {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMaxMarketDebt = async (cap, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaxMarketDebt(cap, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param minMargin {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMinInitialMargin = async (minMargin, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMinInitialMargin(minMargin, txParams);
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
   * @param margin {int256}
   * @param leverage {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.submitOrder = async (margin, leverage, txParams) => {
    txParams = txParams || {};
    return await this.contract.submitOrder(margin, leverage, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.unrecordedFunding = async () => {
    return await this.contract.unrecordedFunding();
  };
}

export default FuturesMarketLINK;
