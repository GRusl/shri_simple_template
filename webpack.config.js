const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;

const config = {
    entry: {
        about: './src/pages/About.js',
        home: './src/pages/Home.js',
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new StatoscopePlugin({
            saveStatsTo: 'stats.json',
            saveOnlyStats: false,
            open: false,
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            // @TODO js rule
            // @TODO css rule
        ],
    },
    // @TODO optimizations
    // @TODO lodash treeshaking
    // @TODO chunk for lodash
    // @TODO chunk for runtime
    // @TODO fallback for crypto
};

module.exports = config;
