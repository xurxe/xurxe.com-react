import React from "react";
import { graphql } from 'gatsby';

import Helmet from '../components/Helmet';

import BodyDiv from '../components/layout/BodyDiv';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';

const Page = ({ data }) => {
    const { contentfulPage } = data;
    const { slug, header, main, entries } = contentfulPage;

    const jsx = (
        <BodyDiv>

            <Helmet></Helmet>

            <Header
            html={header.childMarkdownRemark.html}
            ></Header>

            {main && <Main
            page={slug}
            html={main.childMarkdownRemark.html}
            entries={entries}
            ></Main>}

            {!main && <Main
            page={slug}
            entries={entries}
            ></Main>}
            
        </BodyDiv>
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
            ... on ContentfulEmail {
                id
                name
                address
                fontAwesomeIcon
            }
            ... on ContentfulSocialMediaProfile {
                id
                name
                profileUrl
                fontAwesomeIcon
            }
        }
    }
}
`