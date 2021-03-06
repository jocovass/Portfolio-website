/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Joco | Front-End Developer',
    description:
      "I'm Joco, a self taught Front-End Developer based in Liverpool.",
    author: 'Joco',
    siteUrl: 'http://jococodes.com',
    social: {
      twitter: 'CodesJoco',
      linkedin: 'jozsef-vass-1204231a5',
      codepen: 'jocovass',
      github: 'jocovass',
      email: 'joco.codes@gmail.com',
    },
    imageShare: 'share.png',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-149385336-1',
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Merriweather`,
            variants: ['300', '300i', '400', '400i', '700', '900'],
          },
          {
            family: `Poppins`,
            variants: ['100', '300', '300i', '400', '700', '900'],
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, `src`, `content`),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              // linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer noopener',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joco | Front-End Developer`,
        short_name: `Joco-codes`,
        icon: 'src/images/icon.png',
        icons: [
          {
            src: 'images/app-icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'images/app-icon-big.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        start_url: `/`,
        background_color: `#00416A`,
        theme_color: `#00416A`,
        display: `standalone`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
