import Havven from './contracts/Havven';
import Nomin from './contracts/Nomin';
import Mintr from './contracts/Mintr';
import Vestr from './contracts/Vestr';
import EscrowChecker from './contracts/EscrowChecker';
import Escrow from './contracts/Escrow';
import Converter from './converter';
import util from './util/index';
import PrivateKey from '../lib/signers/privateKeySigner';
import ContractSettings from './contractSettings';
import Depot from './contracts/Depot';
import FeePool from './contracts/FeePool';
import ExchangeRates from './contracts/ExchangeRates';

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
      { name: 'Depot', Contract: Depot },
      { name: 'Mintr', Contract: Mintr },
      { name: 'Vestr', Contract: Vestr },
      { name: 'EscrowChecker', Contract: EscrowChecker },
      { name: 'FeePool', Contract: FeePool },
      { name: 'ExchangeRates', Contract: ExchangeRates },
      { name: 'Escrow', Contract: Escrow },
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
  }
}

/**
 * Available transaction signers for node.js
 * @type {{ PrivateKey}|*}
 */
HavvenJs.signers = {
  PrivateKey,
};

/**
 *
 * @type {ContractSettings}
 */
HavvenJs.ContractSettings = ContractSettings;
