describe('loadScript', function(){
  it('should assign load a new script: ', function(){
    asap.loadScript('coverage.html','abc');
    var scrpt = document.getElementById('abc');
    (scrpt.id).should.equal('abc');
    console.log(scrpt.src);
    console.log(scrpt.id);
  });
});
