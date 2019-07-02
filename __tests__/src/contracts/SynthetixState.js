import { SynthetixJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';

const { SUPPORTED_NETWORKS } = ContractSettings;

const contract = 'SynthetixState';

describe(`src/contracts/${contract}`, () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let snxjs;
    beforeAll(() => {
      snxjs = new SynthetixJs({ networkId });
    });

    //TODO reenable this test after MAINNET Release
    xtest(
      `${network} Should return target issuance ratio (0.133333333333333333)`,
      async () => {
        const issuanceRatio = await snxjs[contract].issuanceRatio();
        return expect(snxjs.utils.formatEther(issuanceRatio)).toEqual('0.133333333333333333');
      },
      15000
    );
  });
});
