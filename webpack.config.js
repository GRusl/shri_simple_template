const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;

const config = {
    entry: {
        index: './src/index.jsx',
        about: './src/pages/About.js',
        home: './src/pages/Home.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        }),
        new StatoscopePlugin({
            saveReportTo: 'statoscope.html',
            saveStatsTo: 'stats.json',
            saveOnlyStats: false,
            open: false,
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env', '@babel/preset-react'] },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', "css-loader"],
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        fallback: { 'stream': require.resolve('stream-browserify') },
        modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'node_modules/react-redux/node_modules')],
    },
    mode: 'production',
    optimization: {
        minimize: true,
        moduleIds: 'deterministic',
        innerGraph: true,
        concatenateModules: true,
    },
    // @TODO optimizations
    // @TODO lodash treeshaking
    // @TODO chunk for lodash
    // @TODO chunk for runtime
    // @TODO fallback for crypto

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};

module.exports = config;
