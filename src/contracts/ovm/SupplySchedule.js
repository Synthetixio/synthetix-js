import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/ovm/SupplySchedule';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function SupplySchedule(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['SupplySchedule'],
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
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.DECAY_RATE = async () => {
    return await this.contract.DECAY_RATE();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_MINTER_REWARD = async () => {
    return await this.contract.MAX_MINTER_REWARD();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.SUPPLY_DECAY_START = async () => {
    return await this.contract.SUPPLY_DECAY_START();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.TERMINAL_SUPPLY_RATE_ANNUAL = async () => {
    return await this.contract.TERMINAL_SUPPLY_RATE_ANNUAL();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MINT_BUFFER = async () => {
    return await this.contract.MINT_BUFFER();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.isMintable = async () => {
    return await this.contract.isMintable();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}

   **/
  this.setMinterReward = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMinterReward(amount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param counter {BigNumber}
   * @returns BigNumber
   **/
  this.tokenDecaySupplyForWeek = async counter => {
    return await this.contract.tokenDecaySupplyForWeek(counter);
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
   * @returns Number
   **/
  this.SUPPLY_DECAY_END = async () => {
    return await this.contract.SUPPLY_DECAY_END();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.INFLATION_START_DATE = async () => {
    return await this.contract.INFLATION_START_DATE();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param supplyMinted {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.recordMintEvent = async (supplyMinted, txParams) => {
    txParams = txParams || {};
    return await this.contract.recordMintEvent(supplyMinted, txParams);
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
   * @param _synthetixProxy {String<EthAddress>}
   * @param txParams {TxParams}

   **/
  this.setSynthetixProxy = async (_synthetixProxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setSynthetixProxy(_synthetixProxy, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.minterReward = async () => {
    return await this.contract.minterReward();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param totalSupply {BigNumber}
   * @param numOfWeeks {BigNumber}
   * @returns BigNumber
   **/
  this.terminalInflationSupply = async (totalSupply, numOfWeeks) => {
    return await this.contract.terminalInflationSupply(totalSupply, numOfWeeks);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.INITIAL_WEEKLY_SUPPLY = async () => {
    return await this.contract.INITIAL_WEEKLY_SUPPLY();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.synthetixProxy = async () => {
    return await this.contract.synthetixProxy();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastMintEvent = async () => {
    return await this.contract.lastMintEvent();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.mintableSupply = async () => {
    return await this.contract.mintableSupply();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.weekCounter = async () => {
    return await this.contract.weekCounter();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.weeksSinceLastIssuance = async () => {
    return await this.contract.weeksSinceLastIssuance();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MINT_PERIOD_DURATION = async () => {
    return await this.contract.MINT_PERIOD_DURATION();
  };
}

export default SupplySchedule;
