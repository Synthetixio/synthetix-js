import { SynthetixJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';
import { getDefaultProvider } from 'ethers';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('src/contracts/SynthetixEscrow', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let snxjs;
    beforeEach(() => {
      snxjs = new SynthetixJs({ networkId });
    });

    test(
      'Should get 0 balance in escrow for unknown account',
      async () => {
        const signer = new SynthetixJs.signers.PrivateKey(
          getDefaultProvider(network === 'mainnet' ? undefined : network),
          networkId,
          '0x0123456789012345678901234567890123456789012345678901234567890123'
        );
        const balance = await snxjs.SynthetixEscrow.balanceOf(signer.getAddress());
        await expect(balance.toString()).toEqual('0');
      },
      15000
    );
  });
});
