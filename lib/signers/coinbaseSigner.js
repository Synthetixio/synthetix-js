import { providers } from 'ethers';
import WalletLink from 'walletlink';

const CoinbaseSigner = ({ appName, appLogoUrl, jsonRpcUrl, networkId = 1 }) => {
  const walletLink = new WalletLink({
    appName,
    appLogoUrl,
  });
  const eth = walletLink.makeWeb3Provider(jsonRpcUrl, networkId);
  const provider = new providers.Web3Provider(eth);
  const signer = provider.getSigner();
  signer.getNextAddresses = () => new Promise(resolve => resolve(eth.enable()));
  return signer;
};

export default CoinbaseSigner;
