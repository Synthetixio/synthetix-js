import { utils } from 'ethers';

import SynthetixJsBase from './SynthetixJsBase';
import Trezor from '../lib/signers/trezorSigner';
import Metamask from '../lib/signers/metamaskSigner';
import Ledger from '../lib/signers/ledgerSigner';
import Coinbase from '../lib/signers/coinbaseSigner';
import PrivateKey from '../lib/signers/privateKeySigner';
import WalletConnect from '../lib/signers/walletConnectSigner';
import Portis from '../lib/signers/portisSigner';

const signers = {
  Trezor,
  Ledger,
  Metamask,
  PrivateKey,
  Coinbase,
  WalletConnect,
  Portis,
};

export class SynthetixJs extends SynthetixJsBase {
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
    super(contractSettings, signers);
  }
}

SynthetixJs.signers = signers;
SynthetixJs.utils = utils; // shortcut to ethers utils without having to create instance
