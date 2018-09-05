const { providers } = require('ethers');
const addresses = require('../lib/addresses');
const ABIS = require('../lib/abis');

class ContractSettings {
  /**
   * @constructor
   * @param provider {Object} - ethers.js provider object - default ethers.providers.getDefaultProvider()
   * @param signer {Object} - one of "Metamask"|"Trezor"|"Ledger" or a custom ethers.js compatible signer. Use Metamask for Dapp browser support
   * @param fromAddressIndex {Number} - index of a generated from address for a hardware wallet (Metamask/Dapp browser will always use 0 as address can be selected in UI)
   * @param networkId {Number} - default 1 - mainnet, also supports 42 (Kovan)
   */
  constructor(contractSettings) {
    contractSettings = contractSettings || {};
    let { provider, signer, fromAddressIndex, networkId } = contractSettings;
    this.provider = provider || providers.getDefaultProvider();
    if (typeof signer === 'string') {
      const signers = require('../lib/signers');
      signer = new signers[signer](this.provider, networkId, fromAddressIndex);
    }
    this.signer = signer;
    this.networkId = networkId || 1;
    this.addressList = addresses[this.networkId];
    this.ABIS = ABIS;
  }
}

module.exports = ContractSettings;
