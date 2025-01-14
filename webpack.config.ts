import { buildWebpack } from './config/build/buildWebpack';
import {
    BuildOptions,
    BuildPath,
    EnvironmentVariables,
} from './config/build/types/types';
import path from 'path';

export default (env: EnvironmentVariables) => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
    };

    const options: BuildOptions = {
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths: paths,
    };

    return buildWebpack(options);
};
