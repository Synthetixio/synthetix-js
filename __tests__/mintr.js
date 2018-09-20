import { HavvenJs } from '../dist/main.node';
const havjs = new HavvenJs();

test(
  'Should return lastFeesCollected',
  async () => {
    const lastFeesCollected = await havjs.Mintr.lastFeesCollected();
    return expect(havjs.utils.formatEther(lastFeesCollected)).toBeTruthy();
  },
  15000
);

test(
  'Should return totalIssuanceLastAverageBalance',
  async () => {
    const totalIssuanceLastAverageBalance = await havjs.Mintr.totalIssuanceLastAverageBalance();
    return expect(havjs.utils.formatEther(totalIssuanceLastAverageBalance)).toBeTruthy();
  },
  15000
);

test(
  'Should return feePeriodStartTime',
  async () => {
    const feePeriodStartTime = await havjs.Mintr.feePeriodStartTime();
    return expect(havjs.utils.formatEther(feePeriodStartTime)).toBeTruthy();
  },
  15000
);
