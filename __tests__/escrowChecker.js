import { SynthetixJs } from '../src/index.node.js';
import config from './config';

test('Should return escrow contract address', async () => {
  const snxjs = new SynthetixJs({ networkId: config.networkId });
  const escrowAddress = await snxjs.EscrowChecker.synthetix_escrow();
  return expect(snxjs.utils.formatEther(escrowAddress)).not.toBeNaN();
});
