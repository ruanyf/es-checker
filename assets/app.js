var pass = 0;
var total = 0;

runSuite('Variables', ['letConst', 'letTDZ', 'constRedef', 'destructuring', 'spreadRest']);

runSuite('Data Types', ['forOf', 'collections', 'symbol', 'symbolImplicitCoercion']);

runSuite('Number', ['numericLiteral', 'oldOctalLiteral', 'mathStatics', 'numberStatics']);

runSuite('String', ['stringMethods', 'unicodeEscape', 'unicodeIdentifier', 'unicodeRegExp', 'stickyRegExp', 'templateString']);

runSuite('Function', ['arrow', 'defaultParameter', 'parameterDestructuring', 'functionNameInference', 'tco']);

runSuite('Array', ['arrayMethods', 'arrayStatics', 'typedArrayMethods', 'typedArrayStatics', 'typedArrays']);

runSuite('Object', ['objectProto', 'objectStatics', 'computedProperty', 'conciseMethodProperty', 'proxy']);

runSuite('Generator and Promise', ['generator', 'promise']);

runSuite('Class', ['class', 'objectSuper', 'extendNatives']);

runSuite('Module', ['moduleExport', 'moduleImport']);

  function runSuite(title, testArray){
    var divSet = document.querySelector('div[data-role="collapsible-set"]');
    var div = document.createElement("div");
    div.setAttribute("data-role", "collapsible");
    div.setAttribute("data-collapsed-icon", "flat-eye");
    div.setAttribute("data-expanded-icon", "flat-eye");
    if (total === 0) div.setAttribute("data-collapsed", "false");
    div.innerHTML = '<h3>' + title + '</h3>';
    testArray.forEach(function(key){
      if (Supports[key]){
        pass += 1;
        div.innerHTML += '<p style="color:green;">' + ' ✓ ' + (new Array(5)).join('&nbsp;') + getApi(key)['en'] + '</p>';
      } else {
        div.innerHTML += '<p style="color:red;">' + ' ✖ ' + (new Array(6)).join('&nbsp;') + getApi(key)['en'] + '</p>';
      }
      total += 1;
    });
    divSet.appendChild(div);
  }

  function getApi(key){
    if (mapper[key]){
      return mapper[key];
    } else if (mapper[key[0].toUpperCase() + key.substring(1)]){
      return mapper[key[0].toUpperCase() + key.substring(1)];
    } else if (mapper[key.toUpperCase()]){
      return mapper[key.toUpperCase()];
    }
  }


  var rate = parseInt(( pass/total ) * 100);
  var circle = document.querySelector('.c100');
  circle.classList.remove('p0');
  circle.classList.add('p' + rate);
  var circleSpan = document.querySelector('.c100 span');
  circleSpan.innerHTML = rate + '%';
  var h2Span = document.querySelector('fieldset h2 span');
  h2Span.innerHTML = rate + '%';

