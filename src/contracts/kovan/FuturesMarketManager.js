import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan/FuturesMarketManager';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function FuturesMarketManager(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['FuturesMarketManager'],
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
   * Transaction (consumes gas, requires signer)
   * @param marketsToAdd {address[]}
   * @param txParams {TxParams}
  
   **/
  this.addMarkets = async (marketsToAdd, txParams) => {
    txParams = txParams || {};
    return await this.contract.addMarkets(marketsToAdd, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns address[]
   **/
  this.allMarkets = async () => {
    return await this.contract.allMarkets();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnSUSD = async (account, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnSUSD(account, amount, txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issueSUSD = async (account, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueSUSD(account, amount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns String<EthAddress>
   **/
  this.marketForAsset = async bytes32_1 => {
    return await this.contract.marketForAsset(bytes32_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param index {BigNumber}
   * @param pageSize {BigNumber}
   * @returns address[]
   **/
  this.markets = async (index, pageSize) => {
    return await this.contract.markets(index, pageSize);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param assets {bytes32[]}
   * @returns address[]
   **/
  this.marketsForAssets = async assets => {
    return await this.contract.marketsForAssets(assets);
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
  this.numMarkets = async () => {
    return await this.contract.numMarkets();
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
   * @param marketsToRemove {address[]}
   * @param txParams {TxParams}
  
   **/
  this.removeMarkets = async (marketsToRemove, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeMarkets(marketsToRemove, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param assetsToRemove {bytes32[]}
   * @param txParams {TxParams}
  
   **/
  this.removeMarketsByAsset = async (assetsToRemove, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeMarketsByAsset(assetsToRemove, txParams);
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
   * @param _resolver {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setResolverAndSyncCache = async (_resolver, txParams) => {
    txParams = txParams || {};
    return await this.contract.setResolverAndSyncCache(_resolver, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.totalDebt = async () => {
    return await this.contract.totalDebt();
  };
}

export default FuturesMarketManager;
