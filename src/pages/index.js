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
            key={header.id}
            html={header.childMarkdownRemark.html}
            ></Header>
 
            <Main
            key={main.id}
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