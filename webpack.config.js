var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist/');

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: {
        main:  APP_DIR + '/index.js',
      },
    output: {
        filename: '[name].[hash].js',
        path: BUILD_DIR,
      },
    devServer: {
        // This is required for older versions of webpack-dev-server
        // if you use absolute 'to' paths. The path should be an
        // absolute path to your build destination.
        outputPath: path.join(__dirname, 'build')
    },
    plugins: [
        new CopyWebpackPlugin([
           // {output}/to/file.txt
           { from:APP_DIR+ '/file.txt', to: BUILD_DIR+'/file.txt' },
           
        ], {
            ignore: [
                // Doesn't copy any files with a txt extension    
               // '*.txt',
                
                // Doesn't copy any file, even if they start with a dot
               // '**/*',

                // Doesn't copy any file, except if they start with a dot
                //{ glob: '**/*', dot: false }
            ],

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        })
    ]
};