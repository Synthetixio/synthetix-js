import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan/Exchanger';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Exchanger(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['Exchanger'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.resolver = async () => {
    return await this.contract.resolver();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.maxSecsLeftInWaitingPeriod = async (account, currencyKey) => {
    return await this.contract.maxSecsLeftInWaitingPeriod(account, currencyKey);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param destinationAddress {String<EthAddress>}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchange = async (
    from,
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    destinationAddress,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchange(
      from,
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      destinationAddress,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _owner {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.nominateNewOwner = async (_owner, txParams) => {
    txParams = txParams || {};
    return await this.contract.nominateNewOwner(_owner, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns Object
   **/
  this.settlementOwing = async (account, currencyKey) => {
    return await this.contract.settlementOwing(account, currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param sourceCurrencyKey {bytes32}
   * @param destinationCurrencyKey {bytes32}
   * @returns BigNumber
   **/
  this.feeRateForExchange = async (sourceCurrencyKey, destinationCurrencyKey) => {
    return await this.contract.feeRateForExchange(sourceCurrencyKey, destinationCurrencyKey);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
   * @returns Object
   **/
  this.settle = async (from, currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.settle(from, currencyKey, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param from {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @param amount {BigNumber}
   * @param refunded {BigNumber}
   * @returns BigNumber
   **/
  this.calculateAmountAfterSettlement = async (from, currencyKey, amount, refunded) => {
    return await this.contract.calculateAmountAfterSettlement(from, currencyKey, amount, refunded);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _resolver {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setResolver = async (_resolver, txParams) => {
    txParams = txParams || {};
    return await this.contract.setResolver(_resolver, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _waitingPeriodSecs {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setWaitingPeriodSecs = async (_waitingPeriodSecs, txParams) => {
    txParams = txParams || {};
    return await this.contract.setWaitingPeriodSecs(_waitingPeriodSecs, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    return await this.contract.acceptOwnership(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.waitingPeriodSecs = async () => {
    return await this.contract.waitingPeriodSecs();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _exchangeEnabled {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setExchangeEnabled = async (_exchangeEnabled, txParams) => {
    txParams = txParams || {};
    return await this.contract.setExchangeEnabled(_exchangeEnabled, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.exchangeEnabled = async () => {
    return await this.contract.exchangeEnabled();
  };
}

export default Exchanger;
