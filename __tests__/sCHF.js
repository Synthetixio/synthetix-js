import { SynthetixJs } from '../src/index.node.js';
import config from './config';

test(
  'Should return sCHF total supply',
  async () => {
    const snxjs = new SynthetixJs({ networkId: config.networkId });
    const totalSupply = await snxjs.sCHF.totalSupply();
    return expect(snxjs.utils.formatEther(totalSupply)).not.toBeNaN();
  },
  15000
);
