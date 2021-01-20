const withSourceMaps = require('@zeit/next-source-maps');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withSourceMaps({
    webpack(config, options) {
      if (!options.isServer) {
        config.resolve.alias['@sentry/node'] = '@sentry/browser';
      }
      config.plugins.push(
        new webpack.EnvironmentPlugin(localEnv || process.env)
      );
      return config;
    },
    async redirects() {
      return [
        {
          source: '/reviews/:slug',
          destination: '/posts/:slug',
          permanent: true,
        },
      ];
    },
  })
);
