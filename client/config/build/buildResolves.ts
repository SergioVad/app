import webpack from 'webpack';
import { buildOptions } from './types/config';

export const buildResolves = ({ paths }: buildOptions): webpack.ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    modules: [paths.src, 'node_modules'],
    alias: {
        '@': paths.src,
    },
});
