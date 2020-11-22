import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/mainnet/FuturesMarketData';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function FuturesMarketData(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['FuturesMarketData'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns tuple[]
   **/
  this.allMarketSummaries = async () => {
    return await this.contract.allMarketSummaries();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param market {String<EthAddress>}
   * @returns tuple
   **/
  this.marketDetails = async market => {
    return await this.contract.marketDetails(market);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param asset {bytes32}
   * @returns tuple
   **/
  this.marketDetailsForAsset = async asset => {
    return await this.contract.marketDetailsForAsset(asset);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param markets {address[]}
   * @returns tuple[]
   **/
  this.marketSummaries = async markets => {
    return await this.contract.marketSummaries(markets);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param assets {bytes32[]}
   * @returns tuple[]
   **/
  this.marketSummariesForAssets = async assets => {
    return await this.contract.marketSummariesForAssets(assets);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param market {String<EthAddress>}
   * @param account {String<EthAddress>}
   * @returns tuple
   **/
  this.positionDetails = async (market, account) => {
    return await this.contract.positionDetails(market, account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param asset {bytes32}
   * @param account {String<EthAddress>}
   * @returns tuple
   **/
  this.positionDetailsForAsset = async (asset, account) => {
    return await this.contract.positionDetailsForAsset(asset, account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.resolverProxy = async () => {
    return await this.contract.resolverProxy();
  };
}

export default FuturesMarketData;
