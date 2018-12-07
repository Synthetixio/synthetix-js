import { Wallet, providers } from 'ethers';
import ContractSettings from '../../src/contractSettings';

const PrivateKeySigner = function(provider, networkId, privateKey) {
  if (networkId && !provider) {
    provider = providers.getDefaultProvider(ContractSettings.SUPPORTED_NETWORKS[networkId]);
  }
  return new Wallet(privateKey, provider || providers.getDefaultProvider());
};

export default PrivateKeySigner;
