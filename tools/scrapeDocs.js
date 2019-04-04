const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const baseUrl = 'http://developer.synthetix.io/api/docs/';
const contractNames = ['Synthetix', 'Synth', 'Depot', 'SynthetixEscrow'];
const docsObj = {};
require('util').promisify(fs.writeFile);

async function getDocsForContract(contractName) {
  const res = await axios.get(baseUrl + contractName);
  const $ = cheerio.load(res.data);
  docsObj[contractName] = {};
  $('.item').each((index, item) => {
    const name = $(item)
      .find('h4')
      .text();
    const description = $(item)
      .find('.body > .description > p')
      .text();
    docsObj[contractName][name] = description;
  });
}

async function start() {
  try {
    await Promise.all(contractNames.map(name => getDocsForContract(name)));
    console.log(docsObj);
    await fs.writeFile(
      __dirname + '/../lib/docSrc/descriptions.json',
      JSON.stringify(docsObj, null, 2)
    );
    console.log('done');
  } catch (e) {
    console.log(e);
  }
}

start();
