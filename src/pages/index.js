import React from "react";
import { graphql } from 'gatsby';

import BodyDiv from '../components/layout/BodyDiv';

const IndexPage = ({ data }) => {

    const { contentfulIndex } = data;
    const { title, subtitle, main, entries } = contentfulIndex;

    const jsx = (
        <BodyDiv
        page='index'
        title={title}
        subtitle={subtitle}
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
            frontImage {
                id
                fixed (width: 264, quality: 100){
                    base64
                    aspectRatio
                    width
                    height
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                }
            }
        }
    }
}
`;