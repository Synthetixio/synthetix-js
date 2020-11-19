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
   * @param market {String<EthAddress>}
   * @returns tuple
   **/
  this.marketDetails = async market => {
    return await this.contract.marketDetails(market);
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
}

export default FuturesMarketData;
