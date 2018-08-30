const contracts = require('../lib/abis/index');
const fs = require('fs');
const typeMap = {
  uint256: 'Number',
  uint8: 'Number',
  address: 'String<EthAddress>',
  bool: 'boolean',
  string: 'String',
};

//console.log(Havven);
const generate = () => {
  Object.keys(contracts).forEach(key => {
    const functions = contracts[key].filter(prop => prop.type === 'function');
    generateJSFile(key, functions);
  });
};

const generateJSFile = (contractName, functions) => {
  const content = `const {Contract, providers, utils} = require('ethers');
const addresses = require('../../lib/addresses');
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
  
  ${functions.map(fn => generateFunctionStr(fn)).join('')}

}

module.exports = ${contractName}`;
  fs.writeFile(`${__dirname}/../contracts/${contractName}.js`, content, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`${contractName}.js successfully generated.`);
    }
  });
  return content;
};

getFnParams = params => {
  return params.map(p => p.name).join(', ');
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
  /*return ` * @returns [${outputs.map(output => {
    return `{${output.name}: ${typeMap[output.type] || output.type}}`
  }).join(', ')}]`*/
};

generateJsdoc = abiFn => {
  const inputParams = abiFn.inputs.length
    ? '\n' + abiFn.inputs.map(input => getJsdocParam(input)).join('\n')
    : '';
  const constantStr = abiFn.constant
    ? "constant - doesn't require signer"
    : 'function - requires signer';
  return `
  /**
   * ${abiFn.name} - ${constantStr}${inputParams}
  ${getJsdocReturns(abiFn.outputs)}
   **/`;
};

const generateFunctionStr = abiFn => {
  const params = getFnParams(abiFn.inputs);
  const jsdoc = generateJsdoc(abiFn);

  return `
${jsdoc}
  this.${abiFn.name} = async (${params}) => {
    return await this.contract.${abiFn.name}(${params});
  };
`;
};

generate();


