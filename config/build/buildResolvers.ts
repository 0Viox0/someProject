import { Configuration } from 'webpack';

export const buildResolvers = (): Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            components: '/src/components',
            features: '/src/features',
            pages: '/src/pages',
            shared: '/src/shared',
            '@redux': '/src/redux',
        },
    };
};
