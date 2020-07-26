import * as ethers from 'ethers';
import contracts from './contracts';
import util from './util/index';
import * as BinaryOptionsUtils from './util/binaryOptions';
import ContractSettings from './contractSettings';
import PrivateKey from '../lib/signers/privateKeySigner';

class SynthetixJsBase {
  constructor(contractSettings, signers = { PrivateKey }) {
    // prevent warnings about "Multiple definitions" for transfer* function from Synth contract
    ethers.errors.setLogLevel('error');
    contractSettings = new ContractSettings(contractSettings);
    this.signers = signers;
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
    this.binaryOptionsUtils = BinaryOptionsUtils;
    this.ethers = ethers;
    this.SUPPORTED_NETWORKS = ContractSettings.SUPPORTED_NETWORKS;
  }
}

export default SynthetixJsBase;
