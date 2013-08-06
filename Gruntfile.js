module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['tests/asapTest.js']
      },
      'html-cov': {
        options: {
          reporter: 'html-cov',
          quiet: true,
          captureFile: 'coverage.html'
        },
        src: ['tests/asapTest.js']
      }
<<<<<<< HEAD
      /*,
      'travis-cov': {
        options: {
          reporter: 'travis-cov'
        },
        src: ['tests/asapTest.js']
      }*/
    },
    mocha_phantomjs: {
    all: ['tests/*.html']
    },
=======
      // ,
      // 'travis-cov': {
      //   options: {
      //     reporter: 'travis-cov'
      //   },
      //   src: ['tests/asapTest.js']
      // }
    },
    mocha_phantomjs: {
      all: ['tests/*.html']
    }
>>>>>>> 5fbed65ad194a849c195ee227750df6eff5e3fe7
  });
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');

  grunt.registerTask('default', ['mocha_phantomjs','mochaTest']);
  //grunt.registerTask('default');
};
