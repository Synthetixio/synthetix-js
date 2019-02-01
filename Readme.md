# SynthetixJs library

[![CircleCI](https://circleci.com/gh/Synthetixio/synthetix-js.svg?style=svg)](https://circleci.com/gh/Synthetixio/synthetix-js)

The Synthetix-JS Library provides a simple pre-packaged API to communicate with the [Synthetix payment engine](https://synthetix.io) on ethereum. You can use it to build your own dApp that needs to work with payments using a stablecoin.

This is particularly useful for hackathon teams to quickly `npm install synthetix-js` and have stable payments integrated into their dApp in just a few minutes.

Under the hood, SynthetixJs uses [ethers.js](https://github.com/ethers-io/ethers.js/) library and its concept of [providers](https://docs.ethers.io/ethers.js/html/api-providers.html) and [transaction signers](https://docs.ethers.io/ethers.js/html/api-contract.html#custom-signer).

The two main packages to do stable payments with are:

- [StablePayments](https://synthetixjs.synthetix.io/stablepayments) - for transfer() and payment related functions like transfer()
- [Util](https://synthetixjs.synthetix.io/util) - a bunch of handy utility functions for number handling and gas estimation

Some other packages for hacking with:

- [IsssuanceController](https://synthetixjs.synthetix.io/issuancecontroller) - for Token swapper/exchange functions such as ETH > HAV & ETH > nUSD
- [Mintr](https://synthetixjs.synthetix.io/mintr) - if you want to build a dApp for minting and burning stablecoins.

## What can I build on the Synthetix payment engine?

Anything you can think of with programmable money. We provide the stability-as-a-service and fx (foreign exchange).

We’ve come up with some thought starters for dApps you could create by integrating Synthetix's stable payments into your projects.

- Crypto Games - lottery, poker, fomoNUSD, nUSDCrash for kicks.
- Crypto Ecommerce
- Crypto Loans
- Crypto Insurance
- Crypto Payroll
- Crypto Global Remittance

## Install via npm

`npm install synthetix-js`

## Example for getting the total nUSD stablecoin in circulation

```javascript
const { SynthetixJs } = require('synthetix-js');
const snxjs = new SynthetixJs(); //uses default ContractSettings - ethers.js default provider, mainnet
(async function() {
  const totalNUSD = await snxjs.Nomin.totalSupply();
  const havTotalSupply = snxjs.utils.formatEther(totalNUSD);
  console.log('nUSDTotalSupply', havTotalSupply);
})();
```

Default settings don't use any signer. That means that constants can be viewed from the contract but executing a transaction will fail.
To execute transactions, set up signer.

4 signers are included in the library - Metamask (compatible with Dapp browsers), Trezor, Ledger and PrivateKey.
Custom ethers.js compatible signers can be used too.

## Example using a metamask signer

```javascript
const { SynthetixJs } = require('synthetix-js');
const metaMaskSigner = new SynthetixJs.signers.Metamask();
const snxjs = new SynthetixJs({ signer: metaMaskSigner }); //uses Metamask signer and default infura.io provider on mainnet
```

## Example converting ETH to USD pegged stablecoin nUSD

Obtain test ETH from a faucet [https://gitter.im/kovan-testnet/faucet](https://gitter.im/kovan-testnet/faucet)

```javascript
const txObj = await snxjs.IssuanceController.exchangeEtherForNomins({
  value: snxjs.util.parseEther('0.123'),
});
```

## Example of making a stablecoin payment

```javascript
//Transfer stablecoins to any ethereum address, wallet or smart contract
const txObj = await snxjs.StablePayments.transfer(
  '0x5C545CA7f9D34857664FDCe6aDC22edcF1D5061f',
  nUSDReceived
);
```

## Example of minting stablecoin(nUSD) with private key signer

```javascript
const { SynthetixJs } = require('synthetix-js');
//parameters: default provider, default networkId, private key as a string
const signer = new SynthetixJs.signers.PrivateKey(
  null,
  0,
  '0x0123456789012345678901234567890123456789012345678901234567890123'
);
const snxjs = new SynthetixJs({ signer });

async function run() {
  const totalSupply = await snxjs.Synthetix.totalSupply();
  const havTotalSupply = snxjs.utils.formatEther(totalSupply);
  console.log('havTotalSupply', havTotalSupply);

  //issue 100 nomins (will throw if insufficient funds for gas)
  try {
    const txObj = await snxjs.Synthetix.issueNomins(snxjs.util.parseEther('100')); //execute transaction (requires gas)
    console.log('transaction hash', txObj.hash);
  } catch (e) {
    console.log(e);
  }
}

run();
```

See /\_\_tests\_\_ folder for more examples.

## More Info

To understand the Synthetix payments engine see more at [developer.synthetix.io](https://developer.synthetix.io)

- [synthetix.io](https://synthetix.io/?utm_source=github)
- [dashboard.synthetix.io](https://dashboard.synthetix.io)
- [Reddit](https://www.reddit.com/r/synthetix/?utm_source=github)
- [Twitter](https://twitter.com/synthetix_io?utm_source=github)

## Got any questions?

Join our dev community on Discord: [https://discord.gg/S5WmKUp](https://discord.gg/S5WmKUp)
