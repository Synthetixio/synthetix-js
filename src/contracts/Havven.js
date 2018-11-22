import { Contract } from 'ethers';
import abis from '../../lib/abis/index';
import ContractSettings from '../contractSettings';
const abi = abis.Havven;

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Havven(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['HavvenProxy'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

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
   * @returns String<EthAddress>
   **/
  this.exchangeRates = async () => {
    return await this.contract.exchangeRates();
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
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.balanceOf = async account => {
    return await this.contract.balanceOf(account);
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
   * @returns String<EthAddress>
   **/
  this.havvenState = async () => {
    return await this.contract.havvenState();
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
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.feePool = async () => {
    return await this.contract.feePool();
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
   * @returns String<EthAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary();
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
   * @param  {BigNumber}
   * @returns String<EthAddress>
   **/
  this.availableNomins = async uint256 => {
    return await this.contract.availableNomins(uint256);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes4}
   * @returns String<EthAddress>
   **/
  this.nomins = async bytes4 => {
    return await this.contract.nomins(bytes4);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param nomin {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.addNomin = async (nomin, txParams) => {
    txParams = txParams || {};
    return await this.contract.addNomin(nomin, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes4}
   * @param txParams {TxParams}
  
   **/
  this.removeNomin = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeNomin(currencyKey, txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param _exchangeRates {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setExchangeRates = async (_exchangeRates, txParams) => {
    txParams = txParams || {};
    return await this.contract.setExchangeRates(_exchangeRates, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _havvenState {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.sethavvenState = async (_havvenState, txParams) => {
    txParams = txParams || {};
    return await this.contract.sethavvenState(_havvenState, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes4}
   * @param txParams {TxParams}
  
   **/
  this.setPreferredCurrency = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.setPreferredCurrency(currencyKey, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param sourceCurrencyKey {bytes4}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes4}
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
   * @param currencyKey {bytes4}
   * @returns BigNumber
   **/
  this.totalIssuedNomins = async currencyKey => {
    return await this.contract.totalIssuedNomins(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.availableNominCount = async () => {
    return await this.contract.availableNominCount();
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
   * ERC20 transfer function.<br>
   * Transaction (consumes gas, requires signer)
   * @param to {String<EthAddress>}
   * @param value {BigNumber}
   * @param data {bytes}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.transfer = async (to, value, data, txParams) => {
    txParams = txParams || {};
    return await this.contract.transfer(to, value, data, txParams);
  };

  /**
   * ERC20 transferFrom function.<br>
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param to {String<EthAddress>}
   * @param value {BigNumber}
   * @param data {bytes}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.transferFrom = async (from, to, value, data, txParams) => {
    txParams = txParams || {};
    return await this.contract.transferFrom(from, to, value, data, txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param sourceCurrencyKey {bytes4}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes4}
   * @param destinationAddress {String<EthAddress>}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.exchange = async (
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    destinationAddress,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchange(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      destinationAddress,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param sourceCurrencyKey {bytes4}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes4}
   * @param destinationAddress {String<EthAddress>}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.nominInitiatedExchange = async (
    from,
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    destinationAddress,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.nominInitiatedExchange(
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
   * @param from {String<EthAddress>}
   * @param sourceCurrencyKey {bytes4}
   * @param sourceAmount {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.nominInitiatedFeePayment = async (from, sourceCurrencyKey, sourceAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.nominInitiatedFeePayment(
      from,
      sourceCurrencyKey,
      sourceAmount,
      txParams
    );
  };

  /**
   * Issuance is only allowed if the havven price isn't stale and the sender is an issuer., Issue nomins against the sender's havvens.<br>
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes4}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issueNomins = async (currencyKey, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueNomins(currencyKey, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes4}
   * @param txParams {TxParams}
  
   **/
  this.issueMaxNomins = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueMaxNomins(currencyKey, txParams);
  };

  /**
   * Burn nomins to clear issued nomins/free havvens.<br>
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes4}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnNomins = async (currencyKey, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnNomins(currencyKey, amount, txParams);
  };

  /**
   * The maximum nomins an issuer can issue against their total havven quantity. This ignores any already issued nomins.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<EthAddress>}
   * @param currencyKey {bytes4}
   * @returns BigNumber
   **/
  this.maxIssuableNomins = async (issuer, currencyKey) => {
    return await this.contract.maxIssuableNomins(issuer, currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<EthAddress>}
   * @returns BigNumber
   **/
  this.collateralisationRatio = async issuer => {
    return await this.contract.collateralisationRatio(issuer);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<EthAddress>}
   * @param currencyKey {bytes4}
   * @returns BigNumber
   **/
  this.debtBalanceOf = async (issuer, currencyKey) => {
    return await this.contract.debtBalanceOf(issuer, currencyKey);
  };

  /**
   * The remaining nomins an issuer can issue against their total havven quantity.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<EthAddress>}
   * @param currencyKey {bytes4}
   * @returns BigNumber
   **/
  this.remainingIssuableNomins = async (issuer, currencyKey) => {
    return await this.contract.remainingIssuableNomins(issuer, currencyKey);
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
   * If they have enough available Havvens, it could be that their havvens are escrowed, however the transfer would then fail. This means that escrowed havvens are locked first, and then the actual transferable ones., The number of havvens that are free to be transferred by an account.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.transferableHavvens = async account => {
    return await this.contract.transferableHavvens(account);
  };
}

export default Havven;
