import { SynthetixJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';
import * as snx from 'synthetix';

const { SUPPORTED_NETWORKS } = ContractSettings;

const contract = 'EscrowChecker';

describe(`src/contracts/${contract}`, () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let snxjs;
    beforeAll(() => {
      snxjs = new SynthetixJs({ networkId });
    });

    test(`${network} must return escrow contract address`, async () => {
      const escrowAddress = await snxjs[contract].synthetix_escrow();
      const expectedAddress = snx.getTarget({ network, contract: 'SynthetixEscrow' }).address;
      expect(escrowAddress).toEqual(expectedAddress);
    });
  });
});
