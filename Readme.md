HavvenJs library
========

Havven javascript library which provides a simple interface to communicate with Havven contracts.
Under the hood HavvenJs uses ethers.js library and it's concept of providers and signers.

[Documentation](./doc/index.html)


Install
----
`npm install havven-js` TODO confirm



Usage example:
------
````
const HavvenJs = require('HavvenJs');
const havjs = new HavvenJs(); //uses default ContractSettings - ethers.js default provider, mainnet
//return Nomin total supply
const totalSupply = await havjs.Nomin.totalSupply(); 
   
````

Default settings don't use any signer. That means that constants can be viewed from contract but executing transaction will fail.
To execute transactions, set up signer. 3 signers are included in the library - Metamask (compatible with Dapp browsers), Trezor and Ledger.
Custom ethers.js compatible signers can be used too.

Usage example with signer:
------
````
const HavvenJs = require('HavvenJs');
const havjs = new HavvenJs({signer: 'Metamask'}); //uses Metamask signer and default provider on mainnet
//return Nomin total supply
const totalSupply = await havjs.IssuanceController.exchangeEtherForNomins(); 
   
````

See __tests__ for more.