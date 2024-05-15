import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';
import { buildPlugins } from './config/build/buildPlugins';
import { buildLoaders } from './config/build/buildLoaders';
import { buildResolves } from './config/build/buildResolves';
import { buildDevServer } from './config/build/buildDevServer';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve('src', 'index.tsx'),
        build: path.resolve('build'),
        html: path.resolve('public', 'index.html'),
        src: path.resolve('src'),
    };

    const mode: BuildMode = env.mode || 'development';

    const isDev = mode === 'development';

    const port = env.port || 3000;

    const apiUrl = env.apiUrl || 'http://45.8.251.11:8000';

    const options = {
        paths,
        mode,
        isDev,
        port,
        apiUrl,
    };

    const config: webpack.Configuration = {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    };
    return config;
};
