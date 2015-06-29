var supports = require('../index');
var expect = require('chai').expect;

describe('es-checker test',function(){
  it('result should be a boolean', function(){
    expect(supports.letConst).to.be.a('boolean');
  })

  it('wrong feature name should return undefined', function(){
    expect(supports.unknown).to.equal(undefined);
  })

  it('first letter of some feature name should be caseignored', function(){
    var value = supports.ArrayMethods;
    expect(supports.ArrayMethods).to.equal(supports.arrayMethods);
  })
});
