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

        // we load tsconfig plugin to use our global.b.ts file
        if (config.resolve) {
            config.resolve.plugins = [
                ...(config.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    extensions: config.resolve.extensions,
                }),
            ];
        }

        // we add our webpack config
        const withCustomWebpackConfig = {
            ...config,
            module: {
                ...config.module,
                rules: [
                    ...(config.module?.rules ?? []),
                    ...(custom({ mode: 'development' }).module?.rules ?? []),
                ],
            },
        };

        return withCustomWebpackConfig;
    },
};
export default config;
