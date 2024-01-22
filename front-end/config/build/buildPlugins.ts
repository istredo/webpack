import { Configuration } from "mini-css-extract-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/types';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';


export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
	const isDev = options.mode === 'development';
	const isProd = options.mode === 'production';

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({
			template: options.paths.html
		}),

	].filter(Boolean)
	if (isDev) {
		// plugins.push(new webpack.ProgressPlugin())
		//   замедляет сборку
		plugins.push(new ForkTsCheckerWebpackPlugin())
	}
	if (isProd) {
		plugins.push(new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}))
	}

	return plugins

}