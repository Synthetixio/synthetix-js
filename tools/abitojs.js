const contracts = require('../lib/abis/index');
const fs = require('fs');
const docsDescriptions = require('../lib/docSrc/descriptions');
const typeMap = {
  uint256: 'BigNumber',
  uint8: 'Number',
  address: 'String<EthAddress>',
  bool: 'boolean',
  string: 'String',
};

const contractAbiMap = {
  Nomin: 'Nomin',
  Havven: 'Havven',
  IssuanceController: 'IssuanceController',
  StablePayments: 'Nomin',
  Mintr: 'Havven',
}


//console.log(Havven);
const generate = () => {
  Object.keys(contracts).forEach(key => {
    const functions = contracts[key].filter(prop => prop.type === 'function');
    generateJSFile(key, functions);
  });
};

const generateJSFile = (contractName, functions) => {
  const content = `const {Contract} = require('ethers');
const abi = require('../../lib/abis').${contractName};
const ContractSettings = require('../contractSettings');

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function ${contractName}(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();
  
  this.contract = new Contract(
    this.contractSettings.addressList["${contractName}"],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );
  
  ${functions.map(fn => generateFunctionStr(fn, contractName)).join('')}

}

module.exports = ${contractName}`;
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
  return params.map(p => {
    return (p.name) ? p.name: p.type;
  }).join(', ');
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
  let description = docsDescriptions[contractAbiMap[contractName]][abiFn.name];
  description = (description) ? description + '<br>\n   * ': '';
  const constantStr = abiFn.constant
    ? "Call (no gas consumed, doesn't require signer)"
    : 'Transaction (consumes gas, requires signer)';
  const payable = abiFn.payable
    ? "\n<br>Payable (to enter ETH amount set txParams.value)"
    : '';
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
  if (!abiFn.constant){
    params.push({name: 'txParams', type: 'TxParams'});
  }
  const paramsStr = getFnParams(params);
  const jsdoc = generateJsdoc(abiFn, params, contractName);
  if (!abiFn.constant){
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


