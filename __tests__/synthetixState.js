import { HavvenJs } from '../dist/main.node';
const havjs = new HavvenJs({ networkId: 42 });

test(
  'Should return target issuance ratio (20)',
  async () => {
    const issuanceRatio = await havjs.SynthetixState.issuanceRatio();
    return expect(havjs.utils.formatEther(issuanceRatio)).toBeTruthy();
  },
  15000
);
