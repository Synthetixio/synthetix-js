const Havven = require('./contracts/Havven');
const Nomin = require('./contracts/Nomin');
const IssuanceController = require('./contracts/IssuanceController');
const Mintr = require('./contracts/Mintr');
const Converter = require('./Converter');
const StablePayments = require('./contracts/StablePayments');
const util = require('./util');
const signers = require('../lib/signers');
const ContractSettings = require('./contractSettings');

class HavvenJs {
  /**
   * Creates instances of Havven contracts based on ContractSettings.
   * Usage example:
   * const HavvenJs = require('HavvenJs');
   * const havjs = new HavvenJs(); //uses default ContractSettings - ethers.js default provider, mainnet
   * const totalSupply = await havjs.Havven.totalSupply();
   * @constructor
   * @param contractSettings {ContractSettings}
   */
  constructor(contractSettings) {
    contractSettings = new ContractSettings(contractSettings);
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
 * Available transaction signers
 * @type {{Trezor, Ledger, Metamask, PrivateKey}|*}
 */
HavvenJs.signers = signers;

/**
 *
 * @type {ContractSettings}
 */
HavvenJs.ContractSettings = ContractSettings;

module.exports = HavvenJs;
