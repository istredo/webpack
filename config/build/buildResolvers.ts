import { Configuration } from "mini-css-extract-plugin";



export function buildResolvers(): Configuration['resolve'] {
	return {
		extensions: ['.tsx', '.ts', '.js'],
	}

}