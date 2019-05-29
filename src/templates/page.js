import React from "react";
import { graphql } from 'gatsby';

import BodyDiv from '../components/layout/BodyDiv';

const Page = ({ data }) => {
    const { contentfulPage, contentfulIndex } = data;
    const { slug, title, subtitle, main } = contentfulPage;

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
        title={title}
        subtitle={subtitle}
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
        title
        subtitle
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
            subtitle
            slug
            frontImage {
                id
                fixed (width: 264, quality: 100){
                    base64
                    aspectRatio
                    width
                    height
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                }
            }
        }
    }
}
`