const Havven = require('../src/contracts/Havven');
const { utils } = require('ethers')

test('Should return Havven total supply', async () => {
  const HC = new Havven();
  const totalSupply = await HC.totalSupply();
  return expect(utils.formatEther(totalSupply)).toBeTruthy();
});

test('Should throw Missing signer error', async () => {
  const HC = new Havven();
  await expect(HC.issueNomins(10)).rejects.toThrow();

});
