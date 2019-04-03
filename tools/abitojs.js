const fs = require('fs');
const path = require('path');
const util = require('util');
const snx = require('synthetix');
const docsDescriptions = require('../lib/docSrc/descriptions');

/**
 * This module will perform the following actions for all contracts listed
 *
 * 1) Create an ABI file for each underlying source (in lib/abis/) (based on the mainnet release of synthetix - from the dependency)
 * 2) Create a compilation of addresses for each environment
 * 3) Create a collection of JS source files under src/contracts
 */

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
    target: 'ProxyFeePool',
  },
  Synth: {
    target: 'ProxysUSD',
  },
  Synthetix: {
    target: 'ProxySynthetix',
  },
  SynthetixEscrow: true,
  SynthetixState: true,
};

// add the synth contract as well (target addresses are their proxies, and source is the synth contract)
const synthContracts = snx.getSynths().reduce((memo, synth) => {
  memo[synth] = { target: `Proxy${synth}`, source: 'Synth' };
  return memo;
}, {});

const typeMap = {
  uint256: 'BigNumber',
  uint8: 'Number',
  address: 'String<EthAddress>',
  bool: 'boolean',
  string: 'String',
};

const generate = () => {
  const network = 'mainnet';
  const allContracts = Object.assign({}, contracts, synthContracts);

  Object.keys(allContracts).forEach(contractName => {
    let target = contractName;
    let source = contractName;
    if (typeof allContracts[contractName] === 'object') {
      target = allContracts[contractName].target || target;
      source = allContracts[contractName].source || source;
    }
    // TODO write out address list
    const { address } = snx.getTarget({ network, contract: target });
    const { abi } = snx.getSource({ network, contract: source });

    // onlt for contracts in the original contract object
    if (contractName in contracts) {
      // write out ABI files (assuming mainnet)
      writeABIFile(contractName, abi);
    }
    // now generate the final JS source
    const functions = abi.filter(prop => prop.type === 'function');
    generateJSFile(contractName, abi, address, functions, source);
  });
};

const writeABIFile = (contractName, abi) => {
  const abiPath = path.join(__dirname, '..', 'lib', 'abis', `${contractName}.js`);
  const content = `export default ${util.inspect(abi, { showHidden: false, depth: null })};`;
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
import abi from '../../lib/abis/${source}';

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
  const typeToCounter = {};
  return params
    .map(p => {
      if (p.name) return p.name;
      typeToCounter[p.type] = typeToCounter[p.type] + 1 || 1;
      return `${p.type}_${typeToCounter[p.type]}`;
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
  return `${jsdoc}
  this.${abiFn.name} = async (${paramsStr}) => {
    ${!abiFn.constant ? 'txParams = txParams || {};' : ''}
    return await this.contract.${abiFn.name}(${paramsStr});
  };
`;
};

generate();
