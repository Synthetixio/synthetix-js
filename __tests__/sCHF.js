import { SynthetixJs } from '../dist/main.node';
import config from './config';
const snxjs = new SynthetixJs({ networkId: config.networkId });

test(
  'Should return sCHF total supply',
  async () => {
    const totalSupply = await snxjs.sCHF.totalSupply();
    return expect(snxjs.utils.formatEther(totalSupply)).toBeTruthy();
  },
  15000
);
