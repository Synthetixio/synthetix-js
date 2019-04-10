'use strict';

const { SynthetixJs } = require('../dist/main.node.js');
const snxjs = new SynthetixJs(); //uses default ContractSettings - ethers.js default provider, mainnet

(async function() {
  const snxPrice = snxjs.utils.formatEther(await snxjs.utils.getSynthetixPrice());
  console.log(`SNX price: ${snxPrice}`);
  ['USD', 'AUD', 'EUR', 'XAU', 'BTC'].forEach(async ticker => {
    const totalAmount = await snxjs[`s${ticker}`].totalSupply();
    const totalSupply = snxjs.utils.formatEther(totalAmount);
    console.log(`s${ticker}TotalSupply`, totalSupply);
  });
})();
