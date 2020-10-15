import ContractSettings from '../../src/contractSettings';
import synths from '../../lib/synths';
import * as snx from 'synthetix';

const { SUPPORTED_NETWORKS, DEFAULT_ENV } = ContractSettings;

describe('lib/synths', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    test(`${network} has same synths and those in SNX package`, () => {
      expect(synths[networkId]).toEqual(
        snx.getSynths({ network: DEFAULT_ENV[networkId], useOvm: true })
      );
    });
  });
});
