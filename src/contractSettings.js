import { providers } from 'ethers';
import addresses from '../lib/addresses';
import ABIS from '../lib/abis/index';

class ContractSettings {
  /**
   * @constructor
   * @param provider {Object} - ethers.js provider object - default ethers.providers.getDefaultProvider()
   * @param signer {Object} - one of 4 provided signers or a custom ethers.js compatible signer. Use Metamask for Dapp browser support
   * @param networkId {Number} - default 1 - mainnet, also supports 42 (Kovan)
   */
  constructor(contractSettings) {
    contractSettings = contractSettings || {};
    let { provider, signer, networkId } = contractSettings;
    this.provider = provider || providers.getDefaultProvider();
    this.signer = signer;
    this.networkId = networkId || 1;
    this.addressList = addresses[this.networkId];
    this.ABIS = ABIS;
  }
}

export default ContractSettings;
