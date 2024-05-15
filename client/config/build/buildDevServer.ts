import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildOptions } from './types/config';

export const buildDevServer = ({ port }: buildOptions): DevServerConfiguration => ({
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
        overlay: false,
    },
});
