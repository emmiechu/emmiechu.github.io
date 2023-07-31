module.exports = {
  siteMetadata: {
    title: "Emmie Chuthamsatid",
    siteUrl: "https://www.emmiechu.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
        includePaths: [`${__dirname}/node_modules`, `${__dirname}/src/`],
         precision: 8,
        }
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-N0J96WSQTD"
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          // delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 2356793,
        sv: 6,
      },
    },
    // {
    //   resolve: `gatsby-plugin-scroll-reveal`,
    //   options: {
    //       threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
    //       once: true, // Defines if animation needs to be launched once
    //       disable: false, // Flag for disabling animations
          
    //       // Advanced Options
    //       // selector: '[data-sal]', // Selector of the elements to be animated
    //       // animateClassName: 'sal-animate', // Class name which triggers animation
    //       // disabledClassName: 'sal-disabled', // Class name which defines the disabled state
    //       // rootMargin: '0% 50%', // Corresponds to root's bounding box margin
    //       // enterEventName: 'sal:in', // Enter event name
    //       // exitEventName: 'sal:out', // Exit event name
    //   }
    // }
  ],
};
