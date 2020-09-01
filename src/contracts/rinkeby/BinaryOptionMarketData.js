import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/rinkeby/BinaryOptionMarketData';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function BinaryOptionMarketData(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['BinaryOptionMarketData'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param market {String<EthAddress>}
   * @param account {String<EthAddress>}
   * @returns tuple
   **/
  this.getAccountMarketData = async (market, account) => {
    return await this.contract.getAccountMarketData(market, account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param market {String<EthAddress>}
   * @returns tuple
   **/
  this.getMarketData = async market => {
    return await this.contract.getMarketData(market);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param market {String<EthAddress>}
   * @returns tuple
   **/
  this.getMarketParameters = async market => {
    return await this.contract.getMarketParameters(market);
  };
}

export default BinaryOptionMarketData;
