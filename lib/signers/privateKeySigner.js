import { Wallet, providers } from 'ethers';

const PrivateKeySigner = function(provider, chainId, privateKey) {
  return new Wallet(privateKey, provider || providers.getDefaultProvider());
};

export default PrivateKeySigner;
