const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		popup: path.join(__dirname, "src/popup/index.tsx"),
		background: path.join(__dirname, "src/background.ts")
	},
	output: {
		path: path.join(__dirname, "dest"),
		filename: "js/[name].js"
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.tsx?$/,
				use: "ts-loader"
			},
			{
				exclude: /node_modules/,
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader" // Creates style nodes from JS strings
					},
					{
						loader: "css-loader" // Translates CSS into CommonJS
					},
					{
						loader: "sass-loader" // Compiles Sass to CSS
					}
				]
			}
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					context: "./src",
					from: "./**/*!(.ts|.tsx|.js)",
					to: "./",
					force: true
				}
			]
		})
	]
};
