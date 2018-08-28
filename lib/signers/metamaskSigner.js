const { providers } = require("ethers");

const MetamaskSigner = (provider, chainId) => {
  let signer = undefined;
  if (window.web3 && window.web3.currentProvider) {
    signer = new providers.Web3Provider(
      window.web3.currentProvider
    ).getSigner();
  }
  return signer;
};

module.exports = MetamaskSigner;
