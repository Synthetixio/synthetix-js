import { Wallet, getDefaultProvider } from 'ethers';
import ContractSettings from '../../src/contractSettings';

const PrivateKeySigner = function(provider, networkId, privateKey) {
  if (networkId && !provider) {
    provider = getDefaultProvider(ContractSettings.SUPPORTED_NETWORKS[networkId]);
  }
  return new Wallet(privateKey, provider || getDefaultProvider());
};

export default PrivateKeySigner;
