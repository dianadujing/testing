describe('asap', function(){

  asap.loadScript('/sourcejs/clock.js','node1');
  var node1 = document.getElementById('node1');
  asap.loadScript('/sourcejs/clock.js','node2');
  var node2 = document.getElementById('node2');

  describe('loadScript', function(){
    it(' should assign value to variables: ', function(){
      (node1.id).should.equal('node1');
    });
  });

  describe('resolve and then - ', function(){
    var asap_result = asap('clock').resolve();
    var properties = ['resolve','then'];

    it(' resolve should return api back', function(){
      for(var i=0;i<properties.length;i++){
        (asap_result).should.be.a('object').and.have.property(properties[i]);
      }
    });

    it(' should return the same api object: ', function(){
      (asap_result.resolve()).should.be.equal(asap_result);
    });

    it(' then() should work after resolve(): ', function(){
      asap('clock').then(function(){
        var div_clock = document.createElement('div');
        div_clock.setAttribute('id','txt');
        div_clock.innerText = 'then() succeed!';
        var mocha_node = document.getElementById('mocha');
        mocha_node.parentNode.insertBefore(div_clock,mocha_node);
        //document.getElementsByTagName("body")[0].setAttribute("onload","startTime()");
      });
      (document.getElementById('txt').innerText).should.equal('then() succeed!')
    });

    /*it(' then() cannot work before resolve(): ', function(){
      asap('').then(function(){
        console.log('failed!');
      });
    });*/
    });

});
