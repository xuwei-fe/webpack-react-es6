var path = require('path');
var webpack = require('webpack');
// 编译后自动打开浏览器
//var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var fs = require('fs');
var srcDir = path.resolve(process.cwd(), 'static');

//获取多页面的每个入口文件，用于配置中的entry
/*function getEntry() {
    var jsPath = path.resolve(srcDir, 'js');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [], files = {};
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        if (matchs) {
            files[matchs[1]] = path.resolve(srcDir, 'js', item);
        }
    });
    return files;
}
getEntry()*/
module.exports = {
	entry:{hello:"./static/js/hello.js"},
	output: {
		path: path.join(__dirname, 'dist'),//__dirname+'./dist',
		filename: '[name].bundle.js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [
      {
        test:/.less$/,
        loaders:['style','css','less']
      },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel'],
				exclude: /node_modules/,
				include: __dirname
			}

		]
	},
	resolve: {
	    extensions: ['', '.js', '.jsx']
	}

};



/*module.exports = {
  devtool: "source-map",	//生成sourcemap,便于开发调试
  entry: getEntry(),		 //获取项目入口js文件
  output: {
    path: path.join(__dirname, "dist/js/"), //文件输出目录
    publicPath: "dist/js/",		//用于配置文件发布路径，如CDN或本地服务器
    filename: "[name].js",		//根据入口文件输出的对应多个文件名
  },
  module: {
    //各种加载器，即让各种文件格式可用require引用
    loaders: [
      // { test: /\.css$/, loader: "style-loader!css-loader"},
      // { test: /\.less$/, loader: "style-loader!csss-loader!less-loader"}
    ]
  },
  resolve: {
    //配置别名，在项目中可缩减引用路径
    alias: {
      jquery: srcDir + "/js/lib/jquery.min.js",
      core: srcDir + "/js/core",
      ui: srcDir + "/js/ui"
    }
  },
  plugins: [
    //提供全局的变量，在模块中使用无需用require引入
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      // nie: "nie"
    }),
    //将公共代码抽离出来合并为一个文件
    new CommonsChunkPlugin('common.js'),
    //js文件的压缩
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};*/