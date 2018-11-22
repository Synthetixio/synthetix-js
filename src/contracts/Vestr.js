import { Contract } from 'ethers';
import abis from '../../lib/abis/index';
import ContractSettings from '../contractSettings';
const abi = abis.Vestr;

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Vestr(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['HavvenEscrow'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.numVestingEntries = async account => {
    return await this.contract.numVestingEntries(account);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.vest = async txParams => {
    txParams = txParams || {};
    return await this.contract.vest(txParams);
  };
}

export default Vestr;
