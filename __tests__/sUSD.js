import { SynthetixJs } from '../src/index.node.js';
import config from './config';

test(
  'Should return sUSD total supply',
  async () => {
    const snxjs = new SynthetixJs({ networkId: config.networkId });
    const totalSupply = await snxjs.sUSD.totalSupply();
    return expect(snxjs.utils.formatEther(totalSupply)).not.toBeNaN();
  },
  15000
);
