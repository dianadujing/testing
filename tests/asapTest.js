var should = require('should'),
    assert = require('assert'),
    expect = require('expect.js'),
    asapLib = require('../asap/asap.js');

describe('ASAP library ', function(){
  describe('asap ', function(){
    it('should be a function', function(){
      asapLib.asap.should.be.a('function');
    });
    it('should have a property called loadScript', function(){
      asapLib.asap.should.have.property('loadScript');
    });
    it('should return a json object', function(){
      asapLib.asap('bagToken').should.have.property('resolve');
    });
    it('should have registry', function(){
    });
  });
});
