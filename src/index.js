import contracts from './contracts';
import util from './util/index';
import Trezor from '../lib/signers/trezorSigner';
import Metamask from '../lib/signers/metamaskSigner';
import Ledger from '../lib/signers/ledgerSigner';
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
    this[network] = {};
    Object.keys(contractForEnv).forEach(name => {
      const Contract = contractForEnv[name];
      this[network][name] = new Contract(contractSettings);
      if (network === 'mainnet') {
        // create a handy link for mainnet
        this[name] = this[network][name];
      }
    });
    this.util = new util(contractSettings);
    this.utils = this.util;
    this.ethers = ethers;
    this.SUPPORTED_NETWORKS = ContractSettings.SUPPORTED_NETWORKS;
  }
}

/**
 * Available transaction signers
 * @type {{Trezor, Ledger, Metamask, PrivateKey}|*}
 */
SynthetixJs.signers = {
  Trezor,
  Ledger,
  Metamask,
  PrivateKey,
};

/**
 *
 * @type {ContractSettings}
 */
SynthetixJs.ContractSettings = ContractSettings;
