var mongoose = require("mongoose");
var customer = require("../lib/customers");
mongoose.connect('mongodb://localhost/tekpub_test');
describe("Customers", function(){
  //holds a customer to use in the each test
  var currentCustomer = null;
  beforeEach(function(done){
    //add some test data
    customer.register("test@test.com", "password", "password", function(doc){
      currentCustomer = doc;
      done();
    });
  });
  afterEach(function(done){
    //delete all the customer records
    customer.model.remove({}, function() {
      done();
    });
  });
  //tests...
});
