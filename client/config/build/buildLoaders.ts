import webpack from 'webpack';
import { buildOptions } from './types/config';
import { buildCssLoader } from './loaders/cssLoader';
import { buildBabelLoader } from './loaders/babelLoader';

export const buildLoaders = (options: buildOptions): webpack.RuleSetRule[] => {
    const cssLoader = buildCssLoader(options);
    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodebabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const svgLoader = {
        exclude: /node_modules/,
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const IMGLoader = {
        exclude: /node_modules/,
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
    };

    return [
        cssLoader,
        IMGLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodebabelLoader,
    ];
};
