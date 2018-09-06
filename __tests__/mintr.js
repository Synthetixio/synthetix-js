import { HavvenJs } from '../dist/main.node';
const havjs = new HavvenJs();

test('Should return lastFeesCollected', async () => {
  const lastFeesCollected = await havjs.Mintr.lastFeesCollected();
  return expect(havjs.utils.formatEther(lastFeesCollected)).toBeTruthy();
});
