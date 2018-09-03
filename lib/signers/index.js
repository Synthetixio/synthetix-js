const Trezor = require("./trezorSigner");
const Ledger = require("./ledgerSigner");
const Metamask = require("./metamaskSigner");
const PrivateKey = require("./privateKeySigner");

module.exports = {
  Trezor,
  Ledger,
  Metamask,
  PrivateKey
};
