import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/rinkeby/ExchangeRates';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function ExchangeRates(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['ExchangeRates'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.rateIsStale = async currencyKey => {
    return await this.contract.rateIsStale(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKeys {bytes32[]}
   * @returns uint256[]
   **/
  this.lastRateUpdateTimesForCurrencies = async currencyKeys => {
    return await this.contract.lastRateUpdateTimesForCurrencies(currencyKeys);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.rateStalePeriod = async () => {
    return await this.contract.rateStalePeriod();
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
   * @returns BigNumber
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _beneficiary {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSelfDestructBeneficiary = async (_beneficiary, txParams) => {
    txParams = txParams || {};
    return await this.contract.setSelfDestructBeneficiary(_beneficiary, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKeys {bytes32[]}
   * @returns boolean
   **/
  this.anyRateIsStale = async currencyKeys => {
    return await this.contract.anyRateIsStale(currencyKeys);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns bytes32
   **/
  this.invertedKeys = async uint256_1 => {
    return await this.contract.invertedKeys(uint256_1);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.terminateSelfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.terminateSelfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.lastRateUpdateTimeForCurrency = async currencyKey => {
    return await this.contract.lastRateUpdateTimeForCurrency(currencyKey);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.deleteRate = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.deleteRate(currencyKey, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @returns BigNumber
   **/
  this.effectiveValue = async (sourceCurrencyKey, sourceAmount, destinationCurrencyKey) => {
    return await this.contract.effectiveValue(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns Object
   **/
  this.inversePricing = async bytes32_1 => {
    return await this.contract.inversePricing(bytes32_1);
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
   * Transaction (consumes gas, requires signer)
   * @param _time {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setRateStalePeriod = async (_time, txParams) => {
    txParams = txParams || {};
    return await this.contract.setRateStalePeriod(_time, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _oracle {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setOracle = async (_oracle, txParams) => {
    txParams = txParams || {};
    return await this.contract.setOracle(_oracle, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.oracle = async () => {
    return await this.contract.oracle();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns boolean
   **/
  this.isXDRParticipant = async bytes32_1 => {
    return await this.contract.isXDRParticipant(bytes32_1);
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
   * @param txParams {TxParams}
  
   **/
  this.selfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.selfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns bytes32
   **/
  this.xdrParticipants = async uint256_1 => {
    return await this.contract.xdrParticipants(uint256_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.rateForCurrency = async currencyKey => {
    return await this.contract.rateForCurrency(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.rateIsFrozen = async currencyKey => {
    return await this.contract.rateIsFrozen(currencyKey);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param entryPoint {BigNumber}
   * @param upperLimit {BigNumber}
   * @param lowerLimit {BigNumber}
   * @param freeze {boolean}
   * @param freezeAtUpperLimit {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setInversePricing = async (
    currencyKey,
    entryPoint,
    upperLimit,
    lowerLimit,
    freeze,
    freezeAtUpperLimit,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.setInversePricing(
      currencyKey,
      entryPoint,
      upperLimit,
      lowerLimit,
      freeze,
      freezeAtUpperLimit,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKeys {bytes32[]}
   * @returns Object
   **/
  this.ratesAndStaleForCurrencies = async currencyKeys => {
    return await this.contract.ratesAndStaleForCurrencies(currencyKeys);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.initiateSelfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.initiateSelfDestruct(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKeys {bytes32[]}
   * @param newRates {uint256[]}
   * @param timeSent {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.updateRates = async (currencyKeys, newRates, timeSent, txParams) => {
    txParams = txParams || {};
    return await this.contract.updateRates(currencyKeys, newRates, timeSent, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKeys {bytes32[]}
   * @returns uint256[]
   **/
  this.ratesForCurrencies = async currencyKeys => {
    return await this.contract.ratesForCurrencies(currencyKeys);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.removeInversePricing = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeInversePricing(currencyKey, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param code {bytes32}
   * @returns BigNumber
   **/
  this.lastRateUpdateTimes = async code => {
    return await this.contract.lastRateUpdateTimes(code);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param code {bytes32}
   * @returns BigNumber
   **/
  this.rates = async code => {
    return await this.contract.rates(code);
  };
}

export default ExchangeRates;
