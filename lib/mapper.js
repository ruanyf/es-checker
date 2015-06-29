var mapper = {
  letConst: {
    cn: 'let 和 const 命令',
    en: 'let and const',
    example: 'let a;\nconst b = 2;'
  },
  defaultParameter: {
    cn: '函数的默认参数',
    en: 'default function parameter values',
    example: 'function a(b=2){}'
  },
  spreadRest: {
    cn: '扩展（...）运算符',
    en: '... operator',
    example: 'var a = [1,2];\nfunction b(...c){}(...a);'
  },
  destructuring: {
    cn: '解构赋值',
    en: 'destructuring assignments/declarations for arrays and objects',
    example: 'var a = [1,2];\nvar [b,c] = a;\nvar d = {e:1,f:2};\nvar {e:E,f} = d;'
  },
  parameterDestructuring: {
    cn: '函数参数的解构',
    en: 'destructuring for function parameters',
    example: 'function a({b,c}){};'
  },
  templateString: {
    cn: '模板字符串',
    en: 'Template String Literals',
    example: 'var a = 1;\nvar b = `c${a}d`;'
  },
  forOf: {
    cn: 'for...of循环',
    en: 'For...0f loop',
    example: 'for (var v of something) { .. };'
  },
  arrow: {
    cn:'箭头函数',
    en: 'arrow function',
    example: 'x => x * x'
  },
  generator: {
    cn: 'generator函数',
    en: 'Generator function',
    example: 'function *foo() { .. }'
  },
  conciseMethodProperty: {
    cn: '对象属性的简洁表示法',
    en: 'Object Literal Property Shorthands',
    example: 'var o = { b() { .. }, a };'
  },
  computedProperty: {
    cn: '对象属性名使用表达式',
    en: 'Object Literal Computed Property',
    example: 'o = { ["a" + "b"]: 42 }'
  },
  moduleExport: {
    cn: '模块的export命令',
    en: 'Module export command',
    example: 'export default foo = 42'
  },
  moduleImport: {
    cn: '模板的import命令',
    en: 'Module import command',
    example: 'import bar from "foo"'
  },
  class: {
    cn: 'classes的别名',
    en: 'classes alias',
    example: ''
  },
  numericLiteral: {
    cn: '数值的八进制和二进制表示法',
    en: 'Octal and binary literal forms',
    example: 'var x = 0o1;\nvar y = 0b10;'
  },
  oldOctalLiteral: {
    cn: '八进制的前缀零表示法',
    en: 'Old octal literal invalid now',
    example: 'var x = 01;'
  },
  symbol: {
    cn: 'Symbol类型',
    en: 'Symbol',
    example: 'var a = Symbol("b");'
  },
  unicodeEscape: {
    cn: 'Unicode字符的大括号表示法',
    en: 'Unicode code-point escape form in string literals',
    example: 'var x = "\\u{20BB7}";'
  },
  unicodeIdentifier: {
    cn: 'Unicode字符是否可用作标识名',
    en: 'Unicode code-point escape form in identifier names',
    example: 'var \\u{20BB7} = 42;'
  },
  unicodeRegExp: {
    cn: '正则表达式的u修饰符',
    en: 'Unicode code-point escape form in regular expressions',
    example: 'var regexp = /\\u{20BB7}/u;'
  },
  stickyRegExp: {
    cn: '正则表达式的y修饰符',
    en: 'y flag for sticky regular expressions',
    example: 'var a = /b/y;'
  },
  classes: {
    cn: '类（class）',
    en:'Class',
    example: 'class A extends B { .. }'
  },
  letTDZ: {
    cn: 'let命令的暂时性死区',
    en: 'TDZ error for too-early access of let or const declarations',
    example: 'if (1) {\n  typeof x; // ReferenceError\n  let x;\n}'
  },
  constRedef: {
    cn: '不允许再次用const声明同一变量',
    en: 'Redefinition of const declarations not allowed',
    example: 'const a = 1;\na = 2;'
  },
  objectProto: {
    cn: '对象的__proto__属性',
    en: '__proto__ in object literal definition sets [[Prototype]] link',
    example: 'var a = { b: 2 };\nvar c = { __proto__: a };\nf (c.b !== 2) throw 0;'
  },
  objectSuper: {
    cn: '对象方法是否可以使用super',
    en: 'super allowed in object methods',
    example: 'var a = { b: 2 };\nvar c = { d() { return super.b; } };\nvar Object.setPrototypeOf(c,a);\nif (c.d() !== 2) throw 0;'
  },
  extendNatives: {
    cn: '原生类型的扩展',
    en: 'class ABC extends Array { .. }',
    example: 'class Foo extends Array { };'
  },
  TCO: {
    cn: '尾调用优化',
    en: 'Tail-call optimization for function calls and recursion',
    example: 'function a(b){ if (b<2E20) a(b+1); }(0);'
  },
  symbolImplicitCoercion: {
    cn: 'Symbol值不能用于运算',
    en: 'Symbols cannot be implicitly coerced',
    example: 'var x = Symbol("a") + "";'
  },
  functionNameInference: {
    cn: '匿名函数的name属性推断函数名',
    en: 'Inferences for function name property for anonymous functions',
    example: 'var o = { \n  ["foo"](){},\n  [Symbol.for("foo")](){}\n}\n\nconsole.log( o.foo.name ); // "foo"\nconsole.log( o[Symbol.for("foo")].name ); // "[foo]"',
    url: ['https://github.com/babel/babel/issues/993']
  },
  ObjectStatics: {
    cn: 'Object的静态方法',
    en: 'Static functions added to Object',
    example:'Object.getOwnSymbolNames();\nObject.assign();'
  },
  ArrayStatics: {
    cn: '数组的静态方法',
    en: 'Static functions added to Array',
    example: 'Array.from();\nArray.of()'
  },
  ArrayMethods: {
    cn: '数组的实例方法',
    en: 'Methods added to Array.prototype',
    example: 'Array.prototype.fill();\nArray.prototype.find();\nArray.prototype.findIndex();\nArray.prototype.entries();\nArray.prototype.keys();Array.prototype.values();'
  },
  TypedArrays: {
    cn: '类型化数组',
    en: 'TypedArrays like Uint8Array',
    example: 'ArrayBuffer();\nInt8Array();\nUint8Array();\nInt32Array();\nFloat64Array();'
  },
  TypedArrayStatics: {
    cn: '类型化数组的静态方法',
    en: 'Some Array statics (like from(..)) added to the TypedArray constructors',
    example: 'Uint32Array.from();\nUint32Array.of();'
  },
  TypedArrayMethods: {
    cn: '类型化数组的实例方法',
    en: 'Some Array methods (like map(..)) added to the TypedArray prototypes',
    example: 'Int8Array.prototype.slice();\nInt8Array.prototype.join();\nInt8Array.prototype.map();\nInt8Array.prototype.forEach();'
  },
  StringMethods: {
    cn: '字符串的实例方法',
    en: 'Methods added to String.prototype',
    example: 'String.prototype.includes();\nString.prototype.repeat();'
  },
  NumberStatics: {
    cn: 'Number对象的静态方法',
    en: 'Static functions added to Number',
    example: 'Number.isNaN();\nNumber.isInteger();'
  },
  MathStatics: {
    cn: 'Math对象的静态方法',
    en: 'Static functions added to Math',
    example: 'Math.hypot();\nMath.acosh();\nMath.imul();'
  },
  collections: {
    cn: 'Map, Set, WeakMap, WeakSet',
    en: 'Map, Set, WeakMap, WeakSet',
    example: 'new Map();\nnew Set();\nnew WeakMap();\nnew WeakSet();'
  },
  Proxy: {
    cn: 'Proxy对象',
    en: 'Proxies',
    example: 'new Proxy();'
  },
  Promise: {
    cn: 'Promise对象',
    en: 'Promises',
    example: 'new Promise();'
  },
  everything: {
    cn: '所有特性',
    en: 'Everything',
    example: ''
  }
};

module.exports = mapper;
