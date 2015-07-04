var supports = require('../index');
var expect = require('chai').expect;

describe('es-checker test',function(){
  it('result should be a boolean', function(){
    expect(supports.letConst).to.be.a('boolean');
  });

  it('wrong feature name should return undefined', function(){
    expect(supports.unknown).to.equal(undefined);
  });

  it('should detect Reflect feature', function(){
    expect(supports.reflect).to.be.a('boolean');
  });

  it('first letter of some feature name should be caseignored', function(){
    var value = supports.ArrayMethods;
    expect(supports.ArrayMethods).to.equal(supports.arrayMethods);
  });

  it('should support Promise', function(){
    expect(supports.promise).to.equal(true);
  });

  it('class should be equal of classes', function(){
    expect(supports.class).to.equal(supports.classes);
  });
});
