const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports =  withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"]
})

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    CRYPTO_SECRET_KEY: process.env.CRYPTO_SECRET_KEY,
    CRYPTO_SECRET_IV: process.env.CRYPTO_SECRET_IV,
    QRNG_API_KEY: process.env.QRNG_API_KEY,
  },
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });
    return config;
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/qr',
  //       destination: '/',
  //       permanent: false,
  //     },
  //   ]
  // }
}
