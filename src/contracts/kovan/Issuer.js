import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan/Issuer';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Issuer(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['Issuer'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.CIRCUIT_BREAKER_SUSPENSION_REASON = async () => {
    return await this.contract.CIRCUIT_BREAKER_SUSPENSION_REASON();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.CONTRACT_NAME = async () => {
    return await this.contract.CONTRACT_NAME();
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
   * @param synth {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.addSynth = async (synth, txParams) => {
    txParams = txParams || {};
    return await this.contract.addSynth(synth, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param synthsToAdd {address[]}
   * @param txParams {TxParams}
  
   **/
  this.addSynths = async (synthsToAdd, txParams) => {
    txParams = txParams || {};
    return await this.contract.addSynths(synthsToAdd, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.allNetworksDebtInfo = async () => {
    return await this.contract.allNetworksDebtInfo();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.anySynthOrSNXRateIsInvalid = async () => {
    return await this.contract.anySynthOrSNXRateIsInvalid();
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
   * @param  {BigNumber}
   * @returns String<EthAddress>
   **/
  this.availableSynths = async uint256_1 => {
    return await this.contract.availableSynths(uint256_1);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param deprecatedSynthProxy {String<EthAddress>}
   * @param account {String<EthAddress>}
   * @param balance {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnForRedemption = async (deprecatedSynthProxy, account, balance, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnForRedemption(deprecatedSynthProxy, account, balance, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnSynths = async (from, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnSynths(from, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param burnForAddress {String<EthAddress>}
   * @param from {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.burnSynthsOnBehalf = async (burnForAddress, from, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnSynthsOnBehalf(burnForAddress, from, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.burnSynthsToTarget = async (from, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnSynthsToTarget(from, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param burnForAddress {String<EthAddress>}
   * @param from {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.burnSynthsToTargetOnBehalf = async (burnForAddress, from, txParams) => {
    txParams = txParams || {};
    return await this.contract.burnSynthsToTargetOnBehalf(burnForAddress, from, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns boolean
   **/
  this.canBurnSynths = async account => {
    return await this.contract.canBurnSynths(account);
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
   * @param _issuer {String<EthAddress>}
   * @returns Object
   **/
  this.collateralisationRatioAndAnyRatesInvalid = async _issuer => {
    return await this.contract.collateralisationRatioAndAnyRatesInvalid(_issuer);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _issuer {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.debtBalanceOf = async (_issuer, currencyKey) => {
    return await this.contract.debtBalanceOf(_issuer, currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKeys {bytes32[]}
   * @returns address[]
   **/
  this.getSynths = async currencyKeys => {
    return await this.contract.getSynths(currencyKeys);
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
   * @returns BigNumber
   **/
  this.issuanceRatio = async () => {
    return await this.contract.issuanceRatio();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.issueMaxSynths = async (from, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueMaxSynths(from, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param issueForAddress {String<EthAddress>}
   * @param from {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.issueMaxSynthsOnBehalf = async (issueForAddress, from, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueMaxSynthsOnBehalf(issueForAddress, from, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issueSynths = async (from, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueSynths(from, amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param issueForAddress {String<EthAddress>}
   * @param from {String<EthAddress>}
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.issueSynthsOnBehalf = async (issueForAddress, from, amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.issueSynthsOnBehalf(issueForAddress, from, amount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastDebtRatio = async () => {
    return await this.contract.lastDebtRatio();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns BigNumber
   **/
  this.lastIssueEvent = async account => {
    return await this.contract.lastIssueEvent(account);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param susdAmount {BigNumber}
   * @param liquidator {String<EthAddress>}
   * @param txParams {TxParams}
   * @returns Object
   **/
  this.liquidateDelinquentAccount = async (account, susdAmount, liquidator, txParams) => {
    txParams = txParams || {};
    return await this.contract.liquidateDelinquentAccount(
      account,
      susdAmount,
      liquidator,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _issuer {String<EthAddress>}
   * @returns BigNumber
   **/
  this.maxIssuableSynths = async _issuer => {
    return await this.contract.maxIssuableSynths(_issuer);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.minimumStakeTime = async () => {
    return await this.contract.minimumStakeTime();
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
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.rebuildCache = async txParams => {
    txParams = txParams || {};
    return await this.contract.rebuildCache(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _issuer {String<EthAddress>}
   * @returns Object
   **/
  this.remainingIssuableSynths = async _issuer => {
    return await this.contract.remainingIssuableSynths(_issuer);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKey {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.removeSynth = async (currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeSynth(currencyKey, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param currencyKeys {bytes32[]}
   * @param txParams {TxParams}
  
   **/
  this.removeSynths = async (currencyKeys, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeSynths(currencyKeys, txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param periodId {uint128}
   * @param txParams {TxParams}
  
   **/
  this.setCurrentPeriodId = async (periodId, txParams) => {
    txParams = txParams || {};
    return await this.contract.setCurrentPeriodId(periodId, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param ratio {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setLastDebtRatio = async (ratio, txParams) => {
    txParams = txParams || {};
    return await this.contract.setLastDebtRatio(ratio, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns String<EthAddress>
   **/
  this.synths = async bytes32_1 => {
    return await this.contract.synths(bytes32_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns bytes32
   **/
  this.synthsByAddress = async address_1 => {
    return await this.contract.synthsByAddress(address_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @param excludeOtherCollateral {boolean}
   * @returns BigNumber
   **/
  this.totalIssuedSynths = async (currencyKey, excludeOtherCollateral) => {
    return await this.contract.totalIssuedSynths(currencyKey, excludeOtherCollateral);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param balance {BigNumber}
   * @returns Object
   **/
  this.transferableSynthetixAndAnyRateIsInvalid = async (account, balance) => {
    return await this.contract.transferableSynthetixAndAnyRateIsInvalid(account, balance);
  };
}

export default Issuer;
