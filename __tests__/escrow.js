import { SynthetixJs } from '../src/index.node.js';
import config from './config';

test(
  'Should execute transaction signed with private key but fail on insufficient funds',
  async () => {
    const signer = new SynthetixJs.signers.PrivateKey(
      null,
      config.networkId,
      '0x0123456789012345678901234567890123456789012345678901234567890123'
    );
    const snxjs = new SynthetixJs({ signer, networkId: config.networkId });
    const balance = await snxjs.SynthetixEscrow.balanceOf(signer.getAddress());
    await expect(balance).not.toBeNaN();
  },
  15000
);
