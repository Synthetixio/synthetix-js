import { Contract } from 'ethers';
import abis from '../../lib/abis/index';
import ContractSettings from '../contractSettings';
const abi = abis.Depot;

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Depot(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['Depot'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.minimumDepositAmount = async () => {
    return await this.contract.minimumDepositAmount();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.synth = async () => {
    return await this.contract.synth();
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
   * @param _paused {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setPaused = async (_paused, txParams) => {
    txParams = txParams || {};
    return await this.contract.setPaused(_paused, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime();
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
   * @returns String<EthAddress>
   **/
  this.fundsWallet = async () => {
    return await this.contract.fundsWallet();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.priceStalePeriod = async () => {
    return await this.contract.priceStalePeriod();
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
   * @returns BigNumber
   **/
  this.lastPriceUpdateTime = async () => {
    return await this.contract.lastPriceUpdateTime();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalSellableDeposits = async () => {
    return await this.contract.totalSellableDeposits();
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
   * @returns boolean
   **/
  this.paused = async () => {
    return await this.contract.paused();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.depositStartIndex = async () => {
    return await this.contract.depositStartIndex();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.synthetix = async () => {
    return await this.contract.synthetix();
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
  this.oracle = async () => {
    return await this.contract.oracle();
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
  this.lastPauseTime = async () => {
    return await this.contract.lastPauseTime();
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
   * @param  {BigNumber}
   * @returns Object
   **/
  this.deposits = async uint256 => {
    return await this.contract.deposits(uint256);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.usdToEthPrice = async () => {
    return await this.contract.usdToEthPrice();
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
   * @param  {String<EthAddress>}
   * @returns BigNumber
   **/
  this.smallDeposits = async address => {
    return await this.contract.smallDeposits(address);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.usdToSnxPrice = async () => {
    return await this.contract.usdToSnxPrice();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.ORACLE_FUTURE_LIMIT = async () => {
    return await this.contract.ORACLE_FUTURE_LIMIT();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.depositEndIndex = async () => {
    return await this.contract.depositEndIndex();
  };

  /**
   * Set the funds wallet where ETH raised is held.<br>
   * Transaction (consumes gas, requires signer)
   * @param _fundsWallet {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFundsWallet = async (_fundsWallet, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFundsWallet(_fundsWallet, txParams);
  };

  /**
   * Set the Oracle that pushes the synthetix price to this contract.<br>
   * Transaction (consumes gas, requires signer)
   * @param _oracle {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setOracle = async (_oracle, txParams) => {
    txParams = txParams || {};
    return await this.contract.setOracle(_oracle, txParams);
  };

  /**
   * Set the Synth contract that the issuance controller uses to issue Synths.<br>
   * Transaction (consumes gas, requires signer)
   * @param _synth {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSynth = async (_synth, txParams) => {
    txParams = txParams || {};
    return await this.contract.setSynth(_synth, txParams);
  };

  /**
   * Set the Synthetix contract that the issuance controller uses to issue SNX.<br>
   * Transaction (consumes gas, requires signer)
   * @param _synthetix {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSynthetix = async (_synthetix, txParams) => {
    txParams = txParams || {};
    return await this.contract.setSynthetix(_synthetix, txParams);
  };

  /**
   * Set the stale period on the updated price variables.<br>
   * Transaction (consumes gas, requires signer)
   * @param _time {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setPriceStalePeriod = async (_time, txParams) => {
    txParams = txParams || {};
    return await this.contract.setPriceStalePeriod(_time, txParams);
  };

  /**
   * Set the minimum deposit amount required to depoist sUSD into the FIFO queue.<br>
   * Transaction (consumes gas, requires signer)
   * @param _amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMinimumDepositAmount = async (_amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMinimumDepositAmount(_amount, txParams);
  };

  /**
   * Access point for the oracle to update the prices of SNX / eth.<br>
   * Transaction (consumes gas, requires signer)
   * @param newEthPrice {BigNumber}
   * @param newSynthetixPrice {BigNumber}
   * @param timeSent {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.updatePrices = async (newEthPrice, newSynthetixPrice, timeSent, txParams) => {
    txParams = txParams || {};
    return await this.contract.updatePrices(newEthPrice, newSynthetixPrice, timeSent, txParams);
  };

  /**
   * Exchange ETH to sUSD.<br>
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForSynths = async txParams => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForSynths(txParams);
  };

  /**
   * Exchange ETH to sUSD while insisting on a particular rate. This allows a user to exchange while protecting against frontrunning by the contract owner on the exchange rate.<br>
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param guaranteedRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForSynthsAtRate = async (guaranteedRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForSynthsAtRate(guaranteedRate, txParams);
  };

  /**
   * Exchange ETH to SNX.<br>
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForSynthetix = async txParams => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForSynthetix(txParams);
  };

  /**
   * Exchange ETH to SNX while insisting on a particular set of rates. This allows a user to exchange while protecting against frontrunning by the contract owner on the exchange rates.<br>
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param guaranteedEtherRate {BigNumber}
   * @param guaranteedSynthetixRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForSynthetixAtRate = async (
    guaranteedEtherRate,
    guaranteedSynthetixRate,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForSynthetixAtRate(
      guaranteedEtherRate,
      guaranteedSynthetixRate,
      txParams
    );
  };

  /**
   * Exchange sUSD for SNX.<br>
   * Transaction (consumes gas, requires signer)
   * @param synthAmount {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeSynthsForSynthetix = async (synthAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangeSynthsForSynthetix(synthAmount, txParams);
  };

  /**
   * Exchange sUSD for SNX while insisting on a particular rate. This allows a user to exchange while protecting against frontrunning by the contract owner on the exchange rate.<br>
   * Transaction (consumes gas, requires signer)
   * @param synthAmount {BigNumber}
   * @param guaranteedRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeSynthsForSynthetixAtRate = async (synthAmount, guaranteedRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangeSynthsForSynthetixAtRate(
      synthAmount,
      guaranteedRate,
      txParams
    );
  };

  /**
   * Allows the owner to withdraw SNX from this contract if needed.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.withdrawSynthetix = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.withdrawSynthetix(amount, txParams);
  };

  /**
   * Allows a user to withdraw all of their previously deposited synths from this contract if needed. Developer note: We could keep an index of address to deposits to make this operation more efficient but then all the other operations on the queue become less efficient. It's expected that this function will be very rarely used, so placing the inefficiency here is intentional. The usual use case does not involve a withdrawal.<br>
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.withdrawMyDepositedSynths = async txParams => {
    txParams = txParams || {};
    return await this.contract.withdrawMyDepositedSynths(txParams);
  };

  /**
   * DepositSynths: Allows users to deposit synths via the approve / transferFrom workflow if they'd like. You can equally just transfer synths to this contract and it will work exactly the same way but with one less call (and therefore cheaper transaction fees).<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.depositSynths = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.depositSynths(amount, txParams);
  };

  /**
   * Triggers when users send us SNX or sUSD, but the modifier only allows sUSD calls to proceed.<br>
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param amount {BigNumber}
   * @param data {bytes}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.tokenFallback = async (from, amount, data, txParams) => {
    txParams = txParams || {};
    return await this.contract.tokenFallback(from, amount, data, txParams);
  };

  /**
   * Check if the prices haven't been updated for longer than the stale period.<br>
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.pricesAreStale = async () => {
    return await this.contract.pricesAreStale();
  };

  /**
   * Calculate how many SNX you will receive if you transfer an amount of synths.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.synthetixReceivedForSynths = async amount => {
    return await this.contract.synthetixReceivedForSynths(amount);
  };

  /**
   * Calculate how many SNX you will receive if you transfer an amount of ether.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.synthetixReceivedForEther = async amount => {
    return await this.contract.synthetixReceivedForEther(amount);
  };

  /**
   * Calculate how many synths you will receive if you transfer an amount of ether.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.synthsReceivedForEther = async amount => {
    return await this.contract.synthsReceivedForEther(amount);
  };
}

export default Depot;
