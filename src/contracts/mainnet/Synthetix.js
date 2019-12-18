import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/mainnet/Synthetix';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Synthetix(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['ProxySynthetix'],
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
   * @param _gasPriceLimit {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setGasPriceLimit = async (_gasPriceLimit, txParams) => {
    txParams = txParams || {};
    return await this.contract.setGasPriceLimit(_gasPriceLimit, txParams);
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
   * Only the contract owner may call this., Remove an associated Synth contract from the Synthetix system.<br>
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
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.mint = async txParams => {
    txParams = txParams || {};
    return await this.contract.mint(txParams);
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
   * @param _owner {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.nominateNewOwner = async (_owner, txParams) => {
    txParams = txParams || {};
    return await this.contract.nominateNewOwner(_owner, txParams);
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
   * @returns BigNumber
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime();
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
   * @param _feePool {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFeePool = async (_feePool, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFeePool(_feePool, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param sourceCurrencyKey {bytes32}
   * @param destinationCurrencyKey {bytes32}
   * @returns BigNumber
   **/
  this.feeRateForExchange = async (sourceCurrencyKey, destinationCurrencyKey) => {
    return await this.contract.feeRateForExchange(sourceCurrencyKey, destinationCurrencyKey);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _gasLimitOracle {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setGasLimitOracle = async (_gasLimitOracle, txParams) => {
    txParams = txParams || {};
    return await this.contract.setGasLimitOracle(_gasLimitOracle, txParams);
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
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.decimals = async () => {
    return await this.contract.decimals();
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
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.terminateSelfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.terminateSelfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.rewardsDistribution = async () => {
    return await this.contract.rewardsDistribution();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.exchangeRates = async () => {
    return await this.contract.exchangeRates();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * Only callable by the contract owner., Set the ExchangeRates contract address where rates are held.<br>
   * Transaction (consumes gas, requires signer)
   * @param _exchangeRates {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setExchangeRates = async (_exchangeRates, txParams) => {
    txParams = txParams || {};
    return await this.contract.setExchangeRates(_exchangeRates, txParams);
  };

  /**
   * A function that lets you easily convert an amount in a source currency to an amount in the destination currency.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @returns BigNumber
   **/
  this.effectiveValue = async (sourceCurrencyKey, sourceAmount, destinationCurrencyKey) => {
    return await this.contract.effectiveValue(
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey
    );
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

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _givenGasPrice {BigNumber}
  
   **/
  this.validateGasPrice = async _givenGasPrice => {
    return await this.contract.validateGasPrice(_givenGasPrice);
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
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[]
   **/
  this.availableCurrencyKeys = async () => {
    return await this.contract.availableCurrencyKeys();
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
   * The remaining synths an issuer can issue against their total synthetix balance.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.remainingIssuableSynths = async (issuer, currencyKey) => {
    return await this.contract.remainingIssuableSynths(issuer, currencyKey);
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
   * Total amount of synths issued by the system, priced in currencyKey.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.totalIssuedSynths = async currencyKey => {
    return await this.contract.totalIssuedSynths(currencyKey);
  };

  /**
   * Only the contract owner may call this., Add an associated Synth contract to the Synthetix system.<br>
   * Transaction (consumes gas, requires signer)
   * @param synth {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.addSynth = async (synth, txParams) => {
    txParams = txParams || {};
    return await this.contract.addSynth(synth, txParams);
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
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _exchangeEnabled {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setExchangeEnabled = async (_exchangeEnabled, txParams) => {
    txParams = txParams || {};
    return await this.contract.setExchangeEnabled(_exchangeEnabled, txParams);
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
   * @returns BigNumber
   **/
  this.gasPriceLimit = async () => {
    return await this.contract.gasPriceLimit();
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
   * @param txParams {TxParams}
  
   **/
  this.selfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.selfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.integrationProxy = async () => {
    return await this.contract.integrationProxy();
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
   * The current collateralisation ratio for a user. Collateralisation ratio varies over time as the value of the underlying Synthetix asset changes, e.g. if a user issues their maximum available synths when they hold $10 worth of Synthetix, they will have issued $2 worth of synths. If the value of Synthetix changes, the ratio returned by this function will adjust accordlingly. Users are incentivised to maintain a collateralisation ratio as close to the issuance ratio as possible by altering the amount of fees they're able to claim from the system.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<EthAddress>}
   * @returns BigNumber
   **/
  this.collateralisationRatio = async issuer => {
    return await this.contract.collateralisationRatio(issuer);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.rewardEscrow = async () => {
    return await this.contract.rewardEscrow();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY();
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
   * The maximum synths an issuer can issue against their total synthetix quantity, priced in XDRs. This ignores any already issued synths, and is purely giving you the maximimum amount the user can issue.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.maxIssuableSynths = async (issuer, currencyKey) => {
    return await this.contract.maxIssuableSynths(issuer, currencyKey);
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
   * Only the synth contract can call this function, Function that allows synth contract to delegate exchanging of a synth that is not the same sourceCurrency.<br>
   * Transaction (consumes gas, requires signer)
   * @param from {String<EthAddress>}
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param destinationAddress {String<EthAddress>}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.synthInitiatedExchange = async (
    from,
    sourceCurrencyKey,
    sourceAmount,
    destinationCurrencyKey,
    destinationAddress,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.synthInitiatedExchange(
      from,
      sourceCurrencyKey,
      sourceAmount,
      destinationCurrencyKey,
      destinationAddress,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.feePool = async () => {
    return await this.contract.feePool();
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
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated();
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
  this.supplySchedule = async () => {
    return await this.contract.supplySchedule();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _protectionCircuitIsActivated {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setProtectionCircuit = async (_protectionCircuitIsActivated, txParams) => {
    txParams = txParams || {};
    return await this.contract.setProtectionCircuit(_protectionCircuitIsActivated, txParams);
  };

  /**
   * If a user issues synths backed by SNX in their wallet, the SNX become locked. This function will tell you how many synths a user has to give back to the system in order to unlock their original debt position. This is priced in whichever synth is passed in as a currency key, e.g. you can price the debt in sUSD, XDR, or any other synth you wish.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param issuer {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.debtBalanceOf = async (issuer, currencyKey) => {
    return await this.contract.debtBalanceOf(issuer, currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.messageSender = async () => {
    return await this.contract.messageSender();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.synthetixState = async () => {
    return await this.contract.synthetixState();
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
   * @param owner {String<EthAddress>}
   * @param spender {String<EthAddress>}
   * @returns BigNumber
   **/
  this.allowance = async (owner, spender) => {
    return await this.contract.allowance(owner, spender);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.escrow = async () => {
    return await this.contract.escrow();
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
   * @returns String<EthAddress>
   **/
  this.proxy = async () => {
    return await this.contract.proxy();
  };

  /**
   * Function that allows you to exchange synths you hold in one flavour for another.<br>
   * Transaction (consumes gas, requires signer)
   * @param sourceCurrencyKey {bytes32}
   * @param sourceAmount {BigNumber}
   * @param destinationCurrencyKey {bytes32}
   * @param txParams {TxParams}
   * @returns boolean
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
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.exchangeEnabled = async () => {
    return await this.contract.exchangeEnabled();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.gasLimitOracle = async () => {
    return await this.contract.gasLimitOracle();
  };
}

export default Synthetix;
