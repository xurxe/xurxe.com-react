import React from "react";
import { graphql } from 'gatsby';

import RootDiv from '../components/RootDiv';
import Header from '../components/Header';

const IndexPage = ({ data }) => {

    const { contentfulIndex } = data;

    const jsx = (
        <RootDiv>
            <Header
            html={contentfulIndex.header.childMarkdownRemark.html}
            ></Header>
            
        </RootDiv>
    );

    return jsx;
};

export default IndexPage;

export const query = graphql`
query {
    contentfulIndex {
        id
        name
        header {
            id
            childMarkdownRemark {
                html
            }
        }
    }
}
`;