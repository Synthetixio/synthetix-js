HavvenJs library
========

The Havven-JS Library provides a simple pre-packaged API to communicate with the Havven payment engine on ethereum; you can use it to build your own project that needs to work with payments using a stablecoin.

This is particularly useful for hackathon teams to quickly `npm install havven-js` and have stable payments integrated into their dApp in just a few minutes.


Under the hood HavvenJs uses [ethers.js](https://github.com/ethers-io/ethers.js/) library and it's concept of [providers](https://docs.ethers.io/ethers.js/html/api-providers.html) and [transaction signers](https://docs.ethers.io/ethers.js/html/api-contract.html#custom-signer).

There are 3 packages;
*StablePayments* - for transfer() and payment related functions like transfer()
*Converter* - for Token swapper/exchange functions such as ETH > HAV & ETH > nUSD
*Mintr*  - if you want to build a dApp for minting and burning stablecoin centralised Mintr

What are some ways I could build on the Havven framework? 
----
We’ve come up with some thought starters for dapps or platforms you could create by integrating Havven’s stable payments into your projects.
Games - lottery
Loans
Insurance


Install via npm
----
`npm install havven-js`

Example for getting the havven stablecoin in circulation
------
````
const { HavvenJs } = require('havven-js');
const havjs = new HavvenJs(); //uses default ContractSettings - ethers.js default provider, mainnet
const totalNUSD = await havjs.Nomin.totalSupply(); //return total Nomin(nUSD)stablecoin in circulation
console.log('nUSDTotalSupply', totalNUSD);
   
````

Default settings don't use any signer. That means that constants can be viewed from contract but executing transaction will fail.
To execute transactions, set up signer.

4 signers are included in the library - Metamask (compatible with Dapp browsers), Trezor, Ledger and PrivateKey.
Custom ethers.js compatible signers can be used too.

 Example of making a stablecoin payment with metamask signer:
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

Example of minting stablecoin(nUSD) with private key signer:
------
````
const { HavvenJs } = require('havven-js');
//parameters: default provider, default networkId, private key as a string
const signer = new HavvenJs.signers.PrivateKey(null, 0, '0x0123456789012345678901234567890123456789012345678901234567890123');
const havjs = new HavvenJs({signer});

async function run(){
  const totalSupply = await havjs.Havven.totalSupply();
  const havTotalSupply = havjs.utils.formatEther(totalSupply);
  console.log('havTotalSupply', havTotalSupply);
  
  //issue 100 nomins (will throw if insufficient funds for gas
  try {
    await havjs.Havven.issueNomins(havjs.util.parseEther("100")); //execute transaction (requires gas)
  } catch (e) {
    console.log(e);
  }
}

run();
````

See /\_\_tests__  folder for more examples.
