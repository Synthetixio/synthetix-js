'use strict';

const { SynthetixJs } = require('../dist/main.node.js');

const {
  providers: { getDefaultProvider },
  Wallet,
} = require('ethers');
const wallet = Wallet.createRandom();
const snxjs = new SynthetixJs({
  signer: new SynthetixJs.signers.PrivateKey(
    getDefaultProvider('kovan'),
    undefined,
    wallet.privateKey
  ),
  networkId: 42, // kovan
});

(async function() {
  const totalHAV = await snxjs.Synthetix.totalSupply();
  const havTotalSupply = snxjs.utils.formatEther(totalHAV);
  console.log('HAVTotalSupply', havTotalSupply);
})();
