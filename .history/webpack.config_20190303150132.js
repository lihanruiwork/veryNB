const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname + 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'html auto'
        })
    ],
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [ 
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}