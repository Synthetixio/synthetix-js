import { toBuffer, addHexPrefix, bufferToHex, stripHexPrefix, padToEven } from 'ethereumjs-util';
const trimStart = require('lodash/trimStart');

const hexEncodeQuantity = value => {
  const trimmedValue = trimStart(value.toString('hex'), '0');
  return addHexPrefix(trimmedValue === '' ? '0' : trimmedValue);
};

// When encoding UNFORMATTED DATA (byte arrays, account addresses, hashes, bytecode arrays): encode as hex, prefix with "0x", two hex digits per byte.
const hexEncodeData = value => {
  // convert the value to a buffer
  // convert the value to a hex prefixed hex string
  // strip the hex prefix
  // pad the data to even (two hex digits per byte)
  // add the hex prefix back in
  return addHexPrefix(padToEven(stripHexPrefix(bufferToHex(toBuffer(value)))));
};

export const getTransactionFields = t => {
  const { data, gasLimit, gasPrice, to, nonce, value } = t;
  const chainId = t.getChainId();

  return {
    value: hexEncodeQuantity(value),
    data: hexEncodeData(data),
    // To address is unchecksummed, which could cause mismatches in comparisons
    to: hexEncodeData(to),
    // Everything else is as-is
    nonce: hexEncodeQuantity(nonce),
    gasPrice: hexEncodeQuantity(gasPrice),
    gasLimit: hexEncodeQuantity(gasLimit),
    chainId,
  };
};
