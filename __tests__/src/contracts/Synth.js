import { SynthetixJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';
import * as snx from 'synthetix';

const { SUPPORTED_NETWORKS } = ContractSettings;

const contract = 'Synth';

describe(`src/contracts/${contract}`, () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let snxjs;
    beforeAll(() => {
      snxjs = new SynthetixJs({ networkId });
    });

    ['sUSD', 'sBTC', 'iBTC', 'sAUD'].forEach(synth => {
      describe(synth, () => {
        test(`${network} Should have correct address and ABI`, () => {
          () => {
            expect(snxjs[synth].contract.address).toEqual(
              snx.getTarget({ network, contract: `Proxy${synth}` }).address
            );
          };
        });

        test(`${network} Should have correct ABI`, () => {
          () => {
            expect(snxjs[synth].contract.interface.abi).toEqual(
              snx.getSource({ network, contract }).abi
            );
          };
        });

        test(
          `${network} Should return ${synth} total supply`,
          async () => {
            const totalSupply = await snxjs[synth].totalSupply();
            expect(snxjs.utils.formatEther(totalSupply)).not.toBeNaN();
          },
          15000
        );

        test(
          `${network} Should have correct Synthetix address via resolver`,
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
