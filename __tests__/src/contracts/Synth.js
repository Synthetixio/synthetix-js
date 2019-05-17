import { SynthetixJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';
import * as snx from 'synthetix';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('src/contracts/Synth', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let snxjs;
    beforeEach(() => {
      snxjs = new SynthetixJs({ networkId });
    });

    ['sUSD', 'sBTC', 'XDR', 'iBTC', 'sAUD'].forEach(synth => {
      describe(synth, () => {
        test(
          `${network} Should return ${synth} total supply`,
          async () => {
            const totalSupply = await snxjs[synth].totalSupply();
            expect(snxjs.utils.formatEther(totalSupply)).not.toBeNaN();
          },
          15000
        );

        // skip ropsten for now as it isn't configured properly
        const testRunner = network === 'ropsten' ? test.skip : test;
        testRunner(
          `${network} Should have correct Synthetix address`,
          async () => {
            const synthetix = await snxjs[synth].synthetix();
            const expectedAddress = snx.getTarget({ network, contract: 'Synthetix' }).address;
            expect(synthetix).toEqual(expectedAddress);
          },
          15000
        );
      });
    });
  });
});
