var supports = require('../../lib/interface');
var api = require('../../lib/api');
var runTest = require('../../lib/runtest');

global = window;
for (var key in supports){
  supports[key] = runTest(supports[key]);
}

supports._api = api;
window.Supports = supports;
