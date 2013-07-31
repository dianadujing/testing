var doc = document,
      t = doc.createElement("script"),
      s = doc.getElementsByTagName("script")[0];
function loadScript( url, id ) {
    if (url) {
      if (id) {
        if (doc.getElementById(id)) {return;}
        t.id = id;
      }

      t.type = "text/javascript";
      t.async = false;
      t.src = url;
      s.parentNode.insertBefore(t, s);
    }
  }

describe('loadScript', function(){
      it(' should have doc: ', function(){
        expect(doc).to.not.equal(null);
      });

      it(' should have script element: ', function(){
        expect(s).to.not.equal(null);
      });

      it(' should assign value to variables: ', function(){
        loadScript('coverage.html','abc');
        expect(t.id).to.equal('abc');
        console.log(t.src);
        console.log(t.id);

      });
    })
