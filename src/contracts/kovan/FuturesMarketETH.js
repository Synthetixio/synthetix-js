import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan/FuturesMarket';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function FuturesMarketETH(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['ProxyFuturesMarketETH'],
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
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns boolean
   **/
  this.canConfirmOrder = async account => {
    return await this.contract.canConfirmOrder(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns boolean
   **/
  this.canLiquidate = async account => {
    return await this.contract.canLiquidate(account);
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
  this.fundingLastRecomputed = async () => {
    return await this.contract.fundingLastRecomputed();
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
   * @returns String<EthAddress>
   **/
  this.integrationProxy = async () => {
    return await this.contract.integrationProxy();
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
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.liquidatePosition = async (account, txParams) => {
    txParams = txParams || {};
    return await this.contract.liquidatePosition(account, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param includeFunding {boolean}
   * @returns Object
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
   * @returns String<EthAddress>
   **/
  this.messageSender = async () => {
    return await this.contract.messageSender();
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
   * @returns Object
   **/
  this.parameters = async () => {
    return await this.contract.parameters();
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
   * @returns String<EthAddress>
   **/
  this.proxy = async () => {
    return await this.contract.proxy();
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
   * @param exchangeFee {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setExchangeFee = async (exchangeFee, txParams) => {
    txParams = txParams || {};
    return await this.contract.setExchangeFee(exchangeFee, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _integrationProxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setIntegrationProxy = async (_integrationProxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setIntegrationProxy(_integrationProxy, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param maxFundingRate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMaxFundingRate = async (maxFundingRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaxFundingRate(maxFundingRate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param maxFundingRateDelta {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMaxFundingRateDelta = async (maxFundingRateDelta, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaxFundingRateDelta(maxFundingRateDelta, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param maxFundingRateSkew {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMaxFundingRateSkew = async (maxFundingRateSkew, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaxFundingRateSkew(maxFundingRateSkew, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param maxLeverage {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMaxLeverage = async (maxLeverage, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaxLeverage(maxLeverage, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param maxMarketDebt {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMaxMarketDebt = async (maxMarketDebt, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaxMarketDebt(maxMarketDebt, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param sender {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setMessageSender = async (sender, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMessageSender(sender, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param minInitialMargin {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMinInitialMargin = async (minInitialMargin, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMinInitialMargin(minInitialMargin, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _proxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setProxy = async (_proxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setProxy(_proxy, txParams);
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

export default FuturesMarketETH;
