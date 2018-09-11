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
    this.contractSettings.addressList['Vestr'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * The number of vesting dates in an account's schedule.
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.numVestingEntries = async account => {
    return await this.contract.numVestingEntries(account);
  };

  /**
   * Allow a user to withdraw any tokens that have vested.
   * Transaction (gas consumed, require signer)
   **/
  this.vest = async () => {
    return await this.contract.vest();
  };
}

export default Vestr;
