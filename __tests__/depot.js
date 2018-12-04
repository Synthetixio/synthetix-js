import { HavvenJs } from '../dist/main.node';
const havjs = new HavvenJs({ networkId: 42 });

test(
  'Should return havvensReceivedForEther for 1 ETH',
  async () => {
    const synthetixReceivedForEther = await havjs.Depot.synthetixReceivedForEther(
      havjs.utils.parseEther('1')
    );
    return expect(havjs.utils.formatEther(synthetixReceivedForEther)).toBeTruthy();
  },
  15000
);
