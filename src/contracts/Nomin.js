const {Contract, providers, utils} = require('ethers');
const addresses = require('../../lib/addresses');
const abi = require('../../lib/abis').Nomin;
const ContractSettings = require('../contractSettings');

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Nomin(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();
  
  this.contract = new Contract(
    this.contractSettings.addressList["Nomin"],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );
  
  

  /**
   * court - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.court = async () => {
    return await this.contract.court();
  };


  /**
   * name - constant - doesn't require signer
   * @returns String
   **/
  this.name = async () => {
    return await this.contract.name();
  };


  /**
   * approve - function - requires signer
   * @param spender {String<EthAddress>}
   * @param value {Number}
   * @returns boolean
   **/
  this.approve = async (spender, value) => {
    return await this.contract.approve(spender, value);
  };


  /**
   * nominateNewOwner - function - requires signer
   * @param _owner {String<EthAddress>}
  
   **/
  this.nominateNewOwner = async (_owner) => {
    return await this.contract.nominateNewOwner(_owner);
  };


  /**
   * initiationTime - constant - doesn't require signer
   * @returns Number
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime();
  };


  /**
   * totalSupply - constant - doesn't require signer
   * @returns Number
   **/
  this.totalSupply = async () => {
    return await this.contract.totalSupply();
  };


  /**
   * amountReceived - constant - doesn't require signer
   * @param value {Number}
   * @returns Number
   **/
  this.amountReceived = async (value) => {
    return await this.contract.amountReceived(value);
  };


  /**
   * setSelfDestructBeneficiary - function - requires signer
   * @param _beneficiary {String<EthAddress>}
  
   **/
  this.setSelfDestructBeneficiary = async (_beneficiary) => {
    return await this.contract.setSelfDestructBeneficiary(_beneficiary);
  };


  /**
   * transferFrom - function - requires signer
   * @param from {String<EthAddress>}
   * @param to {String<EthAddress>}
   * @param value {Number}
   * @returns boolean
   **/
  this.transferFrom = async (from, to, value) => {
    return await this.contract.transferFrom(from, to, value);
  };


  /**
   * decimals - constant - doesn't require signer
   * @returns Number
   **/
  this.decimals = async () => {
    return await this.contract.decimals();
  };


  /**
   * feeAuthority - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.feeAuthority = async () => {
    return await this.contract.feeAuthority();
  };


  /**
   * terminateSelfDestruct - function - requires signer
  
   **/
  this.terminateSelfDestruct = async () => {
    return await this.contract.terminateSelfDestruct();
  };


  /**
   * transferFeeRate - constant - doesn't require signer
   * @returns Number
   **/
  this.transferFeeRate = async () => {
    return await this.contract.transferFeeRate();
  };


  /**
   * freezeAndConfiscate - function - requires signer
   * @param target {String<EthAddress>}
  
   **/
  this.freezeAndConfiscate = async (target) => {
    return await this.contract.freezeAndConfiscate(target);
  };


  /**
   * transferPlusFee - constant - doesn't require signer
   * @param value {Number}
   * @returns Number
   **/
  this.transferPlusFee = async (value) => {
    return await this.contract.transferPlusFee(value);
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
   * donateToFeePool - function - requires signer
   * @param n {Number}
   * @returns boolean
   **/
  this.donateToFeePool = async (n) => {
    return await this.contract.donateToFeePool(n);
  };


  /**
   * balanceOf - constant - doesn't require signer
   * @param account {String<EthAddress>}
   * @returns Number
   **/
  this.balanceOf = async (account) => {
    return await this.contract.balanceOf(account);
  };


  /**
   * unfreezeAccount - function - requires signer
   * @param target {String<EthAddress>}
  
   **/
  this.unfreezeAccount = async (target) => {
    return await this.contract.unfreezeAccount(target);
  };


  /**
   * acceptOwnership - function - requires signer
  
   **/
  this.acceptOwnership = async () => {
    return await this.contract.acceptOwnership();
  };


  /**
   * issue - function - requires signer
   * @param account {String<EthAddress>}
   * @param amount {Number}
  
   **/
  this.issue = async (account, amount) => {
    return await this.contract.issue(account, amount);
  };


  /**
   * setFeeAuthority - function - requires signer
   * @param _feeAuthority {String<EthAddress>}
  
   **/
  this.setFeeAuthority = async (_feeAuthority) => {
    return await this.contract.setFeeAuthority(_feeAuthority);
  };


  /**
   * owner - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };


  /**
   * symbol - constant - doesn't require signer
   * @returns String
   **/
  this.symbol = async () => {
    return await this.contract.symbol();
  };


  /**
   * setProxy - function - requires signer
   * @param _proxy {String<EthAddress>}
  
   **/
  this.setProxy = async (_proxy) => {
    return await this.contract.setProxy(_proxy);
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
   * burn - function - requires signer
   * @param account {String<EthAddress>}
   * @param amount {Number}
  
   **/
  this.burn = async (account, amount) => {
    return await this.contract.burn(account, amount);
  };


  /**
   * setTokenState - function - requires signer
   * @param _tokenState {String<EthAddress>}
  
   **/
  this.setTokenState = async (_tokenState) => {
    return await this.contract.setTokenState(_tokenState);
  };


  /**
   * SELFDESTRUCT_DELAY - constant - doesn't require signer
   * @returns Number
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY();
  };


  /**
   * transfer - function - requires signer
   * @param to {String<EthAddress>}
   * @param value {Number}
   * @returns boolean
   **/
  this.transfer = async (to, value) => {
    return await this.contract.transfer(to, value);
  };


  /**
   * setCourt - function - requires signer
   * @param _court {String<EthAddress>}
  
   **/
  this.setCourt = async (_court) => {
    return await this.contract.setCourt(_court);
  };


  /**
   * withdrawFees - function - requires signer
   * @param account {String<EthAddress>}
   * @param value {Number}
   * @returns boolean
   **/
  this.withdrawFees = async (account, value) => {
    return await this.contract.withdrawFees(account, value);
  };


  /**
   * feePool - constant - doesn't require signer
   * @returns Number
   **/
  this.feePool = async () => {
    return await this.contract.feePool();
  };


  /**
   * selfDestructInitiated - constant - doesn't require signer
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated();
  };


  /**
   * setMessageSender - function - requires signer
   * @param sender {String<EthAddress>}
  
   **/
  this.setMessageSender = async (sender) => {
    return await this.contract.setMessageSender(sender);
  };


  /**
   * initiateSelfDestruct - function - requires signer
  
   **/
  this.initiateSelfDestruct = async () => {
    return await this.contract.initiateSelfDestruct();
  };


  /**
   * selfDestructBeneficiary - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary();
  };


  /**
   * setTransferFeeRate - function - requires signer
   * @param _transferFeeRate {Number}
  
   **/
  this.setTransferFeeRate = async (_transferFeeRate) => {
    return await this.contract.setTransferFeeRate(_transferFeeRate);
  };


  /**
   * frozen - constant - doesn't require signer
   * @param  {String<EthAddress>}
   * @returns boolean
   **/
  this.frozen = async () => {
    return await this.contract.frozen();
  };


  /**
   * transferSenderPaysFee - function - requires signer
   * @param to {String<EthAddress>}
   * @param value {Number}
   * @returns boolean
   **/
  this.transferSenderPaysFee = async (to, value) => {
    return await this.contract.transferSenderPaysFee(to, value);
  };


  /**
   * transferFeeIncurred - constant - doesn't require signer
   * @param value {Number}
   * @returns Number
   **/
  this.transferFeeIncurred = async (value) => {
    return await this.contract.transferFeeIncurred(value);
  };


  /**
   * allowance - constant - doesn't require signer
   * @param owner {String<EthAddress>}
   * @param spender {String<EthAddress>}
   * @returns Number
   **/
  this.allowance = async (owner, spender) => {
    return await this.contract.allowance(owner, spender);
  };


  /**
   * transferFromSenderPaysFee - function - requires signer
   * @param from {String<EthAddress>}
   * @param to {String<EthAddress>}
   * @param value {Number}
   * @returns boolean
   **/
  this.transferFromSenderPaysFee = async (from, to, value) => {
    return await this.contract.transferFromSenderPaysFee(from, to, value);
  };


  /**
   * tokenState - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.tokenState = async () => {
    return await this.contract.tokenState();
  };


  /**
   * FEE_ADDRESS - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.FEE_ADDRESS = async () => {
    return await this.contract.FEE_ADDRESS();
  };


  /**
   * proxy - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.proxy = async () => {
    return await this.contract.proxy();
  };


}

module.exports = Nomin