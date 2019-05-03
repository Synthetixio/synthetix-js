'use strict';

const { SynthetixJs } = require('../dist/main.node.js');

(async function() {
  const snxjs = new SynthetixJs(); //uses default ContractSettings - ethers.js default provider, mainnet
  const snxPrice = snxjs.utils.formatEther(await snxjs.utils.getSynthetixPrice());
  console.log('-------------------');
  console.log(`SNX price: ${snxPrice}`);
  console.log('-------------------');
  console.log('SYNTH SUPPLY');
  console.log('-------------------');
  const { synths } = snxjs.contractSettings;

  synths.forEach(async ({ name, sign, desc }) => {
    const totalAmount = await snxjs[name].totalSupply();
    const totalSupply = snxjs.utils.formatEther(totalAmount);
    console.log(`${desc} (${name}) ${sign}${totalSupply}`);
  });
})();
