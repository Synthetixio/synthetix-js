import { Contract } from 'ethers';
import abis from '../../lib/abis/index';
import ContractSettings from '../contractSettings';
const abi = abis.SynthetixState;

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function SynthetixState(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['SynthetixState'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns BigNumber
   **/
  this.debtLedger = async uint256 => {
    return await this.contract.debtLedger(uint256);
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
   * @param _associatedContract {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setAssociatedContract = async (_associatedContract, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAssociatedContract(_associatedContract, txParams);
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
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    return await this.contract.acceptOwnership(txParams);
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
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalIssuerCount = async () => {
    return await this.contract.totalIssuerCount();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.associatedContract = async () => {
    return await this.contract.associatedContract();
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
   * @param  {String<EthAddress>}
   * @returns bytes4
   **/
  this.preferredCurrency = async address => {
    return await this.contract.preferredCurrency(address);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param initialDebtOwnership {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setCurrentIssuanceData = async (account, initialDebtOwnership, txParams) => {
    txParams = txParams || {};
    return await this.contract.setCurrentIssuanceData(account, initialDebtOwnership, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.clearIssuanceData = async (account, txParams) => {
    txParams = txParams || {};
    return await this.contract.clearIssuanceData(account, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.incrementTotalIssuerCount = async txParams => {
    txParams = txParams || {};
    return await this.contract.incrementTotalIssuerCount(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.decrementTotalIssuerCount = async txParams => {
    txParams = txParams || {};
    return await this.contract.decrementTotalIssuerCount(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param value {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.appendDebtLedgerValue = async (value, txParams) => {
    txParams = txParams || {};
    return await this.contract.appendDebtLedgerValue(value, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes4}
   * @param txParams {TxParams}
  
   **/
  this.setPreferredCurrency = async (account, currencyKey, txParams) => {
    txParams = txParams || {};
    return await this.contract.setPreferredCurrency(account, currencyKey, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _issuanceRatio {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setIssuanceRatio = async (_issuanceRatio, txParams) => {
    txParams = txParams || {};
    return await this.contract.setIssuanceRatio(_issuanceRatio, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param accounts {address[]}
   * @param sUSDAmounts {uint256[]}
   * @param txParams {TxParams}
  
   **/
  this.importIssuerData = async (accounts, sUSDAmounts, txParams) => {
    txParams = txParams || {};
    return await this.contract.importIssuerData(accounts, sUSDAmounts, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.debtLedgerLength = async () => {
    return await this.contract.debtLedgerLength();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastDebtLedgerEntry = async () => {
    return await this.contract.lastDebtLedgerEntry();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns boolean
   **/
  this.hasIssued = async account => {
    return await this.contract.hasIssued(account);
  };
}

export default SynthetixState;
