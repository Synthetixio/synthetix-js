import { SynthetixJs } from '../dist/main.node';
import config from './config';
const snxjs = new SynthetixJs({ networkId: config.networkId });

test('Should return escrow contract address', async () => {
  const escrowAddress = await snxjs.EscrowChecker.havven_escrow();
  return expect(snxjs.utils.formatEther(escrowAddress)).toBeTruthy();
});
