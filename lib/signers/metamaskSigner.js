import { providers } from 'ethers';
import { OptimismProvider } from '@eth-optimism/provider';

const MetamaskSigner = network => {
  const { ethereum } = window;
  const web3 = new providers.Web3Provider(ethereum);
  const provider = new OptimismProvider(`https://${network}.optimism.io`, web3);
  const signer = provider.getSigner();
  signer.getNextAddresses = () => new Promise(resolve => resolve(ethereum.enable()));
  return signer;
};

export default MetamaskSigner;
