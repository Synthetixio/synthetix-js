import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/mainnet/DelegateApprovals';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function DelegateApprovals(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['DelegateApprovals'],
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
   * @param authoriser {String<EthAddress>}
   * @param delegate {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.withdrawApproval = async (authoriser, delegate, txParams) => {
    txParams = txParams || {};
    return await this.contract.withdrawApproval(authoriser, delegate, txParams);
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
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.associatedContract = async () => {
    return await this.contract.associatedContract();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param authoriser {String<EthAddress>}
   * @param delegate {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setApproval = async (authoriser, delegate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setApproval(authoriser, delegate, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @param  {String<EthAddress>}
   * @returns boolean
   **/
  this.approval = async (address_1, address_2) => {
    return await this.contract.approval(address_1, address_2);
  };
}

export default DelegateApprovals;
