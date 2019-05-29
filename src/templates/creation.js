/* import React from "react";
import { graphql } from 'gatsby';

import BodyDiv from '../components/layout/BodyDiv';

const Creation = ({ data }) => {
    const { contentfulCreation } = data;
    const { slug, header, main } = contentfulCreation;

    const jsx = (
        <BodyDiv
        page={slug}
        headerHtml={header.childMarkdownRemark.html}
        mainHtml={main && main.childMarkdownRemark.html}
        entries={entries}
        ></BodyDiv>
    );

    return jsx;
}

export default Creation;

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
` */