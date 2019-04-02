const fs = require('fs');
const path = require('path');
const snx = require('synthetix');
const docsDescriptions = require('../lib/docSrc/descriptions');

/**
 * The list of contracts to generate.
 *
 * Each entry can be keyed to either a bool to represent using that key name as the target address and abi file,
 * or the entry can be keyed to an object with an optional "target" - the target contract that will specify the address
 * and an optional "source" - the source contract that will contain the ABI we want to include in the auto-generated file
 */
const contracts = {
  Depot: true,
  EscrowChecker: true,
  ExchangeRates: true,
  FeePool: {
    target: 'FeePoolProxy',
  },
  Synth: {
    target: 'ProxysUSD',
  },
  Synthetix: {
    target: 'SynthetixProxy',
  },
  SynthetixEscrow: true,
  SynthetixState: true,
};

const synths = snx.getSynths();
synths.forEach(synth => (contracts[synth] = { target: `Proxy${synth}`, source: 'Synth' }));

const typeMap = {
  uint256: 'BigNumber',
  uint8: 'Number',
  address: 'String<EthAddress>',
  bool: 'boolean',
  string: 'String',
};

const generate = () => {
  Object.keys(contracts).forEach(contractName => {
    let target = contractName;
    let source = contractName;
    if (typeof contracts[contractName] === 'object') {
      target = contracts[contractName].target || target;
      source = contracts[contractName].source || source;
    }
    const address = snx.getDeployment({ network: 'mainnet', contract: target }).address;
    // TODO write out address list
    const abi = snx.getDeployment({ network: 'mainnet', contract: source }).abi;
    // write out ABI files (assuming mainnet)
    writeABIFile(contractName, abi);
    const functions = abi.filter(prop => prop.type === 'function');
    generateJSFile(contractName, abi, address, functions, source);
  });
};

const writeABIFile = (contractName, abi) => {
  const abiPath = path.join(__dirname, '..', 'lib', 'abis', `${contractName}.js`);
  const content = `export default ${abi};`;
  fs.writeFile(abiPath, content, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`ABI ${contractName}.js successfully generated locally.`);
    }
  });
};

const generateJSFile = (contractName, abi, address, functions, source) => {
  const content = `
import {Contract} from 'ethers';
import ContractSettings from '../contractSettings';
const abi = ${abi};

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function ${contractName}(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    ${address},
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  ${functions.map(fn => generateFunctionStr(fn, source)).join('')};
}

export default ${contractName};
`;

  fs.writeFile(
    path.join(__dirname, '..', 'src', 'contracts', `${contractName}.js`),
    content,
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${contractName}.js successfully generated.`);
      }
    }
  );
  return content;
};

const getFnParams = params => {
  return params
    .map(p => {
      return p.name ? p.name : p.type;
    })
    .join(', ');
};

const getJsdocParam = param => {
  return `   * @param ${param.name} {${typeMap[param.type] || param.type}}`;
};

const getJsdocReturns = outputs => {
  if (!outputs.length) return '';
  if (outputs.length === 1) {
    return ` * @returns ${typeMap[outputs[0].type] || outputs[0].type}`;
  }
  return ` * @returns Object`;
};

const generateJsdoc = (abiFn, params, source) => {
  let description = docsDescriptions[source] && docsDescriptions[source][abiFn.name];
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

const generateFunctionStr = (abiFn, source) => {
  const params = [...abiFn.inputs];
  if (!abiFn.constant) {
    params.push({ name: 'txParams', type: 'TxParams' });
  }
  const paramsStr = getFnParams(params);
  const jsdoc = generateJsdoc(abiFn, params, source);
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
