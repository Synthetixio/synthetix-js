import { SynthetixJs } from '../src/index';
import config from './config';
const snxjs = new SynthetixJs({ networkId: config.networkId });

test(
  'Should return sAUG total supply',
  async () => {
    // const totalSupply = await snxjs.sXAG.totalSupply();
    // return expect(snxjs.utils.formatEther(totalSupply)).toBeTruthy();
  },
  15000
);
