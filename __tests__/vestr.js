import { HavvenJs } from '../dist/main.node';
const havjs = new HavvenJs();

test(
  'Should return lastFeesCollected',
  async () => {
    const numVestingEntries = await havjs.Vestr.numVestingEntries(
      '0x88480cabF6C770bD1dec47acb9e28f56317dB539'
    );
    return expect(havjs.utils.formatEther(numVestingEntries)).toBeTruthy();
  },
  15000
);
