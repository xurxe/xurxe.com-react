import React from "react";
import { graphql } from 'gatsby';

import RootDiv from '../components/RootDiv';
import Header from '../components/Header';
import Main from '../components/Main';

const Page = ({ data }) => {
    const { contentfulPage } = data;
    const { header, main, entries } = contentfulPage;

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
}

export default Page;

export const query = graphql`
query($slug: String!){ 
	contentfulPage (id: { eq: $slug }){
        id
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