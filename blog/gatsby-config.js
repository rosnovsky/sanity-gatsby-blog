// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')

const fullConfig = resolveConfig(tailwindConfig)

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteUrl: `https://next.rosnovsky.us`
  },
  polyfill: false,
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-preload-link-crossorigin`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-webpack-bundle-analyser-v2',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://next.rosnovsky.us',
        sitemap: 'https://next.rosnovsky.us/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
        useCdn: true,
        imageOptions: { maxWidth: '800' }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [
                require(`cssnano`)({
                  preset: `default`
                })
              ]
            : [])
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/styles/stles.css`]
      }
    }
  ]
}
