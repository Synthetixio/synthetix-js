import ContractSettings from '../../src/contractSettings';
import abis from '../../lib/abis';
import * as snx from 'synthetix';

const { SUPPORTED_NETWORKS, DEFAULT_ENV } = ContractSettings;
describe('lib/abis', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    test(`${network} all found ABIs exist in SNX package`, () => {
      Object.entries(abis[network]).forEach(([contract, abiEntry]) => {
        expect(abiEntry).toEqual(
          snx.getSource({ network: DEFAULT_ENV[networkId], contract, useOvm: true }).abi
        );
      });
    });
  });
});
