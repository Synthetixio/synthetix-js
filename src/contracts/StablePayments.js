import { Contract } from 'ethers';
import abis from '../../lib/abis/index';
import ContractSettings from '../contractSettings';
const abi = abis.StablePayments;

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function StablePayments(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['StablePayments'],
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
   * @param _spender {String<EthAddress>}
   * @param _value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.approve = async (_spender, _value, txParams) => {
    txParams = txParams || {};
    return await this.contract.approve(_spender, _value, txParams);
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
   * @param _from {String<EthAddress>}
   * @param _to {String<EthAddress>}
   * @param _value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.transferFrom = async (_from, _to, _value, txParams) => {
    txParams = txParams || {};
    return await this.contract.transferFrom(_from, _to, _value, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.decimals = async () => {
    return await this.contract.decimals();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _owner {String<EthAddress>}
   * @returns BigNumber
   **/
  this.balanceOf = async _owner => {
    return await this.contract.balanceOf(_owner);
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
   * @param _to {String<EthAddress>}
   * @param _value {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.transfer = async (_to, _value, txParams) => {
    txParams = txParams || {};
    return await this.contract.transfer(_to, _value, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _owner {String<EthAddress>}
   * @param _spender {String<EthAddress>}
   * @returns BigNumber
   **/
  this.allowance = async (_owner, _spender) => {
    return await this.contract.allowance(_owner, _spender);
  };
}

export default StablePayments;
