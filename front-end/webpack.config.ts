import path from 'path';
import webpack from 'webpack';

import { buildWebpack } from './config/build/buildWebpack';
import { BuildPaths } from './config/build/types/types';
import { BuildEnv } from './config/build/types/types'

export default (env: BuildEnv) => {
	const mode = env.mode || 'development';
	const PORT = env.port || 3000;

	const paths: BuildPaths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src')
	}

	const config: webpack.Configuration = buildWebpack({
		port: PORT,
		mode,
		paths
	})

	return config
}