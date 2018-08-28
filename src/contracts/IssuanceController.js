const {Contract, providers, utils} = require('ethers');
const addresses = require('../../lib/addresses');
const abi = require('../../lib/abis').IssuanceController;
const ContractSettings = require('../contractSettings');

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function IssuanceController(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();
  
  this.contract = new Contract(
    this.contractSettings.addressList["IssuanceController"],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );
  
  

  /**
   * nominateNewOwner - function - requires signer
   * @param _owner {String<EthAddress>}
  
   **/
  this.nominateNewOwner = async (_owner) => {
    return await this.contract.nominateNewOwner(_owner);
  };


  /**
   * setPaused - function - requires signer
   * @param _paused {boolean}
  
   **/
  this.setPaused = async (_paused) => {
    return await this.contract.setPaused(_paused);
  };


  /**
   * initiationTime - constant - doesn't require signer
   * @returns Number
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime();
  };


  /**
   * withdrawHavvens - function - requires signer
   * @param amount {Number}
  
   **/
  this.withdrawHavvens = async (amount) => {
    return await this.contract.withdrawHavvens(amount);
  };


  /**
   * havvensReceivedForEther - constant - doesn't require signer
   * @param amount {Number}
   * @returns Number
   **/
  this.havvensReceivedForEther = async (amount) => {
    return await this.contract.havvensReceivedForEther(amount);
  };


  /**
   * setSelfDestructBeneficiary - function - requires signer
   * @param _beneficiary {String<EthAddress>}
  
   **/
  this.setSelfDestructBeneficiary = async (_beneficiary) => {
    return await this.contract.setSelfDestructBeneficiary(_beneficiary);
  };


  /**
   * fundsWallet - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.fundsWallet = async () => {
    return await this.contract.fundsWallet();
  };


  /**
   * priceStalePeriod - constant - doesn't require signer
   * @returns Number
   **/
  this.priceStalePeriod = async () => {
    return await this.contract.priceStalePeriod();
  };


  /**
   * setPriceStalePeriod - function - requires signer
   * @param _time {Number}
  
   **/
  this.setPriceStalePeriod = async (_time) => {
    return await this.contract.setPriceStalePeriod(_time);
  };


  /**
   * exchangeNominsForHavvensAtRate - function - requires signer
   * @param nominAmount {Number}
   * @param guaranteedRate {Number}
   * @returns Number
   **/
  this.exchangeNominsForHavvensAtRate = async (nominAmount, guaranteedRate) => {
    return await this.contract.exchangeNominsForHavvensAtRate(nominAmount, guaranteedRate);
  };


  /**
   * decimals - constant - doesn't require signer
   * @returns Number
   **/
  this.decimals = async () => {
    return await this.contract.decimals();
  };


  /**
   * terminateSelfDestruct - function - requires signer
  
   **/
  this.terminateSelfDestruct = async () => {
    return await this.contract.terminateSelfDestruct();
  };


  /**
   * pricesAreStale - constant - doesn't require signer
   * @returns boolean
   **/
  this.pricesAreStale = async () => {
    return await this.contract.pricesAreStale();
  };


  /**
   * updatePrices - function - requires signer
   * @param newEthPrice {Number}
   * @param newHavvenPrice {Number}
   * @param timeSent {Number}
  
   **/
  this.updatePrices = async (newEthPrice, newHavvenPrice, timeSent) => {
    return await this.contract.updatePrices(newEthPrice, newHavvenPrice, timeSent);
  };


  /**
   * exchangeEtherForHavvens - function - requires signer
   * @returns Number
   **/
  this.exchangeEtherForHavvens = async () => {
    return await this.contract.exchangeEtherForHavvens();
  };


  /**
   * exchangeEtherForNomins - function - requires signer
   * @returns Number
   **/
  this.exchangeEtherForNomins = async () => {
    return await this.contract.exchangeEtherForNomins();
  };


  /**
   * exchangeNominsForHavvens - function - requires signer
   * @param nominAmount {Number}
   * @returns Number
   **/
  this.exchangeNominsForHavvens = async (nominAmount) => {
    return await this.contract.exchangeNominsForHavvens(nominAmount);
  };


  /**
   * lastPriceUpdateTime - constant - doesn't require signer
   * @returns Number
   **/
  this.lastPriceUpdateTime = async () => {
    return await this.contract.lastPriceUpdateTime();
  };


  /**
   * setHavven - function - requires signer
   * @param _havven {String<EthAddress>}
  
   **/
  this.setHavven = async (_havven) => {
    return await this.contract.setHavven(_havven);
  };


  /**
   * nominatedOwner - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };


  /**
   * havvensReceivedForNomins - constant - doesn't require signer
   * @param amount {Number}
   * @returns Number
   **/
  this.havvensReceivedForNomins = async (amount) => {
    return await this.contract.havvensReceivedForNomins(amount);
  };


  /**
   * setNomin - function - requires signer
   * @param _nomin {String<EthAddress>}
  
   **/
  this.setNomin = async (_nomin) => {
    return await this.contract.setNomin(_nomin);
  };


  /**
   * paused - constant - doesn't require signer
   * @returns boolean
   **/
  this.paused = async () => {
    return await this.contract.paused();
  };


  /**
   * exchangeEtherForNominsAtRate - function - requires signer
   * @param guaranteedRate {Number}
   * @returns Number
   **/
  this.exchangeEtherForNominsAtRate = async (guaranteedRate) => {
    return await this.contract.exchangeEtherForNominsAtRate(guaranteedRate);
  };


  /**
   * setFundsWallet - function - requires signer
   * @param _fundsWallet {String<EthAddress>}
  
   **/
  this.setFundsWallet = async (_fundsWallet) => {
    return await this.contract.setFundsWallet(_fundsWallet);
  };


  /**
   * acceptOwnership - function - requires signer
  
   **/
  this.acceptOwnership = async () => {
    return await this.contract.acceptOwnership();
  };


  /**
   * setOracle - function - requires signer
   * @param _oracle {String<EthAddress>}
  
   **/
  this.setOracle = async (_oracle) => {
    return await this.contract.setOracle(_oracle);
  };


  /**
   * oracle - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.oracle = async () => {
    return await this.contract.oracle();
  };


  /**
   * owner - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };


  /**
   * lastPauseTime - constant - doesn't require signer
   * @returns Number
   **/
  this.lastPauseTime = async () => {
    return await this.contract.lastPauseTime();
  };


  /**
   * havven - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.havven = async () => {
    return await this.contract.havven();
  };


  /**
   * selfDestruct - function - requires signer
  
   **/
  this.selfDestruct = async () => {
    return await this.contract.selfDestruct();
  };


  /**
   * UNIT - constant - doesn't require signer
   * @returns Number
   **/
  this.UNIT = async () => {
    return await this.contract.UNIT();
  };


  /**
   * SELFDESTRUCT_DELAY - constant - doesn't require signer
   * @returns Number
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY();
  };


  /**
   * nominsReceivedForEther - constant - doesn't require signer
   * @param amount {Number}
   * @returns Number
   **/
  this.nominsReceivedForEther = async (amount) => {
    return await this.contract.nominsReceivedForEther(amount);
  };


  /**
   * selfDestructInitiated - constant - doesn't require signer
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated();
  };


  /**
   * usdToEthPrice - constant - doesn't require signer
   * @returns Number
   **/
  this.usdToEthPrice = async () => {
    return await this.contract.usdToEthPrice();
  };


  /**
   * exchangeEtherForHavvensAtRate - function - requires signer
   * @param guaranteedEtherRate {Number}
   * @param guaranteedHavvenRate {Number}
   * @returns Number
   **/
  this.exchangeEtherForHavvensAtRate = async (guaranteedEtherRate, guaranteedHavvenRate) => {
    return await this.contract.exchangeEtherForHavvensAtRate(guaranteedEtherRate, guaranteedHavvenRate);
  };


  /**
   * initiateSelfDestruct - function - requires signer
  
   **/
  this.initiateSelfDestruct = async () => {
    return await this.contract.initiateSelfDestruct();
  };


  /**
   * usdToHavPrice - constant - doesn't require signer
   * @returns Number
   **/
  this.usdToHavPrice = async () => {
    return await this.contract.usdToHavPrice();
  };


  /**
   * selfDestructBeneficiary - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary();
  };


  /**
   * nomin - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.nomin = async () => {
    return await this.contract.nomin();
  };


  /**
   * withdrawNomins - function - requires signer
   * @param amount {Number}
  
   **/
  this.withdrawNomins = async (amount) => {
    return await this.contract.withdrawNomins(amount);
  };


}

module.exports = IssuanceController