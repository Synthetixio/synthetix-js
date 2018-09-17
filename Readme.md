HavvenJs library
========

Havven javascript library provides a simple interface to communicate with Havven smart contracts on ethereum.
Under the hood HavvenJs uses [ethers.js](https://github.com/ethers-io/ethers.js/) library and it's concept of [providers](https://docs.ethers.io/ethers.js/html/api-providers.html) and [transaction signers](https://docs.ethers.io/ethers.js/html/api-contract.html#custom-signer).

Install
----
`npm install havven-js`



Usage example:
------
````
const { HavvenJs } = require('havven-js');
const havjs = new HavvenJs(); //uses default ContractSettings - ethers.js default provider, mainnet
//return Nomin(nUSD)stablecoin total supply
const totalNUSD = await havjs.Nomin.totalSupply(); 
   
````

Default settings don't use any signer. That means that constants can be viewed from contract but executing transaction will fail.
To execute transactions, set up signer.

4 signers are included in the library - Metamask (compatible with Dapp browsers), Trezor, Ledger and PrivateKey.
Custom ethers.js compatible signers can be used too.

Usage example with metamask signer:
------
````
const { HavvenJs } = require('havven-js');
const metaMaskSigner = new HavventJs.signers['Metamask']();
const havjs = new HavvenJs({metaMaskSigner}); //uses Metamask signer and default infura.io provider on mainnet

//Convert ETH for USD pegged stablecoin
const nUSDReceived = await havjs.IssuanceController.exchangeEtherForNomins(); 

//Transfer stablecoins to any ethereum address
const success = await havjs.StablePayments.transfer('0x5C545CA7f9D34857664FDCe6aDC22edcF1D5061f', nUSDReceived); 
````

Full example with private key signer:
------
````
const { HavvenJs } = require('havven-js');
//parameters: default provider, default networkId, private key as a string
const signer = new HavvenJs.signers.PrivateKey(null, 0, '0x0123456789012345678901234567890123456789012345678901234567890123');
const havjs = new HavvenJs({signer});

async function run(){
  //read contract
  const totalSupply = await havjs.Havven.totalSupply();
  const havTotalSupply = havjs.utils.formatEther(totalSupply);
  console.log('havTotalSupply', havTotalSupply);
  //execute transaction (requires gas)
  //issue 100 nomins (will throw if insufficient funds for gas
  try {
    await havjs.Havven.issueNomins(havjs.util.parseEther("100"));
  } catch (e) {
    console.log(e);
  }
}

run();
````

See /\_\_tests__  folder for more examples.
