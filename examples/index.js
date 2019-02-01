'use strict';

const { SynthetixJs } = require('../dist/main.node.js');
const snxjs = new SynthetixJs(); //uses default ContractSettings - ethers.js default provider, mainnet

(async function() {
  const totalNUSD = await snxjs.Nomin.totalSupply();
  const havTotalSupply = snxjs.utils.formatEther(totalNUSD);
  console.log('nUSDTotalSupply', havTotalSupply);
})();
