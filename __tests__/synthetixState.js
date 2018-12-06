import { HavvenJs } from '../dist/main.node';
import config from './config';
const havjs = new HavvenJs({ networkId: config.networkId });

test(
  'Should return target issuance ratio (20)',
  async () => {
    const issuanceRatio = await havjs.SynthetixState.issuanceRatio();
    return expect(havjs.utils.formatEther(issuanceRatio)).toBeTruthy();
  },
  15000
);
