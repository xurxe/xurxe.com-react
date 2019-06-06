import React from "react";
import { graphql } from 'gatsby';

import App from '../components/layout/App';

const IndexPage = ({ data }) => {

    const { contentfulIndex } = data;
    const { title, subtitle, main, entries } = contentfulIndex;

    const jsx = (
        <App
        page='index'
        title={title}
        subtitle={subtitle}
        mainHtml={main && main.childMarkdownRemark.html}
        entries={entries}
        ></App>
    );

    return jsx;
};

export default IndexPage;

export const query = graphql`
query {
    contentfulIndex {
        title
        subtitle
        main {
            id
            childMarkdownRemark {
                html
            }
        }
        entries {
            id
            title
            subtitle
            slug
            coverPhoto {
                fluid (maxWidth: 1200, quality: 100) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                }
            }
        }
    }
}
`;