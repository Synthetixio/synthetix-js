import Transport from '@ledgerhq/hw-transport-u2f/lib/TransportU2F';
import Eth from '@ledgerhq/hw-app-eth/lib/Eth';
import EthereumTx from 'ethereumjs-tx';
import { addHexPrefix, toBuffer } from 'ethereumjs-util';
import { getTransactionFields } from './txUtils';
import { utils, getDefaultProvider } from 'ethers';
const LEDGER_DERIVATION_PATH = "44'/60'/0'/";

class LedgerSigner {
  constructor(provider, chainId, addressIndex) {
    this.provider = provider || getDefaultProvider();
    this.chainId = chainId || 1;
    this.addressIndex = addressIndex || 0;
    this.cachedAddresses = [];
    this.addressLoaderBusy = false;
    this.transportPromise = Transport.create();
    this.transportPromise
      .then(transport => {
        transport.on('disconnect', () => {
          this.eth = null;
        });
        this.eth = new Eth(transport);
      })
      .catch(err => {
        this.error = err;
      });
    this.sign = this.sign.bind(this);
    this.setAddressIndex = this.setAddressIndex.bind(this);
    this.getNextAddresses = this.getNextAddresses.bind(this);
    this.getAddress = this.getAddress.bind(this);
  }

  async sign(transaction) {
    if (!this.eth) {
      await this.transportPromise;
    }
    if (transaction.value) {
      transaction.value = transaction.value.toHexString();
    }
    transaction.gasPrice = utils.hexlify(transaction.gasPrice);
    if (!transaction.chainId) {
      transaction.chainId = this.chainId;
    }
    const tx = new EthereumTx(transaction);
    const txFields = getTransactionFields(tx);
    tx.v = Buffer.from([tx._chainId]);
    tx.r = toBuffer(0);
    tx.s = toBuffer(0);
    const rawTx = tx.serialize().toString('hex');
    const signature = await this.eth.signTransaction(
      LEDGER_DERIVATION_PATH + this.addressIndex,
      rawTx
    );
    const txToSerialize = {
      ...txFields,
      v: addHexPrefix(signature.v),
      r: addHexPrefix(signature.r),
      s: addHexPrefix(signature.s),
    };
    return '0x' + new EthereumTx(txToSerialize).serialize().toString('hex');
  }

  async getNextAddresses(fromAddressIndex, pageSize) {
    try {
      fromAddressIndex = fromAddressIndex || 0;
      pageSize = pageSize || 5;
      const toAddressIndex = fromAddressIndex + pageSize;
      if (!this.eth) {
        await this.transportPromise;
      }
      if (this.addressLoaderBusy)
        return this.cachedAddresses.slice(fromAddressIndex, toAddressIndex);
      this.addressLoaderBusy = true;
      if (this.cachedAddresses.length >= toAddressIndex) {
        return this.cachedAddresses.slice(fromAddressIndex, toAddressIndex);
      }
      for (let i = 0; i < pageSize; i++) {
        const res = await this.eth.getAddress(LEDGER_DERIVATION_PATH + (fromAddressIndex + i));
        this.cachedAddresses.push(res.address);
      }
      return this.cachedAddresses.slice(fromAddressIndex, toAddressIndex);
    } catch (e) {
      console.log(e);
    } finally {
      this.addressLoaderBusy = false;
    }
  }

  setAddressIndex(addressIndex) {
    this.addressIndex = addressIndex;
  }

  async getAddress() {
    if (this.error) {
      throw this.error;
    }
    if (!this.eth) {
      await this.transportPromise;
    }
    if (this.cachedAddresses && this.addressIndex <= this.cachedAddresses.length) {
      return this.cachedAddresses[this.addressIndex];
    }
    this.cachedAddresses[this.addressIndex] = (await this.eth.getAddress(
      LEDGER_DERIVATION_PATH + this.addressIndex
    )).address;
    return this.cachedAddresses[this.addressIndex];
  }
}

export default LedgerSigner;
