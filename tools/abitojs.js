const contracts = require('./abis/index');
const fs = require('fs');
const docsDescriptions = require('../lib/docSrc/descriptions');

/**
 * ExportableContractName: AddressKey (name is used to find appropriate ABI and AddressKey for address (for proxy contracts)
 **/
const contractToAddressMap = {
  ExchangeRates: 'ExchangeRates',
  FeePool: 'FeePoolProxy',
  Synthetix: 'SynthetixProxy',
  SynthetixEscrow: 'SynthetixEscrow',
  SynthetixState: 'SynthetixState',
  Synth: 'sUSDProxy',
  XDR: 'XDRProxy',
  sUSD: 'sUSDProxy',
  sEUR: 'sEURProxy',
  sJPY: 'sJPYProxy',
  sAUD: 'sAUDProxy',
  sKRW: 'sKRWProxy',
  sXAU: 'sXAUProxy',
  Depot: 'Depot',
};

const typeMap = {
  uint256: 'BigNumber',
  uint8: 'Number',
  address: 'String<EthAddress>',
  bool: 'boolean',
  string: 'String',
};

const contractToAbiMap = {
  Synth: 'Synth',
  Synthetix: 'Synthetix',
  SynthetixEscrow: 'SynthetixEscrow',
  SynthetixState: 'SynthetixState',
  Depot: 'Depot',
  XDR: 'Synth',
  sUSD: 'Synth',
  sEUR: 'Synth',
  sJPY: 'Synth',
  sAUD: 'Synth',
  sKRW: 'Synth',
  sXAU: 'Synth',
  ExchangeRates: 'ExchangeRates',
  FeePool: 'FeePool',
};

const generate = () => {
  Object.keys(contractToAddressMap).forEach(contractName => {
    const abiName = contractToAbiMap[contractName];
    const addressName = contractToAddressMap[contractName];
    const functions = contracts[abiName].filter(prop => prop.type === 'function');
    generateJSFile(contractName, abiName, addressName, functions);
  });
};

const generateJSFile = (contractName, abiName, addressName, functions) => {
  const content = `import {Contract} from 'ethers';
import abis from '../../lib/abis/index';
import ContractSettings from '../contractSettings';
const abi = abis.${abiName};

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function ${contractName}(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList["${addressName}"],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  ${functions.map(fn => generateFunctionStr(fn, contractName)).join('')}

}

export default ${contractName}`;
  fs.writeFile(`${__dirname}/../src/contracts/${contractName}.js`, content, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`${contractName}.js successfully generated.`);
    }
  });
  return content;
};

getFnParams = params => {
  return params
    .map(p => {
      return p.name ? p.name : p.type;
    })
    .join(', ');
};

getJsdocParam = param => {
  return `   * @param ${param.name} {${typeMap[param.type] || param.type}}`;
};

getJsdocReturns = outputs => {
  if (!outputs.length) return '';
  if (outputs.length === 1) {
    return ` * @returns ${typeMap[outputs[0].type] || outputs[0].type}`;
  }
  return ` * @returns Object`;
};

generateJsdoc = (abiFn, params, contractName) => {
  let description =
    docsDescriptions[contractToAbiMap[contractName]] &&
    docsDescriptions[contractToAbiMap[contractName]][abiFn.name];
  description = description ? description + '<br>\n   * ' : '';
  const constantStr = abiFn.constant
    ? "Call (no gas consumed, doesn't require signer)"
    : 'Transaction (consumes gas, requires signer)';
  const payable = abiFn.payable ? '\n<br>Payable (to enter ETH amount set txParams.value)' : '';
  const inputParams = params.length
    ? '\n' + params.map(input => getJsdocParam(input)).join('\n')
    : '';
  return `
  /**
   * ${description}${constantStr}${payable}${inputParams}
  ${getJsdocReturns(abiFn.outputs)}
   **/`;
};

const generateFunctionStr = (abiFn, contractName) => {
  let params = [...abiFn.inputs];
  if (!abiFn.constant) {
    params.push({ name: 'txParams', type: 'TxParams' });
  }
  const paramsStr = getFnParams(params);
  const jsdoc = generateJsdoc(abiFn, params, contractName);
  if (!abiFn.constant) {
    return `
${jsdoc}
  this.${abiFn.name} = async (${paramsStr}) => {
    txParams = txParams || {};
    return await this.contract.${abiFn.name}(${paramsStr});
  };
`;
  } else {
    return `
${jsdoc}
  this.${abiFn.name} = async (${paramsStr}) => {
    return await this.contract.${abiFn.name}(${paramsStr});
  };
`;
  }
};

generate();
