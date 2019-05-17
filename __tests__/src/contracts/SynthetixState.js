import { SynthetixJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('src/contracts/SynthetixEscrow', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let snxjs;
    beforeEach(() => {
      snxjs = new SynthetixJs({ networkId });
    });

    test(
      `${network} Should return target issuance ratio (20)`,
      async () => {
        const issuanceRatio = await snxjs.SynthetixState.issuanceRatio();
        return expect(snxjs.utils.formatEther(issuanceRatio)).toEqual('0.2');
      },
      15000
    );
  });
});
