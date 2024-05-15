import { buildOptions } from '../types/config';

interface buildBabelLoaderProps extends buildOptions {
    isTsx: boolean;
}

export function buildBabelLoader(options : buildBabelLoaderProps) {
    const { isTsx, isDev } = options;
    return (
        {
            test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['@babel/preset-env'],
                    plugins:
                    [
                        [
                            '@babel/plugin-transform-typescript',
                            {
                                isTsx,
                            },
                        ],
                        isDev && require.resolve('react-refresh/babel'),
                    ]
                        .filter(Boolean),
                },
            },
        });
}
