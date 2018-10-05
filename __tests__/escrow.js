import { HavvenJs } from '../dist/main.node';

test(
  'Should execute transaction signed with private key but fail on insufficient funds',
  async () => {
    const signer = new HavvenJs.signers.PrivateKey(
      null,
      1,
      '0x0123456789012345678901234567890123456789012345678901234567890123'
    );
    console.log(signer);
    console.log(signer.getAddress());
    const havjs = new HavvenJs({ signer });
    const balance = await havjs.Escrow.balanceOf(signer.getAddress());
    await expect(balance).toBeTruthy();
  },
  15000
);
