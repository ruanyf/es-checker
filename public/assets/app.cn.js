var title = document.title;
var circleField = document.querySelector('#circle');

circleField.innerHTML = '<div class="c100 p0 big orange">' +
  '  <span>0%</span>' +
  '<div class="slice">' +
  '  <div class="bar"></div>' +
  '  <div class="fill"></div>' +
  '</div>' +
  '</div>';

var circleField = document.querySelector('#circle-title');
circleField.innerHTML = '  <h2>您的浏览器支持<span></span>的 ECMAScript 6。</h2>';

var header = document.querySelector('div[data-role="header"]');
header.innerHTML = '      <a data-iconpos="notext" data-role="button" title="Home"></a>' +
  '    <h1>ES-Checker <small>(<a style="color:orange;" href="https://github.com/ruanyf/es-checker">Github</a>)</small></h1>' +
  '    <a href="#" onclick="document.location=\'http://ruanyf.github.io/es-checker/index.html\';">英文 | 中文</a>';

var footer = document.querySelector('div[data-role="footer"]');
footer.innerHTML = '<h4><a style="color:orange;" href="https://github.com/ruanyf/es-checker">ES-Checker</a> by <a style="color:orange;" href="https://github.com/ruanyf">ruanyf</a> @2015</h4>';

var pass = 0;
var total = 0;

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
        div.innerHTML += '<p style="color:green;">' + ' ✓ ' + (new Array(5)).join('&nbsp;') + getApi(key).cn + '</p>';
      } else {
        div.innerHTML += '<p style="color:red;">' + ' ✖ ' + (new Array(6)).join('&nbsp;') + getApi(key).cn + '</p>';
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

  setTimeout(function(){document.title = title;}, 0);
