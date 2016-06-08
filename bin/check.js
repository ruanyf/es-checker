#!/usr/bin/env node

var chalk = require('chalk');
var api = require('../lib/api');
var supports = require('../lib/interface');
var mapper = require('../lib/mapper');
var language = require('../package.json').language;
var runTest = require('../lib/runtest');

var version = require('../package.json').version;
var pass = 0;
var total = 0;

var symbols = {
  pass: '\u221A', // '✓'
  fail: '\u00D7', // '✖'
  unknown: '-'
};

supports._api = api;

console.log('\n' + chalk.bold.underline('ECMAScript 6 Feature Detection' + ' (v' + version + ')') + '\n');

runSuite('Variables', ['letConst', 'letTDZ', 'constRedef', 'destructuring', 'spreadRest']);

runSuite('Data Types', ['forOf', 'collections', 'symbol', 'symbolImplicitCoercion']);

runSuite('Number', ['numericLiteral', 'oldOctalLiteral', 'mathStatics', 'numberStatics']);

runSuite('String', ['stringMethods', 'unicodeEscape', 'unicodeIdentifier', 'unicodeRegExp', 'stickyRegExp', 'templateString']);

runSuite('Function', ['arrow', 'defaultParameter', 'parameterDestructuring', 'functionNameInference', 'tco']);

runSuite('Array', ['arrayMethods', 'arrayStatics', 'typedArrays', 'typedArrayMethods', 'typedArrayStatics']);

runSuite('Object', ['objectProto', 'objectStatics', 'computedProperty', 'conciseMethodProperty', 'proxy', 'reflect']);

runSuite('Generator and Promise', ['generator', 'promise']);

runSuite('Class', ['class', 'objectSuper', 'extendNatives']);

runSuite('Module', ['moduleExport', 'moduleImport']);

function runSuite(title, testArray){
  console.log(chalk.bold(title));
  testArray.forEach(function(key){
    key = getApiName(key);
    var result = runTest(key);
    var symbol;
    var color;
    if (result) {
      symbol = symbols.pass;
      color = 'green';
      pass += 1;
    } else {
      symbol = symbols.fail;
      color = 'red';
    }
    total += 1;
    console.log('  ' + chalk[color](symbol) + ' ' + chalk[color](mapper[key][language]));
  });
  console.log('');
}

var string1 = 'Passes ' + pass + ' feature Detections';
var string2 = 'Your runtime supports ' +
  parseInt((pass/total)*100) +  '% of ECMAScript 6';
var length = Math.max(string1.length, string2.length);

console.log('\n' + (new Array(length + 1)).join('='));
console.log(string1);
console.log(string2);
console.log((new Array(length + 1)).join('=') + '\n');

function getApiName(key){
  return supports[key];
}
