import { HavvenJs } from '../dist/main.node';
const havjs = new HavvenJs({ networkId: 42 });

test(
  'Should return sUSD total supply',
  async () => {
    const totalSupply = await havjs.sUSD.totalSupply();
    return expect(havjs.utils.formatEther(totalSupply)).toBeTruthy();
  },
  15000
);
