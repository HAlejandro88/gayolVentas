const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'production', // mode produucion
    entry: './src/Routing.js', // father file form my app
    output: {
        filename: 'bundle.js', // name with minify js custom
        path: path.resolve(__dirname, 'build') // name of directory with contain my project
    },
    module: {
        rules: [
            {
                test: /\.js$/, // all files with contains js
                exclude: /node_modules/, // if more than one directory convert to array
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // plugin with insert my bundle in html
            chunksSortMode: 'none',
            template: 'index.html'
        }),
    ],
};
