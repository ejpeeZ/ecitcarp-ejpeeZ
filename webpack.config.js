const path = require('path');
var autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
	const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
		template: './client/index.html',
		filename: 'index.html',
		inject: 'body'
})

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{ test: /\.jsx?$/, use: [ { loader: 'babel-loader' } ], exclude: /node_modules/ },
			{
				test: /.css$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}]
			},
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}
