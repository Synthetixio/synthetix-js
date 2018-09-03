const HavvenJs = require('../src/index');
const havjs = new HavvenJs();

test('Should return balanceOf nomin fee address', async () => {
  const balanceOf = await havjs.StablePayments.balanceOf('0xfeefeefeefeefeefeefeefeefeefeefeefeefeef');
  return expect(havjs.utils.formatEther(balanceOf)).toBeTruthy();
});
