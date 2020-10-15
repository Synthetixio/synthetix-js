import { getDefaultProvider } from 'ethers';
import { SynthetixJs } from '../../../src/index.node.js';
import { OptimismProvider } from '@eth-optimism/provider';
import ContractSettings from '../../../src/contractSettings';
import * as snx from 'synthetix';

const { SUPPORTED_NETWORKS, DEFAULT_ENV } = ContractSettings;

const contract = 'Synth';

describe(`src/contracts/${contract}`, () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let snxjs;
    beforeAll(() => {
      const provider = new OptimismProvider('https://goerli.optimism.io', getDefaultProvider());
      snxjs = new SynthetixJs({ networkId, provider });
    });

    ['sUSD'].forEach(synth => {
      describe(synth, () => {
        test(`${network} Should have correct address and ABI`, () => {
          () => {
            expect(snxjs[synth].contract.address).toEqual(
              snx.getTarget({
                network: DEFAULT_ENV[networkId],
                contract: `Proxy${synth}`,
                useOvm: true,
              }).address
            );
          };
        });

        test(`${network} Should have correct ABI`, () => {
          () => {
            expect(snxjs[synth].contract.interface.abi).toEqual(
              snx.getSource({ network: DEFAULT_ENV[networkId], contract, useOvm: true }).abi
            );
          };
        });
      });
    });
  });
});
