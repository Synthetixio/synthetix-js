import contracts from './contracts';
import util from './util/index';
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
    Object.keys(contracts).forEach(name => {
      this[name] = new contracts[name](contractSettings);
    });
    this.util = new util(contractSettings);
    this.utils = this.util;
    this.ethers = ethers;
    this.SUPPORTED_NETWORKS = ContractSettings.SUPPORTED_NETWORKS;
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
