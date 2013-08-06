//var asap_file = require('../src/asap.js');
describe("asap's ", function(){
  describe(" resolve", function(){
     var asap = window.asap("abc");
    it(" to be defined: ",function(){
      expect(asap.resolve).toBeDefined();
    });
    it(" should be a function", function(){
      expect(asap.resolve).toEqual(jasmine.any(Function));
    });
     /* var resolveFake = jasmine.createSpy('My method').andCallFake(function(){
        console.log("Hello from resolve");
        return "success";
      });

      expect(resolveFake).toHaveBeenCalled(); */
  });
  describe(" loadScript", function(){
    it(" should return undefined ", function(){
      expect(asap.loadScript("../coverage.html","abc")).toBeUndefined();
      //asap.loadScript("abc");
      //expect(t.async).toBe(false);
    });
  });
});
