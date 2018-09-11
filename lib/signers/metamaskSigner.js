import { providers } from 'ethers';

const MetamaskSigner = (provider, chainId) => {
  let signer = undefined;
  if (window.web3 && window.web3.currentProvider) {
    const provider = new providers.Web3Provider(window.web3.currentProvider);
    signer = provider.getSigner();
    signer.getNextAddresses = () => new Promise(resolve => resolve(provider.listAccounts()));
  }
  return signer;
};

export default MetamaskSigner;
