module.exports = {
  entry: __dirname + '/index.js',
  output: {
    path: __dirname +'/builds',
    filename: 'bundle.js',
  },
  module: {
  	loaders: [
  		{
  			test: /\.js$/,
  			loader: 'babel-loader',
  			include: __dirname
  		},
  		{
  			test: /\.css$/,
  			loader: 'style-loader!css-loader',
  			include: __dirname
  		},
  		{
  			test: /\.html$/,
  			loader: 'html-loader',
  			include: __dirname
  		}
  	]
  }
};
