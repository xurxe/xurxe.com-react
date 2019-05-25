import React from "react";
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';

import Helmet from '../components/Helmet';

const IndexPage = ({ data }) => {

    const { contentfulIndex, allContentfulCreation } = data;
    const { header, main } = contentfulIndex;
    const entries = allContentfulCreation.edges;

    const jsx = (
        <Layout>

            <Helmet></Helmet>

            <Header
            html={header.childMarkdownRemark.html}
            ></Header>
 
            <Main
            page='index'
            html={main.childMarkdownRemark.html}
            entries={entries}
            ></Main>
            
        </Layout>
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