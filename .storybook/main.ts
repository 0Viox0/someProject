import type { StorybookConfig } from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import custom from '../webpack.config';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-webpack5-compiler-babel',
        '@storybook/addon-styling-webpack',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    webpackFinal: async (config) => {
        const withCustomWebpackConfig = {
            ...config,
            module: {
                ...config.module,
                rules: [
                    ...(config.module?.rules ?? []),
                    ...(custom({}).module?.rules ?? []),
                ],
            },
        };

        if (withCustomWebpackConfig.resolve) {
            withCustomWebpackConfig.resolve.plugins = [
                ...(withCustomWebpackConfig.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    extensions: withCustomWebpackConfig.resolve.extensions,
                }),
            ];
        }

        return withCustomWebpackConfig;
    },
};
export default config;
