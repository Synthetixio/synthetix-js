import { SynthetixJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';
import { getDefaultProvider } from 'ethers';

const { SUPPORTED_NETWORKS } = ContractSettings;

let sUSD = SynthetixJs.utils.toUtf8Bytes('sUSD');
const contract = 'Synthetix';

describe(`src/contracts/${contract}`, () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let snxjs;
    beforeAll(() => {
      snxjs = new SynthetixJs({ networkId });
    });

    test(`${network} Should return Synthetix total supply`, async () => {
      const totalSupply = await snxjs[contract].totalSupply();
      return expect(snxjs.utils.formatEther(totalSupply)).not.toBeNaN();
    });

    test.skip(`${network} Should throw Missing signer error`, async () => {
      if (network === 'kovan') {
        sUSD = SynthetixJs.utils.formatBytes32String('sUSD');
      }
      await expect(snxjs[contract].issueSynths(sUSD, 10)).rejects.toThrow(
        'sending a transaction require a signer'
      );
    });

    // JJ: older test
    test.skip(
      `${network} Should execute transaction signed with private key but fail on insufficient funds`,
      async () => {
        const signer = new SynthetixJs.signers.PrivateKey(
          getDefaultProvider(network === 'mainnet' ? undefined : network),
          networkId,
          '0x0123456789012345678901234567890123456789012345678901234567890123'
        );
        snxjs = new SynthetixJs({ signer, networkId });
        await expect(
          snxjs[contract].issueSynths(sUSD, snxjs.util.parseEther('100'))
        ).rejects.toThrow('insufficient funds for gas * price + value');
      },
      15000
    );
  });
});
