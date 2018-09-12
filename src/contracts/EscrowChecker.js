import { Contract } from 'ethers';
import abis from '../../lib/abis/index';
import ContractSettings from '../contractSettings';
const abi = abis.EscrowChecker;

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function EscrowChecker(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['EscrowChecker'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * All the vesting dates in an account's schedule.
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.checkAccountSchedule = async account => {
    return await this.contract.checkAccountSchedule(account);
  };

  /**
   * The Havven escrow contract address
   * Transaction (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/

  this.havvenEscrow = async () => {
    return await this.contract.havven_escrow();
  };
}

export default EscrowChecker;
