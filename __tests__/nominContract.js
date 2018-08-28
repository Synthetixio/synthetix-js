const HavvenJs = require('../src/index');
const havjs = new HavvenJs();

const { utils } = require('ethers')

test('Should return Nomin total supply', async () => {
  const totalSupply = await havjs.Nomin.totalSupply();
  return expect(utils.formatEther(totalSupply)).toBeTruthy();
});
