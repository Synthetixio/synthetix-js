import { HavvenJs } from '../dist/main.node';
const havjs = new HavvenJs();

test(
  'Should return havvensReceivedForEther for 1 ETH',
  async () => {
    const havvensReceivedForEther = await havjs.Depot.havvensReceivedForEther(
      havjs.utils.parseEther('1')
    );
    return expect(havjs.utils.formatEther(havvensReceivedForEther)).toBeTruthy();
  },
  15000
);
