const Havven = require('./contracts/Havven');
const Nomin = require('./contracts/Nomin');
const IssuanceController = require('./contracts/IssuanceController');

class HavvenJs {
  /**
   * Creates instances of Havven, Nomin, and IssuanceController based on ContractSettings.
   * Usage example:
   * const HavvenJs = require('HavvenJs');
   * const havjs = new HavvenJs(); //uses default ContractSettings - ethers.js default provider, mainnet
   * @constructor
   * @param contractSettings {ContractSettings}
   */
  constructor(contractSettings) {
    this.Havven = new Havven(contractSettings);
    this.Nomin = new Nomin(contractSettings);
    this.IssuanceController = new IssuanceController(contractSettings);
  }
}

module.exports = HavvenJs;
