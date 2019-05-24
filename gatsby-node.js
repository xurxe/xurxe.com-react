const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(`
    {
        allContentfulPage {
            edges {
                node {
                    id
                    slug
                }
            }
        }
        allContentfulCreation {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    `).then(result => {
        result.data.allContentfulPage.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.slug}`,
                component: path.resolve(`./src/templates/page.js`),
                context: {
                    slug: node.id,
                },
            });
        });
        result.data.allContentfulCreation.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.slug}`,
                component: path.resolve(`./src/templates/creation.js`),
                context: {
                    slug: node.id,
                },
            });
        });
    });
};