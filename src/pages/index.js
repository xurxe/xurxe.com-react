import React from "react";
import { graphql } from 'gatsby';

import BodyDiv from '../components/layout/BodyDiv';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';

import Helmet from '../components/Helmet';

const IndexPage = ({ data }) => {

    const { contentfulIndex, allContentfulCreation } = data;
    const { header, main } = contentfulIndex;
    const entries = allContentfulCreation.edges;

    const jsx = (
        <BodyDiv>

            <Helmet></Helmet>

            <Header
            html={header.childMarkdownRemark.html}
            ></Header>
 
            <Main
            html={main.childMarkdownRemark.html}
            entries={entries}
            ></Main>
            
        </BodyDiv>
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