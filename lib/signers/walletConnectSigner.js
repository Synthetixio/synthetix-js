import { providers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';

const WalletConnectSigner = ({ infuraId = '' }) => {
  const provider = new WalletConnectProvider({
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    infuraId,
    chainId: 1,
  });
  const wrappedProvider = new providers.Web3Provider(provider);
  const signer = wrappedProvider.getSigner();
  signer.getNextAddresses = () => new Promise(resolve => resolve(wrappedProvider.listAccounts()));
  return signer;
};

export default WalletConnectSigner;
