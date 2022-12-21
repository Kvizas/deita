require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  token: process.env.STRAPI_TOKEN,
  collectionTypes: ['medziaga', 'disciplina', 'kategorija', 'knyga'],
  singleTypes: [],
  cache: false,
};

module.exports = {

  siteMetadata: {
    title: `Deita`,
    siteUrl: `http://localhost:8000`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, {
      resolve: `gatsby-source-strapi-graphql`,
      options: strapiConfig,
    }, "gatsby-plugin-mdx", {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          formats: ['auto', 'avif'],
          quality: 100,
        },
      }
    }, "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "STRAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "strapi",
        // Url to query from
        url: "http://0.0.0.0:1337/graphql",
      },
    }
  ]
};