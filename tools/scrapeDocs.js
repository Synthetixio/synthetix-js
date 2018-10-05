const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const baseUrl = 'http://developer.havven.io/api/docs/';
const contractNames = ['Havven', 'Nomin', 'IssuanceController', 'Escrow'];
const docsObj = {};
const writeFile = require('util').promisify(fs.writeFile);

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
    const done = await Promise.all(contractNames.map(name => getDocsForContract(name)));
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
