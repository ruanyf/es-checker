var Supports = function(){
  // Variables
  this.letConst = 'letConst';
  this.letTDZ = 'letTDZ';
  this.constRedef = 'constRedef';
  this.destructuring = 'destructuring';
  this.spreadRest = 'spreadRest';
  // Data Types
  this.forOf = 'forOf';
  this.collections = 'collections';
  this.symbol = 'symbol';
  this.Symbol = this.symbol;
  this.symbolImplicitCoercion = 'symbolImplicitCoercion';
  // Number
  this.numericLiteral = 'numericLiteral';
  this.oldOctalLiteral = 'oldOctalLiteral';
  this.MathStatics = 'MathStatics';
  this.mathStatics = this.MathStatics;
  this.NumberStatics = 'NumberStatics';
  this.numberStatics = this.NumberStatics;
  // String
  this.StringMethods = 'StringMethods';
  this.stringMethods = this.StringMethods;
  this.unicodeEscape = 'unicodeEscape';
  this.unicodeIdentifier = 'unicodeIdentifier';
  this.unicodeRegExp = 'unicodeRegExp';
  this.stickyRegExp = 'stickyRegExp';
  this.templateString = 'templateString';
  // Function
  this.arrow = 'arrow';
  this.defaultParameter = 'defaultParameter';
  this.parameterDestructuring = 'parameterDestructuring';
  this.functionNameInference = 'functionNameInference';
  this.TCO = 'TCO';
  this.tco = this.TCO;
  // Array
  this.ArrayMethods = 'ArrayMethods';
  this.arrayMethods = this.ArrayMethods;
  this.ArrayStatics = 'ArrayStatics';
  this.arrayStatics = this.ArrayStatics;
  this.TypedArrayMethods = 'TypedArrayMethods';
  this.typedArrayMethods = this.TypedArrayMethods;
  this.TypedArrayStatics = 'TypedArrayStatics';
  this.typedArrayStatics = this.TypedArrayStatics;
  this.TypedArrays = 'TypedArrays';
  this.typedArrays = this.TypedArrays;
  // Object
  this.objectProto = 'objectProto';
  this.ObjectStatics = 'ObjectStatics';
  this.objectStatics = this.ObjectStatics;
  this.computedProperty = 'computedProperty';
  this.conciseMethodProperty = 'conciseMethodProperty';
  this.Proxy = 'Proxy';
  this.proxy = this.Proxy;
  this.Reflect = 'Reflect';
  this.reflect = this.Reflect;
  // Generator and Promise
  this.generator = 'generator';
  this.Promise = 'Promise';
  this.promise = this.Promise;
  // Class
  this.classes = 'classes';
  this.class = this.classes;
  this.objectSuper = 'objectSuper';
  this.extendNatives = 'extendNatives';
  // Module
  this.moduleExport = 'moduleExport';
  this.moduleImport = 'moduleImport';
};

module.exports = new Supports();
