// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },
  env: {
    SANITY_TOKEN: process.env.SANITY_TOKEN,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
})
