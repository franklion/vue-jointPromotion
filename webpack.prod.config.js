const path               = require( 'path' );
const webpack            = require( 'webpack' );
const HtmlWebpackPlugin  = require( 'html-webpack-plugin' );
const ExtractTextPlugin  = require( 'extract-text-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );

module.exports = {
    entry : './src/main.js',
    output : {
        path : path.resolve( __dirname, './dist' ),
        publicPath : "",
        filename : 'build.js'
    },
    module : {
        rules : [
            {
                test : /\.vue$/,
                loader : 'vue',
                options : {
                    loaders : {
                        scss : ExtractTextPlugin.extract( {
                            loader : 'css-loader!sass-loader',
                            fallbackLoader : 'vue-style-loader'
                        } )
                    },
                    sourceMap : true
                }
            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel'
            },
            {
                test : /\.(png|jpe?g|gif|svg)$/,
                loader : 'file',
                options : {
                    publicPath : "",
                    name : 'assets/images/[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve : {
        alias : {
            'vue$' : 'vue/dist/vue'
        }
    },
    devtool : '#source-map',
    plugins : [
        new ExtractTextPlugin( "[name].css" ),
        new webpack.DefinePlugin( {
            'process.env' : {
                NODE_ENV : '"production"'
            }
        } ),
        new webpack.optimize.UglifyJsPlugin( {
            compress : {
                warnings : false
            }
        } ),
        new webpack.LoaderOptionsPlugin( {
            minimize : true
        } ),
        new HtmlWebpackPlugin( {
            filename : 'index.html',
            template : './src/template/index.ejs',
            inject : false
        } ),
        new CleanWebpackPlugin( [ 'dist' ], {
            root : __dirname,
            verbose : true,
            dry : false
        } )
    ]
};

