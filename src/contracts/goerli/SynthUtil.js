import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/goerli/SynthUtil';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function SynthUtil(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['SynthUtil'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.addressResolverProxy = async () => {
    return await this.contract.addressResolverProxy();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[]
   **/
  this.frozenSynths = async () => {
    return await this.contract.frozenSynths();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns Object
   **/
  this.synthsBalances = async account => {
    return await this.contract.synthsBalances(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.synthsRates = async () => {
    return await this.contract.synthsRates();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.synthsTotalSupplies = async () => {
    return await this.contract.synthsTotalSupplies();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.totalSynthsInKey = async (account, currencyKey) => {
    return await this.contract.totalSynthsInKey(account, currencyKey);
  };
}

export default SynthUtil;
