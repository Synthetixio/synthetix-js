import { HavvenJs } from '../dist/main.node';
const havjs = new HavvenJs();

test(
  'Should return nUSD total supply',
  async () => {
    const totalSupply = await havjs.nUSDNomin.totalSupply();
    return expect(havjs.utils.formatEther(totalSupply)).toBeTruthy();
  },
  15000
);
