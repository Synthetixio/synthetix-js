import contracts from './contracts';
import util from './util/index';
import PrivateKey from '../lib/signers/privateKeySigner';
import ContractSettings from './contractSettings';
import ethers from 'ethers';

export class SynthetixJs {
  /**
   * Creates instances of Synthetix contracts based on ContractSettings.
   * Usage example:
   * const {SynthetixJs} = require('SynthetixJs');
   * const snxjs = new SynthetixJs(); //uses default ContractSettings - ethers.js default provider, mainnet
   * const totalSupply = await snxjs.Synthetix.totalSupply();
   * @constructor
   * @param contractSettings {ContractSettings}
   */
  constructor(contractSettings) {
    contractSettings = new ContractSettings(contractSettings);
    this.contractSettings = contractSettings;
    const { network } = contractSettings;
    this.network = network;
    const contractForEnv = contracts[network];
    Object.keys(contractForEnv).forEach(name => {
      const Contract = contractForEnv[name];
      this[name] = new Contract(contractSettings);
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
SynthetixJs.signers = {
  PrivateKey,
};

/**
 *
 * @type {ContractSettings}
 */
SynthetixJs.ContractSettings = ContractSettings;
