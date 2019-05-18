import ContractSettings from '../../src/contractSettings';
import abis from '../../lib/abis';
import * as snx from 'synthetix';

const { SUPPORTED_NETWORKS } = ContractSettings;
describe('lib/abis', () => {
  Object.values(SUPPORTED_NETWORKS).forEach(network => {
    test(`${network} all found ABIs exist in SNX package`, () => {
      Object.entries(abis[network]).forEach(([contract, abiEntry]) => {
        expect(abiEntry).toEqual(snx.getSource({ network, contract }).abi);
      });
    });
  });
});
