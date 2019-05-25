import React from "react";
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';


const Page = ({ data }) => {
    const { contentfulPage } = data;
    const { slug, header, main, entries } = contentfulPage;

    const jsx = (
        <Layout>
            <Header
            html={header.childMarkdownRemark.html}
            ></Header>

            <Main
            page={slug}
            html={main.childMarkdownRemark.html}
            entries={entries}
            ></Main>
            
        </Layout>
    );

    return jsx;
}

export default Page;

export const query = graphql`
query($slug: String!){ 
	contentfulPage (id: { eq: $slug }){
        id
        slug
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
        entries {
            __typename
            ... on ContentfulSkillCategory {
                id
                name
                skills {
                    id
                    name
                    level
                }
            }
        }
    }
}
`