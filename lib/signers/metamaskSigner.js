import { providers } from 'ethers';
import { OptimismProvider } from '@eth-optimism/provider';

const MetamaskSigner = () => {
  const { ethereum } = window;
  const web3 = new providers.Web3Provider(ethereum);
  const provider = new OptimismProvider('http://18.222.50.191:8545', web3);
  const signer = provider.getSigner();
  signer.getNextAddresses = () => new Promise(resolve => resolve(ethereum.enable()));
  return signer;
};

export default MetamaskSigner;
