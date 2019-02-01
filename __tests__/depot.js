import { SynthetixJs } from '../dist/main.node';
import config from './config';
const snxjs = new SynthetixJs({ networkId: config.networkId });

test(
  'Should return synthetixsReceivedForEther for 1 ETH',
  async () => {
    const synthetixReceivedForEther = await snxjs.Depot.synthetixReceivedForEther(
      snxjs.utils.parseEther('1')
    );
    return expect(snxjs.utils.formatEther(synthetixReceivedForEther)).toBeTruthy();
  },
  15000
);
