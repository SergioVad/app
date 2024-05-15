import webpack from 'webpack';

export type BuildMode = webpack.Configuration['mode']

export type BuildPort = number | string;

export type BuildAanalyze = string;

export interface BuildEnv {
    port: BuildPort,
    mode: BuildMode,
    apiUrl: string,
}

export interface BuildPaths {
    entry: string,
    build: string,
    html: string,
    src: string,
}

export interface buildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: BuildPort,
    apiUrl: string,
}
