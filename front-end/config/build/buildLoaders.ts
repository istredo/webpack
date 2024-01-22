import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
	const isDev = options.mode === 'development';


	const imageLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	}
	const svgLoader = {
		test: /\.svg$/i,
		use: [{
			loader: '@svgr/webpack',
			options: {
				icon: true,
				svgoConfig: {
					plugins: [
						{
							name: 'convertColors',
							params: {
								currentColor: true,
							}
						}
					]
				}
			}
		}],
	}

	// const cssLoaderModules = {
	// 	test: /\.css$/i,
	// 	loader: "css-loader",
	// 	options: {
	// 		modules: true,
	// 	},
	// }
	const cssLoaderModules = {
		test: /\.css$/i,
		loader: "css-loader",
		options: {
			modules: {
				localIdentName: isDev ? "[path][name]__[local]" : '[hash:base64:5]'
			}
		}
	}

	const scssLoader = {
		test: /\.(sa|sc|c)ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			'css-loader',
			"postcss-loader",
			"sass-loader",
		],
	}
	const tsLoader = {
		test: /\.tsx?$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'ts-loader',
				options: {
					transpileOnly: !!isDev
				}
			}
		]
	}
	return [
		// cssLoaderModules,
		imageLoader,
		svgLoader,
		scssLoader,
		tsLoader
	]

}