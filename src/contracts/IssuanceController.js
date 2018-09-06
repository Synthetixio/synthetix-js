import { Contract } from 'ethers';
import abis from '../../lib/abis/index';
import ContractSettings from '../contractSettings';
const abi = abis.IssuanceController;

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function IssuanceController(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['IssuanceController'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

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
   * Withdraw havvens: Allows the owner to withdraw havvens from this contract if needed.<br>
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
   * Set the stale period on the updated price variables.<br>
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
   * Check if the prices haven't been updated for longer than the stale period.<br>
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.pricesAreStale = async () => {
    return await this.contract.pricesAreStale();
  };

  /**
   * Access point for the oracle to update the prices of havvens / eth.<br>
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
   * Exchange ETH to nUSD.<br>
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
   * Exchange nUSD for Havvens.<br>
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
   * Set the Havven contract that the issuance controller uses to issue Havvens.<br>
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
   * Calculate how many havvens you will receive if you transfer an amount of nomins.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.havvensReceivedForNomins = async amount => {
    return await this.contract.havvensReceivedForNomins(amount);
  };

  /**
   * Set the Nomin contract that the issuance controller uses to issue Nomins.<br>
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
   * Set the funds wallet where ETH raised is held.<br>
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
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    return await this.contract.acceptOwnership(txParams);
  };

  /**
   * Set the Oracle that pushes the havven price to this contract.<br>
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
   * Calculate how many nomins you will receive if you transfer an amount of ether.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.nominsReceivedForEther = async amount => {
    return await this.contract.nominsReceivedForEther(amount);
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
   * @returns String<EthAddress>
   **/
  this.nomin = async () => {
    return await this.contract.nomin();
  };

  /**
   * Withdraw nomins: Allows the owner to withdraw nomins from this contract if needed.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.withdrawNomins = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.withdrawNomins(amount, txParams);
  };
}

export default IssuanceController;
