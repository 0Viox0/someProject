import { Configuration } from 'webpack';

export const buildResolvers = (): Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            components: '/src/components',
            pages: '/src/pages',
            shared: '/src/shared',
            ui: '/src/ui',
            modules: '/src/modules',
            '@redux': '/src/redux',
        },
    };
};
