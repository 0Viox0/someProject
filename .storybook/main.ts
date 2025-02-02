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
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    webpackFinal: async (config) => {
        // we remove all previous svg rules
        const imageRule = config.module?.rules?.find((rule) => {
            const test = (rule as { test: RegExp }).test;

            if (!test) {
                return false;
            }

            return test.test('.svg');
        }) as { [key: string]: unknown };

        imageRule.exclude = /\.svg$/;

        // we add our webpack config
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

        // we load tsconfig plugin to use our global.b.ts file
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
