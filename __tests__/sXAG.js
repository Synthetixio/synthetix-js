import { SynthetixJs } from '../src/index.node.js';
import config from './config';

test(
  'Should return sAUG total supply',
  async () => {
    const snxjs = new SynthetixJs({ networkId: config.networkId });
    const totalSupply = await snxjs.sXAG.totalSupply();
    return expect(snxjs.utils.formatEther(totalSupply)).not.toBeNaN();
  },
  15000
);
