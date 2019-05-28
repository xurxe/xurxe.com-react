import React from "react";
import { graphql } from 'gatsby';

import BodyDiv from '../components/layout/BodyDiv';

const IndexPage = ({ data }) => {

    const { contentfulIndex } = data;
    const { header, main, entries } = contentfulIndex;

    const jsx = (
        <BodyDiv
        page='index'
        headerHtml={header.childMarkdownRemark.html}
        mainHtml={main && main.childMarkdownRemark.html}
        entries={entries}
        ></BodyDiv>
    );

    return jsx;
};

export default IndexPage;

export const query = graphql`
query {
    contentfulIndex {
        name
        header {
            id
            childMarkdownRemark {
                html
            }
        }
        main {
            id
            childMarkdownRemark {
                html
            }
        }
        entries {
            id
            title
            description
            slug
            coverImage {
                id
                fluid (quality: 100) {
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