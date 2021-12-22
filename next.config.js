/** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
// }
module.exports = {
  future: {
    webpack5: true,
  },
  // webpack: (config) => {
  //   config.resolve.fallback = { 
  //     fs: false,
  //     path: false,
  //     stream: false,
  //     util: false,
  //     http: false,
  //     crypto: false,
  //     https: false,
  //     zlib: false,
  //     querystring: false,
  //     async_hooks: false,
  //     net: false
  //   };

  //   return config;
  // },
  // reactStrictMode: true
};