<<<<<<< HEAD
describe('asap', function(){

  asap.loadScript('/coverage.html','node1');
  var node1 = document.getElementById('node1');
  asap.loadScript('/coverage.html','node2');
  var node2 = document.getElementById('node2');

  describe('loadScript', function(){
    it(' should assign value to variables: ', function(){
      (node1.id).should.equal('node1');
    });
  });

  describe('resolve and then - ', function(){
    var asap_result = asap(node1.id).resolve();

    it(' resolve should be an object', function(){
      (asap_result).should.be.a('object');
    });

    it(' should return the same api object: ', function(){
        (asap_result.resolve()).should.be.equal(asap_result);
    });

    it(' then() should work after resolve(): ', function(){
      asap(node1.id).then(function(){
        console.log('succeed!');
      });
    });

    it(' then() cannot work before resolve(): ', function(){
      asap(node2.id).then(function(){
        console.log('failed!');
      });
    });

=======
describe('loadScript', function(){
  it('should assign load a new script: ', function(){
    asap.loadScript('coverage.html','abc');
    var scrpt = document.getElementById('abc');
    (scrpt.id).should.equal('abc');
    console.log(scrpt.src);
    console.log(scrpt.id);
>>>>>>> 5fbed65ad194a849c195ee227750df6eff5e3fe7
  });
});
