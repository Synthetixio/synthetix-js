import { HavvenJs } from '../dist/main.node';
import config from './config';
const havjs = new HavvenJs({ networkId: config.networkId });

test('Should return escrow contract address', async () => {
  const escrowAddress = await havjs.EscrowChecker.havven_escrow();
  console.log(escrowAddress);
  return expect(havjs.utils.formatEther(escrowAddress)).toBeTruthy();
});
