'use strict';

const { HavvenJs } = require('../dist/main.node.js');
const havjs = new HavvenJs(); //uses default ContractSettings - ethers.js default provider, mainnet

(async function() {
  const totalNUSD = await havjs.Nomin.totalSupply();
  const havTotalSupply = havjs.utils.formatEther(totalNUSD);
  console.log('nUSDTotalSupply', havTotalSupply);
})();
