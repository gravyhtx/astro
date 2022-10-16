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
