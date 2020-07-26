import ContractSettings from '../../src/contractSettings';
import addresses from '../../lib/addresses';
import * as snx from 'synthetix';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('lib/addresses', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    test(`${network} has same addresses and those in SNX package`, () => {
      Object.entries(addresses[networkId]).forEach(([contract, address]) => {
        expect(address).toEqual(snx.getTarget({ network, contract }).address);
      });
    });
  });
});
