import { SynthetixJs } from '../dist/main.node';
import config from './config';
const snxjs = new SynthetixJs({ networkId: config.networkId });

test(
  'Should return sUSD total supply',
  async () => {
    const totalSupply = await snxjs.sUSD.totalSupply();
    return expect(snxjs.utils.formatEther(totalSupply)).toBeTruthy();
  },
  15000
);
