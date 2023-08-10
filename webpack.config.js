const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
// eslint-disable-next-line no-unused-vars
module.exports = (_, argv) => ({
    output: {
        publicPath: argv.mode == "development" ? 
            "http://localhost:3001/":
            "http://app.learn-coding.xyz:3001/",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 3001,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "emp_root",
            filename: "remoteEntry.js",
            remotes: {
                emp_header: argv.mode == "development" ?
                    "emp_header@http://localhost:3004/remoteEntry.js":
                    "emp_header@http://app.learn-coding.xyz:3004/remoteEntry.js",
                emp_footer: argv.mode == "development" ? 
                    "emp_footer@http://localhost:3005/remoteEntry.js":
                    "emp_footer@http://app.learn-coding.xyz:3005/remoteEntry.js",
                emp_container: argv.mode == "development" ? 
                    "emp_container@http://localhost:3002/remoteEntry.js":
                    "emp_container@http://app.learn-coding.xyz:3002/remoteEntry.js",
            },
            exposes: {
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
                "react-redux": {
                    singleton: true,
                    requiredVersion: deps["react-redux"],
                },
                "@reduxjs/toolkit": {
                    singleton: true,
                    requiredVersion: deps["@reduxjs/toolkit"],
                }
            },
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
});
