import { providers } from 'ethers';

const MetamaskSigner = () => {
  const { ethereum } = window;
  const provider = new providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  signer.getNextAddresses = () =>
    new Promise(resolve =>
      resolve(ethereum.send('eth_requestAccounts').then(accounts => accounts.result))
    );
  return signer;
};

export default MetamaskSigner;
