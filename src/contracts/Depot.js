import { Contract } from 'ethers';
import abis from '../../lib/abis/index';
import ContractSettings from '../contractSettings';
const abi = abis.Depot;

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Depot(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['Depot'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.minimumDepositAmount = async () => {
    return await this.contract.minimumDepositAmount();
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
   * Transaction (consumes gas, requires signer)
   * @param _paused {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setPaused = async (_paused, txParams) => {
    txParams = txParams || {};
    return await this.contract.setPaused(_paused, txParams);
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
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.withdrawHavvens = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.withdrawHavvens(amount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.havvensReceivedForEther = async amount => {
    return await this.contract.havvensReceivedForEther(amount);
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
   * @returns String<EthAddress>
   **/
  this.fundsWallet = async () => {
    return await this.contract.fundsWallet();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.priceStalePeriod = async () => {
    return await this.contract.priceStalePeriod();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _time {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setPriceStalePeriod = async (_time, txParams) => {
    txParams = txParams || {};
    return await this.contract.setPriceStalePeriod(_time, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param nominAmount {BigNumber}
   * @param guaranteedRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeNominsForHavvensAtRate = async (nominAmount, guaranteedRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangeNominsForHavvensAtRate(
      nominAmount,
      guaranteedRate,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.decimals = async () => {
    return await this.contract.decimals();
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
   * @returns boolean
   **/
  this.pricesAreStale = async () => {
    return await this.contract.pricesAreStale();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param newEthPrice {BigNumber}
   * @param newHavvenPrice {BigNumber}
   * @param timeSent {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.updatePrices = async (newEthPrice, newHavvenPrice, timeSent, txParams) => {
    txParams = txParams || {};
    return await this.contract.updatePrices(newEthPrice, newHavvenPrice, timeSent, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForHavvens = async txParams => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForHavvens(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForNomins = async txParams => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForNomins(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param nominAmount {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeNominsForHavvens = async (nominAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangeNominsForHavvens(nominAmount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastPriceUpdateTime = async () => {
    return await this.contract.lastPriceUpdateTime();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalSellableDeposits = async () => {
    return await this.contract.totalSellableDeposits();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _havven {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setHavven = async (_havven, txParams) => {
    txParams = txParams || {};
    return await this.contract.setHavven(_havven, txParams);
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
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.havvensReceivedForNomins = async amount => {
    return await this.contract.havvensReceivedForNomins(amount);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _nomin {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setNomin = async (_nomin, txParams) => {
    txParams = txParams || {};
    return await this.contract.setNomin(_nomin, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.paused = async () => {
    return await this.contract.paused();
  };

  /**
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param guaranteedRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForNominsAtRate = async (guaranteedRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForNominsAtRate(guaranteedRate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _fundsWallet {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFundsWallet = async (_fundsWallet, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFundsWallet(_fundsWallet, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.depositNomins = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.depositNomins(amount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.depositStartIndex = async () => {
    return await this.contract.depositStartIndex();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.withdrawMyDepositedNomins = async txParams => {
    txParams = txParams || {};
    return await this.contract.withdrawMyDepositedNomins(txParams);
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
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastPauseTime = async () => {
    return await this.contract.lastPauseTime();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.havven = async () => {
    return await this.contract.havven();
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
  this.UNIT = async () => {
    return await this.contract.UNIT();
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
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.nominsReceivedForEther = async amount => {
    return await this.contract.nominsReceivedForEther(amount);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMinimumDepositAmount = async (_amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMinimumDepositAmount(_amount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns Object
   **/
  this.deposits = async uint256 => {
    return await this.contract.deposits(uint256);
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
   * @returns BigNumber
   **/
  this.usdToEthPrice = async () => {
    return await this.contract.usdToEthPrice();
  };

  /**
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param guaranteedEtherRate {BigNumber}
   * @param guaranteedHavvenRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForHavvensAtRate = async (
    guaranteedEtherRate,
    guaranteedHavvenRate,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForHavvensAtRate(
      guaranteedEtherRate,
      guaranteedHavvenRate,
      txParams
    );
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
   * @param from {String<EthAddress>}
   * @param amount {BigNumber}
   * @param data {bytes}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.tokenFallback = async (from, amount, data, txParams) => {
    txParams = txParams || {};
    return await this.contract.tokenFallback(from, amount, data, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.usdToHavPrice = async () => {
    return await this.contract.usdToHavPrice();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns BigNumber
   **/
  this.smallDeposits = async address => {
    return await this.contract.smallDeposits(address);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nomin = async () => {
    return await this.contract.nomin();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.ORACLE_FUTURE_LIMIT = async () => {
    return await this.contract.ORACLE_FUTURE_LIMIT();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.depositEndIndex = async () => {
    return await this.contract.depositEndIndex();
  };
}

export default Depot;
