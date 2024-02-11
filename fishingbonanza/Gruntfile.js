module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-json-minify');
    grunt.loadNpmTasks('grunt-minify-html');
    grunt.loadNpmTasks('grunt-string-replace');

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {

            '../_builds/<%= pkg.name %>/src/app.js': [
                "src/server/VortexConnection.js",
                "src/game_scenes/GameBaseScene.js",
                "src/game_scenes/GameBonusScene.js",
                "src/game_scenes/GameFreeSpinsScene.js",
                "src/App.js",
                "src/config.js",
            ],
            options: {
                mangle: true,
                beautify: false,
                sourceMap: false,
                report: "min",
                preserveComments: false,
                compress: {
                    drop_console: false
                }
            }
        },

        copy: {

            options: {},
            build: {
                files: [
                    {expand: true, src: ['assets/**/*'], dest: "../_builds/<%= pkg.name %>"},
                    {expand: false, src: ['index-build.html'], dest: '../_builds/<%= pkg.name %>/index.html', filter: 'isFile'},
                    {expand: false, src: ['package.json'], dest: '../_builds/<%= pkg.name %>/package.json', filter: 'isFile'}
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
        },

        watch: {
            code: {
                files: ['./src/**/*.js'],
                tasks: ['build'],
                options: {
                    interrupt: true,
                    debounceDelay: 500
                }
            },
            markup: {
                files: [
                    './src/**/*.html',
                    './src/**/*.css',
                    './assets/**/*.html',
                    './assets/**/*.css'
                ],
                tasks: ['build-css'],
                options: {
                    interrupt: true,
                    debounceDelay: 500
                }
            },
            livereload: {
                options: { livereload: true },
                files: ['../_builds/<%= pkg.name %>"/**/*'],
            },
        }
    });

    grunt.registerTask('build-css', 'Building CSS...', function () {
        grunt.task.run('cssmin');
        grunt.task.run('string-replace:version');
        grunt.task.run('minifyHtml');
        grunt.task.run('copy');
    });

    grunt.registerTask('build', 'Building...', function () {
        grunt.task.run('uglify');
        grunt.task.run('copy');
        grunt.task.run('imagemin:build');
        grunt.task.run('cssmin');
        grunt.task.run('minifyHtml');
        grunt.task.run('json-minify');
        grunt.task.run('string-replace:version');
    });
};
