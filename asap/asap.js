// ASAP Library
// Will load before jQuery
// Does it need jQuery? Do we use jQuery's defers and resolves, promises and dones?
// Is this just a pub/sub system?

// use case
/*
    add omniture to registry
    omniture tags are waiting to fire
    asap loads omniture asynchronously
    page waits for omniture to be ready
    omniture loads
    asap announces omniture is ready
    omniture fires off tags
*/
(function( undefined ) {
  "use strict";

  var registry = {};

  function register( name ) {
    if (registry[name] === undefined) {
      registry[name] = {
        name: name,
        callbacks: [],
        results: {},
        ready: false
      };
    }
    return registry[name];
  }

  function regQueue( names, entryName ) {
    var name = names.shift(),
      myEntry = asap(name);

      myEntry.then(function( results ) {
        for (var r in results) {
          register(entryName).results[r] = results[r];
        }

      if (names.length) {
        regQueue(names, entryName);
    } else {
        asap(entryName).resolve();
      }
      });
    }

  function asap() {
    // TODO: support comma/space-separated string (eg "framework checkout" or "framework, checkout" in addition to "framework", "checkout")
    var regEntry,
      args = Array.prototype.slice.call(arguments),
      name = args.sort().join(",").toLowerCase();

    if (args.length === 0) {
      throw "No name to register";
    }

    regEntry = register(name);

    if (args.length > 1) {
      regQueue(args, name);
    }

    var api = {
      "resolve": function( val, refresh ) {
        if (refresh || !regEntry.ready) {
          // resolving: set ready to true and triggering event with message
          regEntry.ready = true;
          if (val != null) {
            regEntry.results[regEntry.name] = val;
          }
          // run callback queue
          for (var i = 0, j = regEntry.callbacks.length; i < j; i++) {
            // try {
              regEntry.callbacks[i](regEntry.results);
            // } catch (err) {}
          }
        }
        return api;
      },
      "then": function( cb ) {
        if (typeof cb === "function") {
          regEntry.callbacks.push(cb);

          if (regEntry.ready) {
            // try {
              cb(regEntry.results);
            // } catch (err) {}
          }
        }
        return api;
      }
    };
    return api;
  }

  asap.loadScript = function( url, id ) {
    if (url) {
      var doc = document,
      t = doc.createElement("script"),
      s = doc.getElementsByTagName("script")[0];

      if (id) {
        if (doc.getElementById(id)) {return;}
        t.id = id;
      }

      t.type = "text/javascript";
      // Keep script order!
      t.async = false;
      t.src = url;
      s.parentNode.insertBefore(t, s);
    }
  };

  this.asap = asap;
}).call(this);
