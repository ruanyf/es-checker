var api = require('./api');
var supports = {};
supports._api = api;

function runTest(key){
  if (key === 'class') key = 'classes';
  if (supports._api[key].dependencies) {
    for(var i = 0; i < supports._api[key].dependencies.length; i++){
      var depKey = supports._api[key].dependencies[i];
      if (runTest(depKey) === false) return false;
    }
  }

  if (supports._api[key].passes) {
    return tryPassFail(supports._api[key].passes);
  } else if (supports._api[key].fails) {
    return !tryPassFail(supports._api[key].fails);
  } else if (supports._api[key].is) {
    return tryReturn(supports._api[key].is);
  } else if (supports._api[key].not) {
    return !tryReturn(supports._api[key].not);
  }
}

function tryPassFail(code) {
  try {
    runIt(code);
    return true;
  }
  catch (err) {
    return false;
  }
}

function tryReturn(code) {
  try {
    return runIt(code);
  }
  catch (err) {
    return false;
  }
}

function runIt(code) {
  return (new Function(code))();
}

module.exports =  runTest;
