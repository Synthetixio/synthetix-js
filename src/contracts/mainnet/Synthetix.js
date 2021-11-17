import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/mainnet/Synthetix';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Synthetix(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['ProxyERC20'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.CONTRACT_NAME = async () => {
    return await this.contract.CONTRACT_NAME();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.DECIMALS = async () => {
    return await this.contract.DECIMALS();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String
   **/
  this.TOKEN_NAME = async () => {
    return await this.contract.TOKEN_NAME();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String
   **/
  this.TOKEN_SYMBOL = async () => {
    return await this.contract.TOKEN_SYMBOL();
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
   * @param owner {String<EthAddress>}
   * @param spender {String<EthAddress>}
   * @returns BigNumber
   **/
  this.allowance = async (owner, spender) => {
    return await this.contract.allowance(owner, spender);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.anySynthOrSNXRateIsInvalid = async () => {
    return await this.contract.anySynthOrSNXRateIsInvalid();
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
   * @returns bytes32[]
   **/
  this.availableCurrencyKeys = async () => {
    return await this.contract.availableCurrencyKeys();
  };

  /**
   * Returns the count of available synths in the system, which you can use to iterate availableSynths.<br>
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.availableSynthCount = async () => {
    return await this.contract.availableSynthCount();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param index {BigNumber}
   * @returns String<EthAddress>
   **/
  this.availableSynths = async index => {
    return await this.contract.availableSynths(index);
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
   * @param  {String<EthAddress>}
   * @param  {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnSecondary = async (address_1, uint256_1, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnSecondary(address_1, uint256_1, txParams);
  };

  /**
   * Burn synths to clear issued synths/free SNX.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnSynths = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnSynths(amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param burnForAddress {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnSynthsOnBehalf = async (burnForAddress, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnSynthsOnBehalf(burnForAddress, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.burnSynthsToTarget = async txParams => {
    txParams = txParams || {};
    return await this.contract.burnSynthsToTarget(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param burnForAddress {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.burnSynthsToTargetOnBehalf = async (burnForAddress, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnSynthsToTargetOnBehalf(burnForAddress, txParams);
  };

  /**
   * The total SNX owned by this account, both escrowed and unescrowed, against which synths can be issued. This includes those already being used as collateral (locked), and those available for further issuance (unlocked).<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.collateral = async account => {
    return await this.contract.collateral(account);
  };

  /**
   * The current collateralisation ratio for a user. Collateralisation ratio varies over time as the value of the underlying Synthetix asset changes, e.g. if a user issues their maximum available synths when they hold $10 worth of Synthetix, they will have issued $2 worth of synths. If the value of Synthetix changes, the ratio returned by this function will adjust accordlingly. Users are incentivised to maintain a collateralisation ratio as close to the issuance ratio as possible by altering the amount of fees they're able to claim from the system.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param _issuer {String<EthAddress>}
   * @returns BigNumber
   **/
  this.collateralisationRatio = async _issuer => {
    return await this.contract.collateralisationRatio(_issuer);
  };

  /**
   * If a user issues synths backed by SNX in their wallet, the SNX become locked. This function will tell you how many synths a user has to give back to the system in order to unlock their original debt position. This is priced in whichever synth is passed in as a currency key, e.g. you can price the debt in sUSD, XDR, or any other synth you wish.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.debtBalanceOf = async (account, currencyKey) => {
    return await this.contract.debtBalanceOf(account, currencyKey);
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
   * @param account {String<EthAddress>}
   * @param fromCurrencyKey {bytes32}
   * @param fromAmount {BigNumber}
   * @param toCurrencyKey {bytes32}
   * @param toAmount {BigNumber}
   * @param toAddress {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.emitAtomicSynthExchange = async (
    account,
    fromCurrencyKey,
    fromAmount,
    toCurrencyKey,
    toAmount,
    toAddress,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.emitAtomicSynthExchange(
      account,
      fromCurrencyKey,
      fromAmount,
      toCurrencyKey,
      toAmount,
      toAddress,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.emitExchangeRebate = async (account, currencyKey, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.emitExchangeRebate(account, currencyKey, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.emitExchangeReclaim = async (account, currencyKey, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.emitExchangeReclaim(account, currencyKey, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param trackingCode {bytes32}
   * @param toCurrencyKey {bytes32}
   * @param toAmount {BigNumber}
   * @param fee {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.emitExchangeTracking = async (trackingCode, toCurrencyKey, toAmount, fee, txParams) => {
    txParams = txParams || {};
    return await this.contract.emitExchangeTracking(
      trackingCode,
      toCurrencyKey,
      toAmount,
      fee,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param fromCurrencyKey {bytes32}
   * @param fromAmount {BigNumber}
   * @param toCurrencyKey {bytes32}
   * @param toAmount {BigNumber}
   * @param toAddress {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.emitSynthExchange = async (
    account,
    fromCurrencyKey,
    fromAmount,
    toCurrencyKey,
    toAmount,
    toAddress,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.emitSynthExchange(
      account,
      fromCurrencyKey,
      fromAmount,
      toCurrencyKey,
      toAmount,
      toAddress,
      txParams
    );
  };

  /**
   * Function that allows you to exchange synths you hold in one flavour for another.<br>
   * Transaction (consumes gas, requires signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchange = async (sourceCurrencyKey, sourceAmount, destinationCurrencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchange(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param trackingCode {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeAtomically = async (
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    trackingCode,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeAtomically(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      trackingCode,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param exchangeForAddress {String<EthAddress>}
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeOnBehalf = async (
    exchangeForAddress,
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeOnBehalf(
      exchangeForAddress,
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param exchangeForAddress {String<EthAddress>}
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param rewardAddress {String<EthAddress>}
   * @param trackingCode {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeOnBehalfWithTracking = async (
    exchangeForAddress,
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    rewardAddress,
    trackingCode,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeOnBehalfWithTracking(
      exchangeForAddress,
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      rewardAddress,
      trackingCode,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param rewardAddress {String<EthAddress>}
   * @param trackingCode {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeWithTracking = async (
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    rewardAddress,
    trackingCode,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeWithTracking(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      rewardAddress,
      trackingCode,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param rewardAddress {String<EthAddress>}
   * @param trackingCode {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeWithTrackingForInitiator = async (
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    rewardAddress,
    trackingCode,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeWithTrackingForInitiator(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      rewardAddress,
      trackingCode,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param trackingCode {bytes32}
   * @param txParams {TxParams}
   * @returns Object
   **/
  this.exchangeWithVirtual = async (
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    trackingCode,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeWithVirtual(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      trackingCode,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.isResolverCached = async () => {
    return await this.contract.isResolverCached();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns boolean
   **/
  this.isWaitingPeriod = async currencyKey => {
    return await this.contract.isWaitingPeriod(currencyKey);
  };

  /**
   * Issuance is only allowed if the synthetix price isn't stale., Issue the maximum amount of Synths possible against the sender's SNX.<br>
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.issueMaxSynths = async txParams => {
    txParams = txParams || {};
    return await this.contract.issueMaxSynths(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param issueForAddress {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.issueMaxSynthsOnBehalf = async (issueForAddress, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueMaxSynthsOnBehalf(issueForAddress, txParams);
  };

  /**
   * Issuance is only allowed if the synthetix price isn't stale. Amount should be larger than 0., Issue synths against the sender's SNX.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issueSynths = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueSynths(amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param issueForAddress {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issueSynthsOnBehalf = async (issueForAddress, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueSynthsOnBehalf(issueForAddress, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param susdAmount {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.liquidateDelinquentAccount = async (account, susdAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.liquidateDelinquentAccount(account, susdAmount, txParams);
  };

  /**
   * The maximum synths an issuer can issue against their total synthetix quantity, priced in XDRs. This ignores any already issued synths, and is purely giving you the maximimum amount the user can issue.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.maxIssuableSynths = async account => {
    return await this.contract.maxIssuableSynths(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.messageSender = async () => {
    return await this.contract.messageSender();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.migrateEscrowBalanceToRewardEscrowV2 = async txParams => {
    txParams = txParams || {};
    return await this.contract.migrateEscrowBalanceToRewardEscrowV2(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.mint = async txParams => {
    txParams = txParams || {};
    return await this.contract.mint(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param  {String<EthAddress>}
   * @param  {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.mintSecondary = async (address_1, uint256_1, txParams) => {
    txParams = txParams || {};
    return await this.contract.mintSecondary(address_1, uint256_1, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param  {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.mintSecondaryRewards = async (uint256_1, txParams) => {
    txParams = txParams || {};
    return await this.contract.mintSecondaryRewards(uint256_1, txParams);
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
   * @param _owner {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.nominateNewOwner = async (_owner, txParams) => {
    txParams = txParams || {};
    return await this.contract.nominateNewOwner(_owner, txParams);
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
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.proxy = async () => {
    return await this.contract.proxy();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.rebuildCache = async txParams => {
    txParams = txParams || {};
    return await this.contract.rebuildCache(txParams);
  };

  /**
   * The remaining synths an issuer can issue against their total synthetix balance.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns Object
   **/
  this.remainingIssuableSynths = async account => {
    return await this.contract.remainingIssuableSynths(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.resolver = async () => {
    return await this.contract.resolver();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[]
   **/
  this.resolverAddressesRequired = async () => {
    return await this.contract.resolverAddressesRequired();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.sUSD = async () => {
    return await this.contract.sUSD();
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
   * @param _proxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setProxy = async (_proxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setProxy(_proxy, txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
   * @returns Object
   **/
  this.settle = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.settle(currencyKey, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String
   **/
  this.symbol = async () => {
    return await this.contract.symbol();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns String<EthAddress>
   **/
  this.synths = async currencyKey => {
    return await this.contract.synths(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param synthAddress {String<EthAddress>}
   * @returns bytes32
   **/
  this.synthsByAddress = async synthAddress => {
    return await this.contract.synthsByAddress(synthAddress);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.tokenState = async () => {
    return await this.contract.tokenState();
  };

  /**
   * Total amount of synths issued by the system, priced in currencyKey.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.totalIssuedSynths = async currencyKey => {
    return await this.contract.totalIssuedSynths(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.totalIssuedSynthsExcludeOtherCollateral = async currencyKey => {
    return await this.contract.totalIssuedSynthsExcludeOtherCollateral(currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalSupply = async () => {
    return await this.contract.totalSupply();
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
   * When issuing, escrowed SNX are locked first, then non-escrowed SNX are locked last, but escrowed SNX are not transferable, so they are not included in this calculation., The number of SNX that are free to be transferred by an account.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.transferableSynthetix = async account => {
    return await this.contract.transferableSynthetix(account);
  };
}

export default Synthetix;
