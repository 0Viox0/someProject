import webpack from 'webpack';
import { BuildOptions } from './types/types';
import { buildDevServer } from './buildDevServer';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
    const isDev = options.mode === 'development';

    const config: webpack.Configuration = {
        entry: options.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.output,
            clean: true,
            publicPath: '/',
        },
        mode: options.mode,
        module: {
            rules: buildLoaders(options),
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'eval-cheap-source-map' : 'source-map',
    };

    return config;
};
