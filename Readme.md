HavvenJs library
========

Havven javascript library which provides a simple interface to communicate with Havven contracts.
Under the hood HavvenJs uses ethers.js library and it's concept of providers and signers.

Install
----
`npm install havven-js` TODO confirm



Usage example:
------
````
const { HavvenJs } = require('havven-js');
const havjs = new HavvenJs(); //uses default ContractSettings - ethers.js default provider, mainnet
//return Nomin total supply
const totalSupply = await havjs.Nomin.totalSupply(); 
   
````

Default settings don't use any signer. That means that constants can be viewed from contract but executing transaction will fail.
To execute transactions, set up signer.

4 signers are included in the library - Metamask (compatible with Dapp browsers), Trezor, Ledger and PrivateKey.
Custom ethers.js compatible signers can be used too.

Usage example with metamask signer:
------
````
const { HavvenJs } = require('havven-js');
const havjs = new HavvenJs({signer: 'Metamask'}); //uses Metamask signer and default provider on mainnet
//return Nomin total supply
const totalSupply = await havjs.IssuanceController.exchangeEtherForNomins(); 
   
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