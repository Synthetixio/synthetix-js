const { Wallet, providers } = require("ethers");

const PrivateKeySigner = function(provider, chainId, privateKey){
  return new Wallet(privateKey, provider || providers.getDefaultProvider());
};

module.exports = PrivateKeySigner;
