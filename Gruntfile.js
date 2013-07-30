module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
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
      },
      'travis-cov': {
        options: {
          reporter: 'travis-cov'
        },
        src: ['tests/asapTest.js']
      }
    }
  });

  grunt.registerTask('default', 'mochaTest');
};
