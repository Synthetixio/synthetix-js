import { SynthetixJs } from '../dist/main.node';
import config from './config';
const snxjs = new SynthetixJs({ networkId: config.networkId });

test(
  'Should return target issuance ratio (20)',
  async () => {
    const issuanceRatio = await snxjs.SynthetixState.issuanceRatio();
    return expect(snxjs.utils.formatEther(issuanceRatio)).toBeTruthy();
  },
  15000
);
