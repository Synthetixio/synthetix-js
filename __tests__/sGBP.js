import { HavvenJs } from '../dist/main.node';
import config from './config';
const havjs = new HavvenJs({ networkId: config.networkId });

test(
  'Should return sGBP total supply',
  async () => {
    const totalSupply = await havjs.sGBP.totalSupply();
    return expect(havjs.utils.formatEther(totalSupply)).toBeTruthy();
  },
  15000
);
