module.exports = function(grunt) {

  grunt.initConfig({

    postcss: {
      options: {
        map: true,
        processors: [
          require('lost')
        ]
      },
      dist: {
        src: 'style-pre.css',
        dest: 'style.css'
      }
    },

    autoprefixer: {
      single_file: {
        src: 'style.css',
        dest: 'style.css'
      }
    },

    watch: {
      files: ['style-pre.css'],
      tasks: ['postcss', 'autoprefixer']
    }

  });

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};
