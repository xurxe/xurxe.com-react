import React from "react";
import { graphql } from 'gatsby';

import RootDiv from '../components/RootDiv';
import Header from '../components/Header';
import Main from '../components/Main';

const IndexPage = ({ data }) => {

    const { contentfulIndex, allContentfulCreation } = data;
    const { header, main } = contentfulIndex;
    const entries = allContentfulCreation.edges;


    const jsx = (
        <RootDiv>
            <Header
            html={header.childMarkdownRemark.html}
            ></Header>
 
            <Main
            html={main.childMarkdownRemark.html}
            entries={entries}
            ></Main>
            
        </RootDiv>
    );

    return jsx;
};

export default IndexPage;

export const query = graphql`
query {
    contentfulIndex {
        name
        header {
            childMarkdownRemark {
                html
            }
        }
        main {
            childMarkdownRemark {
                html
            }
        }
    }
    allContentfulCreation {
        edges {
            node {
                id
                title
            }
        }
    }
}
`;