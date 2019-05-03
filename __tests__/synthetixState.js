import { SynthetixJs } from '../src/index.node.js';
import config from './config';

test(
  'Should return target issuance ratio (20)',
  async () => {
    const snxjs = new SynthetixJs({ networkId: config.networkId });
    const issuanceRatio = await snxjs.SynthetixState.issuanceRatio();
    return expect(snxjs.utils.formatEther(issuanceRatio)).not.toBeNaN();
  },
  15000
);
