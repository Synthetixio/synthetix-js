import { SynthetixJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';
import * as snx from 'synthetix';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('src/contracts/Depot', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let snxjs;
    beforeEach(() => {
      snxjs = new SynthetixJs({ networkId });
    });
    test(
      `${network} Should return synthetixsReceivedForEther for 1 ETH`,
      async () => {
        const synthetixReceivedForEther = await snxjs.Depot.synthetixReceivedForEther(
          snxjs.utils.parseEther('1')
        );
        expect(snxjs.utils.formatEther(synthetixReceivedForEther)).not.toBeNaN();
      },
      15000
    );

    // skip ropsten for now as it isn't configured properly
    const testRunner = network === 'ropsten' ? test.skip : test;
    testRunner(
      `${network} Should have correct Synthetix address`,
      async () => {
        const synthetix = await snxjs.Depot.synthetix();
        const expectedAddress = snx.getTarget({ network, contract: 'Synthetix' }).address;

        expect(synthetix).toEqual(expectedAddress);
      },
      15000
    );
  });
});
