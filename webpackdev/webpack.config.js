var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
	entry:APP_PATH+'/src/action',
	output:{
		path:BUILD_PATH,
		filename:"index.js"
	},
	plugins:[
		new HtmlwebpackPlugin({
			title:'hello world app'
		})
	],
	devServer: {
	    historyApiFallback: true,
	    hot: true,
	    inline: true,
	    progress: true,
  	},
	module:{
		perLoaders: [
	        {
	            test: /\.jsx?$/,
	            include: APP_PATH,
	            loader: 'jshint-loader'
	        }
	    ],
		loaders:[
			{
				test:/\.less$/,
				loaders:['style','css','less'],
				include:APP_PATH
			},
			{
		        test: /\.jsx?$/,
		        loader: 'babel',
		        include: APP_PATH,
		        query: {
	          		presets: ['es2015']
		        }
	      	},
			{
		        test: /\.(png|jpg)$/,
		        loader: 'url?limit=40000'
	      	}
		]
	},
	devtool: 'eval-source-map',
	jshint: {
	  	"esnext": true
	}
}