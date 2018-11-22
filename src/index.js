import Havven from './contracts/Havven';
import Nomin from './contracts/Nomin';
import IssuanceController from './contracts/IssuanceController';
import Mintr from './contracts/Mintr';
import Vestr from './contracts/Vestr';
import EscrowChecker from './contracts/EscrowChecker';
import StablePayments from './contracts/StablePayments';
import Escrow from './contracts/Escrow';
import Depot from './contracts/Depot';
import Converter from './converter';
import util from './util/index';
import Trezor from '../lib/signers/trezorSigner';
import Metamask from '../lib/signers/metamaskSigner';
import Ledger from '../lib/signers/ledgerSigner';
import PrivateKey from '../lib/signers/privateKeySigner';
import ContractSettings from './contractSettings';
import ethers from 'ethers';

export class HavvenJs {
  /**
   * Creates instances of Havven contracts based on ContractSettings.
   * Usage example:
   * const {HavvenJs} = require('HavvenJs');
   * const havjs = new HavvenJs(); //uses default ContractSettings - ethers.js default provider, mainnet
   * const totalSupply = await havjs.Havven.totalSupply();
   * @constructor
   * @param contractSettings {ContractSettings}
   */
  constructor(contractSettings) {
    contractSettings = new ContractSettings(contractSettings);
    this.contractSettings = contractSettings;
    this.Converter = new Converter(contractSettings);
    [
      // Explicitly pass name of the contract as opposed to function.name as babel
      // will rename these as part of ES6 module tranpilation
      { name: 'Havven', Contract: Havven },
      { name: 'Nomin', Contract: Nomin },
      { name: 'IssuanceController', Contract: IssuanceController },
      { name: 'Mintr', Contract: Mintr },
      { name: 'Vestr', Contract: Vestr },
      { name: 'EscrowChecker', Contract: EscrowChecker },
      { name: 'StablePayments', Contract: StablePayments },
      { name: 'Escrow', Contract: Escrow },
      { name: 'Depot', Contract: Depot },
    ]
      .filter(
        ({ name }) =>
          // ensure we only instantiate contracts relevant for the provider, by filtering out
          // those without valid addresses
          contractSettings.addressList[name]
      )
      .forEach(({ name, Contract }) => {
        this[name] = new Contract(contractSettings);
      });
    this.util = new util(contractSettings);
    this.utils = this.util;
    this.ethers = ethers;
  }
}

/**
 * Available transaction signers
 * @type {{Trezor, Ledger, Metamask, PrivateKey}|*}
 */
HavvenJs.signers = {
  Trezor,
  Ledger,
  Metamask,
  PrivateKey,
};

/**
 *
 * @type {ContractSettings}
 */
HavvenJs.ContractSettings = ContractSettings;
