module.exports = {
  siteMetadata: {
    title: `Home Craft`,
    description: `A small, residential drafting and design firm based in Kelowna, BC, offering services primarily in the Okanagan and Southern Ontario. We focus on contemporary style homes where your needs and desires are combined with a function forward design principle. Our work is primarily new home design, additions, and renovations.`,
    author: `Chris Skomorowski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          default: `${__dirname}/src/components/layout.js`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto"],
        },
        custom: {
          families: ["BigNoodleTitling"],
          urls: ["fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Home Craft`,
        short_name: `hcraft`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/homecraft-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
