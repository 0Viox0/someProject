import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';
import path from 'path';

export const buildDevServer = (
    options: BuildOptions,
): DevServerConfiguration => {
    return {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: options.port,
        historyApiFallback: true,
        hot: true,
    };
};
