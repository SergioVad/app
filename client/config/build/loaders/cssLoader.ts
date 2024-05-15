import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildOptions } from '../types/config';

export const buildCssLoader = ({isDev}: buildOptions) => {
    return (
        {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath: string) => resPath.includes('.module.'),
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        },
                    },
                }
            ],
        });
};