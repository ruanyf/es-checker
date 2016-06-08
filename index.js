var supports = require('./lib/interface');
var api = require('./lib/api');
var runTest = require('./lib/runtest');

for (var key in supports) {
  supports[key] = runTest(getApiName(key));
}

supports._api = api;

function getApiName(key) {
  return supports[key];
}

module.exports = supports;
