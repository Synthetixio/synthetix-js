import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan/EtherCollateral';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function EtherCollateral(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['EtherCollateral'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_ADDRESSES_FROM_RESOLVER = async () => {
    return await this.contract.MAX_ADDRESSES_FROM_RESOLVER();
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
   * @returns BigNumber
   **/
  this.accountLoanLimit = async () => {
    return await this.contract.accountLoanLimit();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns BigNumber
   **/
  this.accountOpenLoanCounter = async address_1 => {
    return await this.contract.accountOpenLoanCounter(address_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @param  {BigNumber}
   * @returns Object
   **/
  this.accountsSynthLoans = async (address_1, uint256_1) => {
    return await this.contract.accountsSynthLoans(address_1, uint256_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _loanAmount {BigNumber}
   * @param _seconds {BigNumber}
   * @returns BigNumber
   **/
  this.accruedInterestOnLoan = async (_loanAmount, _seconds) => {
    return await this.contract.accruedInterestOnLoan(_loanAmount, _seconds);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _account {String<EthAddress>}
   * @param _loanID {BigNumber}
   * @returns BigNumber
   **/
  this.calculateMintingFee = async (_account, _loanID) => {
    return await this.contract.calculateMintingFee(_account, _loanID);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param loanID {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.closeLoan = async (loanID, txParams) => {
    txParams = txParams || {};
    return await this.contract.closeLoan(loanID, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param loanAmount {BigNumber}
   * @returns BigNumber
   **/
  this.collateralAmountForLoan = async loanAmount => {
    return await this.contract.collateralAmountForLoan(loanAmount);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.collateralizationRatio = async () => {
    return await this.contract.collateralizationRatio();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _account {String<EthAddress>}
   * @param _loanID {BigNumber}
   * @returns BigNumber
   **/
  this.currentInterestOnLoan = async (_account, _loanID) => {
    return await this.contract.currentInterestOnLoan(_account, _loanID);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.getContractInfo = async () => {
    return await this.contract.getContractInfo();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _account {String<EthAddress>}
   * @param _loanID {BigNumber}
   * @returns Object
   **/
  this.getLoan = async (_account, _loanID) => {
    return await this.contract.getLoan(_account, _loanID);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[24]
   **/
  this.getResolverAddressesRequired = async () => {
    return await this.contract.getResolverAddressesRequired();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.interestPerSecond = async () => {
    return await this.contract.interestPerSecond();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.interestRate = async () => {
    return await this.contract.interestRate();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _resolver {String<EthAddress>}
   * @returns boolean
   **/
  this.isResolverCached = async _resolver => {
    return await this.contract.isResolverCached(_resolver);
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
   * @returns BigNumber
   **/
  this.issueFeeRate = async () => {
    return await this.contract.issueFeeRate();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.issueLimit = async () => {
    return await this.contract.issueLimit();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastPauseTime = async () => {
    return await this.contract.lastPauseTime();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _loanCreatorsAddress {String<EthAddress>}
   * @param _loanID {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.liquidateUnclosedLoan = async (_loanCreatorsAddress, _loanID, txParams) => {
    txParams = txParams || {};
    return await this.contract.liquidateUnclosedLoan(_loanCreatorsAddress, _loanID, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.liquidationDeadline = async () => {
    return await this.contract.liquidationDeadline();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param collateralAmount {BigNumber}
   * @returns BigNumber
   **/
  this.loanAmountFromCollateral = async collateralAmount => {
    return await this.contract.loanAmountFromCollateral(collateralAmount);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _account {String<EthAddress>}
   * @param _loanID {BigNumber}
   * @returns BigNumber
   **/
  this.loanLifeSpan = async (_account, _loanID) => {
    return await this.contract.loanLifeSpan(_account, _loanID);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.loanLiquidationOpen = async () => {
    return await this.contract.loanLiquidationOpen();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.minLoanSize = async () => {
    return await this.contract.minLoanSize();
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
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.openLoan = async txParams => {
    txParams = txParams || {};
    return await this.contract.openLoan(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _account {String<EthAddress>}
   * @returns uint256[]
   **/
  this.openLoanIDsByAccount = async _account => {
    return await this.contract.openLoanIDsByAccount(_account);
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
   * @returns boolean
   **/
  this.paused = async () => {
    return await this.contract.paused();
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
   * @param  {BigNumber}
   * @returns bytes32
   **/
  this.resolverAddressesRequired = async uint256_1 => {
    return await this.contract.resolverAddressesRequired(uint256_1);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _loanLimit {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setAccountLoanLimit = async (_loanLimit, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAccountLoanLimit(_loanLimit, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param ratio {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setCollateralizationRatio = async (ratio, txParams) => {
    txParams = txParams || {};
    return await this.contract.setCollateralizationRatio(ratio, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _interestRate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setInterestRate = async (_interestRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setInterestRate(_interestRate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _issueFeeRate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setIssueFeeRate = async (_issueFeeRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setIssueFeeRate(_issueFeeRate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _issueLimit {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setIssueLimit = async (_issueLimit, txParams) => {
    txParams = txParams || {};
    return await this.contract.setIssueLimit(_issueLimit, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _loanLiquidationOpen {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setLoanLiquidationOpen = async (_loanLiquidationOpen, txParams) => {
    txParams = txParams || {};
    return await this.contract.setLoanLiquidationOpen(_loanLiquidationOpen, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _minLoanSize {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMinLoanSize = async (_minLoanSize, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMinLoanSize(_minLoanSize, txParams);
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
   * Transaction (consumes gas, requires signer)
   * @param _resolver {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setResolverAndSyncCache = async (_resolver, txParams) => {
    txParams = txParams || {};
    return await this.contract.setResolverAndSyncCache(_resolver, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalIssuedSynths = async () => {
    return await this.contract.totalIssuedSynths();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalLoansCreated = async () => {
    return await this.contract.totalLoansCreated();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalOpenLoanCount = async () => {
    return await this.contract.totalOpenLoanCount();
  };
}

export default EtherCollateral;
