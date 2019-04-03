import { Contract } from 'ethers';
import ContractSettings from '../contractSettings';
import abi from '../../lib/abis/EscrowChecker';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function EscrowChecker(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    '0x3c9dF924b16b321847096a47d2d57D4A3259D060',
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns uint256[16]
   **/
  this.checkAccountSchedule = async account => {
    return await this.contract.checkAccountSchedule(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.synthetix_escrow = async () => {
    return await this.contract.synthetix_escrow();
  };
}

export default EscrowChecker;
