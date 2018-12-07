import { HavvenJs } from '../dist/main.node';
import config from './config';
const havjs = new HavvenJs({ networkId: config.networkId });
const sUSD = havjs.utils.toUtf8Bytes('sUSD');

test('Should return Havven total supply', async () => {
  const totalSupply = await havjs.Synthetix.totalSupply();
  return expect(havjs.utils.formatEther(totalSupply)).toBeTruthy();
});

test('Should throw Missing signer error', async () => {
  await expect(havjs.Synthetix.issueSynths(sUSD, 10)).rejects.toThrow('missing signer');
});

test(
  'Should execute transaction signed with private key but fail on insufficient funds',
  async () => {
    const signer = new HavvenJs.signers.PrivateKey(
      null,
      1,
      '0x0123456789012345678901234567890123456789012345678901234567890123'
    );
    const havjs = new HavvenJs({ signer, networkId: 42 });
    await expect(havjs.Synthetix.issueSynths(sUSD, havjs.util.parseEther('100'))).rejects.toThrow(
      'insufficient funds for gas * price + value'
    );
  },
  15000
);
