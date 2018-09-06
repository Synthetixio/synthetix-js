import Havven from './contracts/Havven';
import Nomin from './contracts/Nomin';
import IssuanceController from './contracts/IssuanceController';
import Mintr from './contracts/Mintr';
import Converter from './converter';
import StablePayments from './contracts/StablePayments';
import util from './util/index';
import PrivateKey from '../lib/signers/privateKeySigner';
import ContractSettings from './contractSettings';

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
    this.Havven = new Havven(contractSettings);
    this.Nomin = new Nomin(contractSettings);
    this.IssuanceController = new IssuanceController(contractSettings);
    this.Mintr = new Mintr(contractSettings);
    this.Converter = new Converter(contractSettings);
    this.StablePayments = new StablePayments(contractSettings);
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
