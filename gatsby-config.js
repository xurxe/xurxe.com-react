// keep API keys and etc private
require("dotenv").config()

module.exports = {
    siteMetadata: {
        title: `Xurxe Toivo García`,
        description: ``,
        author: `Xurxe Toivo García`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.spaceId,
                accessToken: process.env.accessToken,
            },
        },
        `html-react-parser`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [require(`autoprefixer`)],
            },
        },
        `gatsby-plugin-transition-link`,
    ],
}
