module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        __filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: 'babel-loader'
            }
        ]
    }
};
