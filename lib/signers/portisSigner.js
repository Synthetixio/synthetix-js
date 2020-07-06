import { providers } from 'ethers';
import Portis from '@portis/web3';

const PortisSigner = ({ networkName = 'mainnet', appId }) => {
  const portis = new Portis(appId, networkName);
  const provider = new providers.Web3Provider(portis.provider);
  const signer = provider.getSigner();
  signer.getNextAddresses = () => new Promise(resolve => resolve(provider.listAccounts()));
  return signer;
};

export default PortisSigner;
