import { HavvenJs } from '../dist/main.node';
import config from './config';
const havjs = new HavvenJs({ networkId: config.networkId });

test(
  'Should return XDR total supply',
  async () => {
    const totalSupply = await havjs.XDR.totalSupply();
    return expect(havjs.utils.formatEther(totalSupply)).toBeTruthy();
  },
  15000
);
