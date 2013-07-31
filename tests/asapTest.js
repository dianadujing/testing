var should = require('should')
   ,assert = require('assert')
   ,expect = require('expect.js')
   //,cheerio = require('cheerio')
   ,myCode = require('../asap/asap.js');
describe('ASAP library ', function(){
  describe('asap ', function(){
    it('should be a function', function(){
      myCode.asap.should.be.a('function');
    })
    it('should have a property called loadScript', function(){
      myCode.asap.should.have.property('loadScript');
    })
    it('should return a json object', function(){
      myCode.asap('bagToken').should.have.property('resolve');
    })
    it('should have registry', function(){
    })

  })
})
