module.exports = {
    siteMetadata: {
        title: `Redux Starter`,
        description: `Gatsby starter with redux built in`,
        author: `@squishy123`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `easyread`,
                short_name: `redux-starter`,
                start_url: `/`,
                background_color: `white`,
                theme_color: `white`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        `gatsby-plugin-sass`,
        //resolve paths
        {
            resolve: `gatsby-plugin-create-client-paths`,
            options: {
                prefixes: [`/gallery/*`],
            },
        },
    ],
};
