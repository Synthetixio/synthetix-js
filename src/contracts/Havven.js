const { Contract } = require('ethers');
const abi = require('../../lib/abis').Havven;
const ContractSettings = require('../contractSettings');

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Havven(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['Havven'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Only callable by the contract owner. The duration must fall within acceptable bounds (1 day to 26 weeks). Upon resetting this the fee period may roll over if the target duration was shortened sufficiently., Set the targeted fee period duration.<br>
   * Transaction (consumes gas, requires signer)
   * @param duration {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setFeePeriodDuration = async (duration, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFeePeriodDuration(duration, txParams);
  };

  /**
   * Only callable by the contract owner., Set the issuanceRatio for issuance calculations.<br>
   * Transaction (consumes gas, requires signer)
   * @param _issuanceRatio {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setIssuanceRatio = async (_issuanceRatio, txParams) => {
    txParams = txParams || {};
    return await this.contract.setIssuanceRatio(_issuanceRatio, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String
   **/
  this.name = async () => {
    return await this.contract.name();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param spender {String<EthAddress>}
   * @param value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.approve = async (spender, value, txParams) => {
    txParams = txParams || {};
    return await this.contract.approve(spender, value, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.totalIssuanceData = async () => {
    return await this.contract.totalIssuanceData();
  };

  /**
   * Collateral that is not locked and available for issuance.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.unlockedCollateral = async account => {
    return await this.contract.unlockedCollateral(account);
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
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalSupply = async () => {
    return await this.contract.totalSupply();
  };

  /**
   * Issuance is only allowed if the havven price isn't stale and the sender is an issuer., Issue nomins against the sender's havvens.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issueNomins = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueNomins(amount, txParams);
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
   * @returns BigNumber
   **/
  this.priceStalePeriod = async () => {
    return await this.contract.priceStalePeriod();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.feePeriodDuration = async () => {
    return await this.contract.feePeriodDuration();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns boolean
   **/
  this.hasWithdrawnFees = async address => {
    return await this.contract.hasWithdrawnFees(address);
  };

  /**
   * ERC20 transferFrom function.<br>
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param to {String<EthAddress>}
   * @param value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.transferFrom = async (from, to, value, txParams) => {
    txParams = txParams || {};
    return await this.contract.transferFrom(from, to, value, txParams);
  };

  /**
   * The collateral that would be locked by issuance, which can exceed the account's actual collateral.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.issuanceDraft = async account => {
    return await this.contract.issuanceDraft(account);
  };

  /**
   * No max/minimum, as changing it wont influence anything but issuance by the foundation, Set the stale period on the updated havven price.<br>
   * Transaction (consumes gas, requires signer)
   * @param time {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setPriceStalePeriod = async (time, txParams) => {
    txParams = txParams || {};
    return await this.contract.setPriceStalePeriod(time, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.decimals = async () => {
    return await this.contract.decimals();
  };

  /**
   * Burn nomins to clear issued nomins/free havvens.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnNomins = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnNomins(amount, txParams);
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
   * Compute the last period's fee entitlement for the message sender and then deposit it into their nomin account.<br>
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.withdrawFees = async txParams => {
    txParams = txParams || {};
    return await this.contract.withdrawFees(txParams);
  };

  /**
   * Set whether the specified can issue nomins or not.<br>
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param value {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setIssuer = async (account, value, txParams) => {
    txParams = txParams || {};
    return await this.contract.setIssuer(account, value, txParams);
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
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * Only the contract owner may call this., Set the associated Nomin contract to collect fees from.<br>
   * Transaction (consumes gas, requires signer)
   * @param _nomin {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setNomin = async (_nomin, txParams) => {
    txParams = txParams || {};
    return await this.contract.setNomin(_nomin, txParams);
  };

  /**
   * Recompute and return the given account's last average balance.<br>
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.recomputeLastAverageBalance = async (account, txParams) => {
    txParams = txParams || {};
    return await this.contract.recomputeLastAverageBalance(account, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns BigNumber
   **/
  this.nominsIssued = async address => {
    return await this.contract.nominsIssued(address);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.issuanceLastAverageBalance = async account => {
    return await this.contract.issuanceLastAverageBalance(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.balanceOf = async account => {
    return await this.contract.balanceOf(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.feePeriodStartTime = async () => {
    return await this.contract.feePeriodStartTime();
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
   * The maximum nomins an issuer can issue against their total havven quantity. This ignores any already issued nomins.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<EthAddress>}
   * @returns BigNumber
   **/
  this.maxIssuableNomins = async issuer => {
    return await this.contract.maxIssuableNomins(issuer);
  };

  /**
   * Access point for the oracle to update the price of havvens.<br>
   * Transaction (consumes gas, requires signer)
   * @param newPrice {BigNumber}
   * @param timeSent {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.updatePrice = async (newPrice, timeSent, txParams) => {
    txParams = txParams || {};
    return await this.contract.updatePrice(newPrice, timeSent, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns boolean
   **/
  this.isIssuer = async address => {
    return await this.contract.isIssuer(address);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns Object
   **/
  this.issuanceData = async address => {
    return await this.contract.issuanceData(address);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Collateral that has been locked due to issuance, and cannot be transferred to other addresses. This is capped at the account's total collateral.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.lockedCollateral = async account => {
    return await this.contract.lockedCollateral(account);
  };

  /**
   * Check if the fee period has rolled over. If it has, set the new fee period start time, and record the fees collected in the nomin contract.<br>
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.rolloverFeePeriodIfElapsed = async txParams => {
    txParams = txParams || {};
    return await this.contract.rolloverFeePeriodIfElapsed(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalIssuanceLastModified = async () => {
    return await this.contract.totalIssuanceLastModified();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String
   **/
  this.symbol = async () => {
    return await this.contract.symbol();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _proxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setProxy = async (_proxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setProxy(_proxy, txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param _tokenState {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setTokenState = async (_tokenState, txParams) => {
    txParams = txParams || {};
    return await this.contract.setTokenState(_tokenState, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.price = async () => {
    return await this.contract.price();
  };

  /**
   * The value in HAV for a given amount of USD.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param usd_dec {BigNumber}
   * @returns BigNumber
   **/
  this.USDtoHAV = async usd_dec => {
    return await this.contract.USDtoHAV(usd_dec);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY();
  };

  /**
   * The total havvens owned by this account, both escrowed and unescrowed, against which nomins can be issued. This includes those already being used as collateral (locked), and those available for further issuance (unlocked).<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.collateral = async account => {
    return await this.contract.collateral(account);
  };

  /**
   * ERC20 transfer function.<br>
   * Transaction (consumes gas, requires signer)
   * @param to {String<EthAddress>}
   * @param value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.transfer = async (to, value, txParams) => {
    txParams = txParams || {};
    return await this.contract.transfer(to, value, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.issuanceRatio = async () => {
    return await this.contract.issuanceRatio();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param sender {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setMessageSender = async (sender, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMessageSender(sender, txParams);
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
  this.lastFeesCollected = async () => {
    return await this.contract.lastFeesCollected();
  };

  /**
   * Only the contract owner may call this., Set the associated havven escrow contract.<br>
   * Transaction (consumes gas, requires signer)
   * @param _escrow {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setEscrow = async (_escrow, txParams) => {
    txParams = txParams || {};
    return await this.contract.setEscrow(_escrow, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalIssuanceLastAverageBalance = async () => {
    return await this.contract.totalIssuanceLastAverageBalance();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.issuanceCurrentBalanceSum = async account => {
    return await this.contract.issuanceCurrentBalanceSum(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary();
  };

  /**
   * The remaining nomins an issuer can issue against their total havven quantity.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<EthAddress>}
   * @returns BigNumber
   **/
  this.remainingIssuableNomins = async issuer => {
    return await this.contract.remainingIssuableNomins(issuer);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastFeePeriodStartTime = async () => {
    return await this.contract.lastFeePeriodStartTime();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalIssuanceCurrentBalanceSum = async () => {
    return await this.contract.totalIssuanceCurrentBalanceSum();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.issueMaxNomins = async txParams => {
    txParams = txParams || {};
    return await this.contract.issueMaxNomins(txParams);
  };

  /**
   * The value in USD for a given amount of HAV.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param hav_dec {BigNumber}
   * @returns BigNumber
   **/
  this.HAVtoUSD = async hav_dec => {
    return await this.contract.HAVtoUSD(hav_dec);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param owner {String<EthAddress>}
   * @param spender {String<EthAddress>}
   * @returns BigNumber
   **/
  this.allowance = async (owner, spender) => {
    return await this.contract.allowance(owner, spender);
  };

  /**
   * If they have enough available Havvens, it could be that their havvens are escrowed, however the transfer would then fail. This means that escrowed havvens are locked first, and then the actual transferable ones., The number of havvens that are free to be transferred by an account.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.transferableHavvens = async account => {
    return await this.contract.transferableHavvens(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.escrow = async () => {
    return await this.contract.escrow();
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
   * @returns String<EthAddress>
   **/
  this.tokenState = async () => {
    return await this.contract.tokenState();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.proxy = async () => {
    return await this.contract.proxy();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.issuanceLastModified = async account => {
    return await this.contract.issuanceLastModified(account);
  };

  /**
   * Check if the price of havvens hasn't been updated for longer than the stale period.<br>
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.priceIsStale = async () => {
    return await this.contract.priceIsStale();
  };
}

module.exports = Havven;
