import { HavvenJs } from '../dist/main.node';
const havjs = new HavvenJs();

test('Should return escrow contract address', async () => {
  const escrowAddress = await havjs.EscrowChecker.havvenEscrow();
  return expect(escrowAddress).toBeTruthy();
});
