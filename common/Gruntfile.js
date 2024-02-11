module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-json-minify');
    grunt.loadNpmTasks('grunt-minify-html');
    grunt.loadNpmTasks('grunt-string-replace');

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        copy: {
            options: {},
            build: {
                files: [
                    {expand: true, src: ['assets/**/*'], dest: "../_builds/<%= pkg.name %>"},
                    {expand: true, src: ['js/*.js'], dest: "../_builds/<%= pkg.name %>"}
                ]
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: "../_builds/<%= pkg.name %>",
                    src: ['**/*.css', '!*.min.css'],
                    dest: "../_builds/<%= pkg.name %>",
                    ext: '.css'
                }]
            }
        },

        imagemin: {
            build: {
                options: {
                    optimizationLevel: 4
                },
                files: [{
                    expand: true,
                    cwd: "../_builds/<%= pkg.name %>",
                    src: ['assets/**/*.{png,jpg,gif}'],
                    dest: "../_builds/<%= pkg.name %>"
                }]
            }
        },

        "json-minify": {
            build: {
                files: '../_builds/<%= pkg.name %>/**/*.json'
            }
        },

        minifyHtml: {

            options: {
                cdata: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "../_builds/<%= pkg.name %>",
                    src: ['**/*.html'],
                    dest: "../_builds/<%= pkg.name %>"
                }]
            }
        },

        "string-replace": {

            version: {

                files: [{
                    expand: true,
                    cwd: "../_builds/<%= pkg.name %>",
                    src: ['**/*.html', '**/*.js'],
                    dest: "../_builds/<%= pkg.name %>"
                }],
                options: {
                    replacements: [
                        {
                            pattern: /##version##/g,
                            replacement: '<%= pkg.version %>'
                        }]
                }
            }
        }
    });

    grunt.registerTask('build-css', 'Building CSS...', function () {
        grunt.task.run('cssmin');
        grunt.task.run('string-replace:version');
        grunt.task.run('minifyHtml');
        grunt.task.run('copy');
    });

    grunt.registerTask('build', 'Building...', function () {
        grunt.task.run('copy');
        grunt.task.run('imagemin:build');
        grunt.task.run('cssmin');
        grunt.task.run('minifyHtml');
        grunt.task.run('json-minify');
        grunt.task.run('string-replace:version');
    });
};
