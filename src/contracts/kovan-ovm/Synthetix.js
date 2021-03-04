import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan-ovm/MintableSynthetix';

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
   * @param account {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnSecondary = async (account, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnSecondary(account, amount, txParams);
  };

  /**
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
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.collateral = async account => {
    return await this.contract.collateral(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _issuer {String<EthAddress>}
   * @returns BigNumber
   **/
  this.collateralisationRatio = async _issuer => {
    return await this.contract.collateralisationRatio(_issuer);
  };

  /**
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
   * @param  {bytes32}
   * @param  {BigNumber}
   * @param  {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchange = async (bytes32_1, uint256_1, bytes32_2, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchange(bytes32_1, uint256_1, bytes32_2, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param  {String<EthAddress>}
   * @param  {bytes32}
   * @param  {BigNumber}
   * @param  {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeOnBehalf = async (address_1, bytes32_1, uint256_1, bytes32_2, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangeOnBehalf(
      address_1,
      bytes32_1,
      uint256_1,
      bytes32_2,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param  {String<EthAddress>}
   * @param  {bytes32}
   * @param  {BigNumber}
   * @param  {bytes32}
   * @param  {String<EthAddress>}
   * @param  {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeOnBehalfWithTracking = async (
    address_1,
    bytes32_1,
    uint256_1,
    bytes32_2,
    address_2,
    bytes32_3,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeOnBehalfWithTracking(
      address_1,
      bytes32_1,
      uint256_1,
      bytes32_2,
      address_2,
      bytes32_3,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param  {bytes32}
   * @param  {BigNumber}
   * @param  {bytes32}
   * @param  {String<EthAddress>}
   * @param  {bytes32}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeWithTracking = async (
    bytes32_1,
    uint256_1,
    bytes32_2,
    address_1,
    bytes32_3,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeWithTracking(
      bytes32_1,
      uint256_1,
      bytes32_2,
      address_1,
      bytes32_3,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param  {bytes32}
   * @param  {BigNumber}
   * @param  {bytes32}
   * @param  {bytes32}
   * @param txParams {TxParams}
   * @returns Object
   **/
  this.exchangeWithVirtual = async (bytes32_1, uint256_1, bytes32_2, bytes32_3, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangeWithVirtual(
      bytes32_1,
      uint256_1,
      bytes32_2,
      bytes32_3,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.integrationProxy = async () => {
    return await this.contract.integrationProxy();
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
   * @param  {String<EthAddress>}
   * @param  {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.liquidateDelinquentAccount = async (address_1, uint256_1, txParams) => {
    txParams = txParams || {};
    return await this.contract.liquidateDelinquentAccount(address_1, uint256_1, txParams);
  };

  /**
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
   * @returns boolean
   **/
  this.mint = async txParams => {
    txParams = txParams || {};
    return await this.contract.mint(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.mintSecondary = async (account, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.mintSecondary(account, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.mintSecondaryRewards = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.mintSecondaryRewards(amount, txParams);
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
   * @param _integrationProxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setIntegrationProxy = async (_integrationProxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setIntegrationProxy(_integrationProxy, txParams);
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
   * @param  {bytes32}
   * @param txParams {TxParams}
   * @returns Object
   **/
  this.settle = async (bytes32_1, txParams) => {
    txParams = txParams || {};
    return await this.contract.settle(bytes32_1, txParams);
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
  this.totalIssuedSynthsExcludeEtherCollateral = async currencyKey => {
    return await this.contract.totalIssuedSynthsExcludeEtherCollateral(currencyKey);
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
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.transferableSynthetix = async account => {
    return await this.contract.transferableSynthetix(account);
  };
}

export default Synthetix;
