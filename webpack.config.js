const path = require("path")
const DIST_DIR = path.resolve(__dirname,'dist')
const SRC_DIR = path.resolve(__dirname,'src')

const config = {
    entry : SRC_DIR + '/app/index.js' ,
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }

};

module.exports = config;