import { HavvenJs } from '../dist/main.node';
import config from './config';
const havjs = new HavvenJs({ networkId: config.networkId });

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
