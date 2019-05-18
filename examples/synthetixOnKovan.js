'use strict';

const { SynthetixJs } = require('../dist/main.node.js');

const { getDefaultProvider, Wallet } = require('ethers');
const wallet = Wallet.createRandom();
const snxjs = new SynthetixJs({
  signer: new SynthetixJs.signers.PrivateKey(getDefaultProvider('kovan'), 42, wallet.privateKey),
  networkId: 42, // kovan
});

(async function() {
  const totalSNX = await snxjs.Synthetix.totalSupply();
  const snxTotalSupply = snxjs.utils.formatEther(totalSNX);
  console.log('SNXTotalSupply on ', snxjs.contractSettings.network.toUpperCase(), snxTotalSupply);
  const synths = snxjs.contractSettings.synths.map(({ name }) => name).join(',');
  console.log('Supported synths: ', synths);
})();
