import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan/FeePool';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function FeePool(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['ProxyFeePool'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.CONTRACT_NAME = async () => {
    return await this.contract.CONTRACT_NAME();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.FEE_ADDRESS = async () => {
    return await this.contract.FEE_ADDRESS();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.FEE_PERIOD_LENGTH = async () => {
    return await this.contract.FEE_PERIOD_LENGTH();
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
   * @returns Object
   **/
  this.allNetworksDebtSharesSupply = async () => {
    return await this.contract.allNetworksDebtSharesSupply();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.allNetworksSnxBackedDebt = async () => {
    return await this.contract.allNetworksSnxBackedDebt();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.claimFees = async txParams => {
    txParams = txParams || {};
    return await this.contract.claimFees(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param claimingForAddress {String<EthAddress>}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.claimOnBehalf = async (claimingForAddress, txParams) => {
    txParams = txParams || {};
    return await this.contract.claimOnBehalf(claimingForAddress, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.closeCurrentFeePeriod = async txParams => {
    txParams = txParams || {};
    return await this.contract.closeCurrentFeePeriod(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param allNetworksSnxBackedDebt {BigNumber}
   * @param allNetworksDebtSharesSupply {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.closeSecondary = async (allNetworksSnxBackedDebt, allNetworksDebtSharesSupply, txParams) => {
    txParams = txParams || {};
    return await this.contract.closeSecondary(
      allNetworksSnxBackedDebt,
      allNetworksDebtSharesSupply,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param period {BigNumber}
   * @returns BigNumber
   **/
  this.effectiveDebtRatioForPeriod = async (account, period) => {
    return await this.contract.effectiveDebtRatioForPeriod(account, period);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.feePeriodDuration = async () => {
    return await this.contract.feePeriodDuration();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns Object
   **/
  this.feesAvailable = async account => {
    return await this.contract.feesAvailable(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns uint256[2][2]
   **/
  this.feesByPeriod = async account => {
    return await this.contract.feesByPeriod(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _claimingAddress {String<EthAddress>}
   * @returns BigNumber
   **/
  this.getLastFeeWithdrawal = async _claimingAddress => {
    return await this.contract.getLastFeeWithdrawal(_claimingAddress);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.getPenaltyThresholdRatio = async () => {
    return await this.contract.getPenaltyThresholdRatio();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param feePeriodIndex {BigNumber}
   * @param feePeriodId {BigNumber}
   * @param startTime {BigNumber}
   * @param feesToDistribute {BigNumber}
   * @param feesClaimed {BigNumber}
   * @param rewardsToDistribute {BigNumber}
   * @param rewardsClaimed {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.importFeePeriod = async (
    feePeriodIndex,
    feePeriodId,
    startTime,
    feesToDistribute,
    feesClaimed,
    rewardsToDistribute,
    rewardsClaimed,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.importFeePeriod(
      feePeriodIndex,
      feePeriodId,
      startTime,
      feesToDistribute,
      feesClaimed,
      rewardsToDistribute,
      rewardsClaimed,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns boolean
   **/
  this.isFeesClaimable = async account => {
    return await this.contract.isFeesClaimable(account);
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
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.messageSender = async () => {
    return await this.contract.messageSender();
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
   * @param index {BigNumber}
   * @returns Object
   **/
  this.recentFeePeriods = async index => {
    return await this.contract.recentFeePeriods(index);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.recordFeePaid = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.recordFeePaid(amount, txParams);
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
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setRewardsToDistribute = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.setRewardsToDistribute(amount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.setupExpiryTime = async () => {
    return await this.contract.setupExpiryTime();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.targetThreshold = async () => {
    return await this.contract.targetThreshold();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalFeesAvailable = async () => {
    return await this.contract.totalFeesAvailable();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalRewardsAvailable = async () => {
    return await this.contract.totalRewardsAvailable();
  };
}

export default FeePool;
