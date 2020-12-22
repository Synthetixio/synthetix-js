import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan/AddressResolver';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function AddressResolver(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['AddressResolver'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

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
   * @param names {bytes32[]}
   * @param destinations {address[]}
   * @returns boolean
   **/
  this.areAddressesImported = async (names, destinations) => {
    return await this.contract.areAddressesImported(names, destinations);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param name {bytes32}
   * @returns String<EthAddress>
   **/
  this.getAddress = async name => {
    return await this.contract.getAddress(name);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param key {bytes32}
   * @returns String<EthAddress>
   **/
  this.getSynth = async key => {
    return await this.contract.getSynth(key);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param names {bytes32[]}
   * @param destinations {address[]}
   * @param txParams {TxParams}
  
   **/
  this.importAddresses = async (names, destinations, txParams) => {
    txParams = txParams || {};
    return await this.contract.importAddresses(names, destinations, txParams);
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
   * @param destinations {address[]}
   * @param txParams {TxParams}
  
   **/
  this.rebuildCaches = async (destinations, txParams) => {
    txParams = txParams || {};
    return await this.contract.rebuildCaches(destinations, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns String<EthAddress>
   **/
  this.repository = async bytes32_1 => {
    return await this.contract.repository(bytes32_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param name {bytes32}
   * @param reason {String}
   * @returns String<EthAddress>
   **/
  this.requireAndGetAddress = async (name, reason) => {
    return await this.contract.requireAndGetAddress(name, reason);
  };
}

export default AddressResolver;
