'use strict';

const { HavvenJs } = require('../dist/main.node.js');

const { providers: { getDefaultProvider }, Wallet } = require('ethers');
const wallet = Wallet.createRandom();
const havjs = new HavvenJs({
  signer: new HavvenJs.signers.PrivateKey(getDefaultProvider('kovan'), undefined, wallet.privateKey),
  networkId: 42 // kovan
});

(async function() {
  const totalHAV = await havjs.Havven.totalSupply();
  const havTotalSupply = havjs.utils.formatEther(totalHAV);
  console.log('HAVTotalSupply', havTotalSupply);
})();


