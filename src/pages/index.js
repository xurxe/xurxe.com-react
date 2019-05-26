import React from "react";
import { graphql } from 'gatsby';

import Helmet from '../components/Helmet';

import BodyDiv from '../components/layout/BodyDiv';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';

const IndexPage = ({ data }) => {

    const { contentfulIndex, allContentfulCreation } = data;
    const { header, main } = contentfulIndex;
    const entries = allContentfulCreation.edges;

    const jsx = (
        <BodyDiv>

            <Helmet></Helmet>

            <Header
            key={header.id}
            html={header.childMarkdownRemark.html}
            ></Header>
 
            <Main
            key={main.id}
            page='index'
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