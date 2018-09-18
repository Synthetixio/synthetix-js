HavvenJs library
========

The Havven-JS Library provides a simple pre-packaged API to communicate with the [Havven payment engine](https://www.havven.io) on ethereum. You can use it to build your own dApp that needs to work with payments using a stablecoin.

This is particularly useful for hackathon teams to quickly `npm install havven-js` and have stable payments integrated into their dApp in just a few minutes.

Under the hood, HavvenJs uses [ethers.js](https://github.com/ethers-io/ethers.js/) library and its concept of [providers](https://docs.ethers.io/ethers.js/html/api-providers.html) and [transaction signers](https://docs.ethers.io/ethers.js/html/api-contract.html#custom-signer).

The two main packages to do stable payments with are:
- [StablePayments](https://havvenjs.havven.io/stablepayments) - for transfer() and payment related functions like transfer()
- [Util](https://havvenjs.havven.io/util) - a bunch of handy utility functions for number handling and gas estimation

Some other packages for hacking with:
- [IsssuanceController](https://havvenjs.havven.io/issuancecontroller) - for Token swapper/exchange functions such as ETH > HAV & ETH > nUSD
- [Mintr](https://havvenjs.havven.io/mintr)  - if you want to build a dApp for minting and burning stablecoins.

What can I build on the Havven payment engine? 
----
Anything you can think of with programmable money. We provide the stability-as-a-service and soon fx (foreign exchange) with havvens multicurrency release.

We’ve come up with some thought starters for dApps you could create by integrating Havven’s stable payments into your projects.
- Crypto Games - lottery, poker, fomoNUSD for kicks. 
- Crypto Ecommerce
- Crypto Loans
- Crypto Insurance
- Crypto Payroll
- Crypto Global Remittance


Install via npm
----
`npm install havven-js`

Example for getting the total nUSD stablecoin in circulation
------
````
const { HavvenJs } = require('havven-js');
const havjs = new HavvenJs(); //uses default ContractSettings - ethers.js default provider, mainnet
const totalNUSD = await havjs.Nomin.totalSupply(); 
console.log('nUSDTotalSupply', totalNUSD);
````

Default settings don't use any signer. That means that constants can be viewed from the contract but executing a transaction will fail.
To execute transactions, set up signer.

4 signers are included in the library - Metamask (compatible with Dapp browsers), Trezor, Ledger and PrivateKey.
Custom ethers.js compatible signers can be used too.


Example using a metamask signer
------
````
const { HavvenJs } = require('havven-js');
const metaMaskSigner = new HavventJs.signers['Metamask']();
const havjs = new HavvenJs({signer: metaMaskSigner}); //uses Metamask signer and default infura.io provider on mainnet
````

Example converting ETH to USD pegged stablecoin nUSD
------
Obtain test ETH from a faucet https://gitter.im/kovan-testnet/faucet
````
const nUSDReceived = await havjs.IssuanceController.exchangeEtherForNomins({value 0.123}); 
````

Example of making a stablecoin payment
------
````
//Transfer stablecoins to any ethereum address, wallet or smart contract
const success = await havjs.StablePayments.transfer('0x5C545CA7f9D34857664FDCe6aDC22edcF1D5061f', nUSDReceived); 
````

Example of minting stablecoin(nUSD) with private key signer
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


More Info
------
To understand the Havven payments engine see more at [developer.havven.io](https://developer.havven.io)
