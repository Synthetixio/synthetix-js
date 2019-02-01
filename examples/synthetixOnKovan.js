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
  const totalSNX = await snxjs.Synthetix.totalSupply();
  const snxTotalSupply = snxjs.utils.formatEther(totalSNX);
  console.log('SNXTotalSupply on Kovan', snxTotalSupply);
})();
