const fetch = require('node-fetch');
const queryOutput = require('./query-output');
const BASE_URL = 'https://developer.mozilla.org/en-US/search.json?q=';

const commands = {
  _default: query =>
    fetch(BASE_URL + query)
      .then(response => response.json())
      .then(queryOutput),
};

const fireCommand = query => {
  return commands._default(query);
};

module.exports = fireCommand;
