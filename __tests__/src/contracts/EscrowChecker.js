import { SynthetixJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';
import * as snx from 'synthetix';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('src/contracts/EscrowChecker', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let snxjs;
    beforeEach(() => {
      snxjs = new SynthetixJs({ networkId });
    });
    test(`${network} must return escrow contract address`, async () => {
      const escrowAddress = await snxjs.EscrowChecker.synthetix_escrow();
      const expectedAddress = snx.getTarget({ network, contract: 'SynthetixEscrow' }).address;
      expect(escrowAddress).toEqual(expectedAddress);
    });
  });
});
