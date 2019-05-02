import { SynthetixJs } from '../src/index.node.js';
import config from './config';

test(
  'Should return synthetixsReceivedForEther for 1 ETH',
  async () => {
    const snxjs = new SynthetixJs({ networkId: config.networkId });
    const synthetixReceivedForEther = await snxjs.Depot.synthetixReceivedForEther(
      snxjs.utils.parseEther('1')
    );
    return expect(snxjs.utils.formatEther(synthetixReceivedForEther)).not.toBeNaN();
  },
  15000
);
