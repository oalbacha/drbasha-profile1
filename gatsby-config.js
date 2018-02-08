module.exports = {
    siteMetadata: {
        title: `Gatsby DRBASHA`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-typography`,
        {
            resolve: 
            'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
                pathToConfigModule: 'src/utils/typography.js',
            },
        },
        'gatsby-transformer-remark',
    ],
}