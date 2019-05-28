import React from "react";
import { graphql } from 'gatsby';

import BodyDiv from '../components/layout/BodyDiv';

const Page = ({ data }) => {
    const { contentfulPage, contentfulIndex } = data;
    const { slug, header, main } = contentfulPage;

    let entries;

    if (
        slug === 'stillness'
        || slug === 'movement'
        || slug === 'interactivity'
    ) {
        entries = contentfulIndex.entries.filter(
            entry => entry.category === slug
        )
    }

    else {
        entries = contentfulPage.entries;
    }

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
    contentfulIndex {
        id
        entries {
            id
            category
            title
            description
            slug
            coverImage {
                id
                fluid(quality: 100) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                }
            }
        }
    }
}
`