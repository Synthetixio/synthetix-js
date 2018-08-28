const HavvenJs = require('../src/index');
const havjs = new HavvenJs();

const { utils } = require('ethers')

test('Should return Havven total supply', async () => {
  const totalSupply = await havjs.Havven.totalSupply();
  return expect(utils.formatEther(totalSupply)).toBeTruthy();
});

test('Should throw Missing signer error', async () => {
  await expect(havjs.Havven.issueNomins(10)).rejects.toThrow();
});
