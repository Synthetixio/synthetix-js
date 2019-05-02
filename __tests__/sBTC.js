import { SynthetixJs } from '../src/index.node.js';
import config from './config';

test(
  'Should return sBTC total supply',
  async () => {
    const snxjs = new SynthetixJs({ networkId: config.networkId });
    const totalSupply = await snxjs.sBTC.totalSupply();
    return expect(snxjs.utils.formatEther(totalSupply)).not.toBeNaN();
  },
  15000
);
