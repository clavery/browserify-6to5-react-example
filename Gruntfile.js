
module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  var to5ify = require("6to5ify");

  grunt.initConfig({
    watch: {
      js: {
        files: ['js/**/*.jsx'],
        tasks: ['browserify']
      }
    },
    browserify: {
      dist: {
        files: {
          'dist/app.js': ['js/**/*.{jsx,js}'],
        },
        options: {
          browserifyOptions: {
            debug: true, // sourcemaps
            extensions: ['.jsx', '.js'] // consider jsx files as modules
          },
          transform: [to5ify]
        }
      }
    }
  });

  grunt.registerTask("default", ["browserify", "watch"]);
};
