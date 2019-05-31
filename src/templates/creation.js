import React from "react";
import { graphql } from 'gatsby';

import BodyDiv from '../components/layout/BodyDiv';

const Creation = ({ data }) => {
    const { contentfulCreation } = data;
    const { title, subtitle, frontImage, onlinePresence, progress, roles, collaborators, text, creationChildren, backImage } = contentfulCreation;

    const creation = {
        frontImage: frontImage,
        onlinePresence: onlinePresence,
        progress: progress,
        roles: roles,
        collaborators: collaborators,
        text: text,
        creationChildren: creationChildren,
        backImage: backImage,
    }

    const jsx = (
        <BodyDiv
        page='creation'
        title={title}
        subtitle={subtitle}
        creation={creation}
        ></BodyDiv>
    );

    return jsx;
}

export default Creation;

export const query = graphql`
query($slug: String!){ 
	contentfulCreation (id: { eq: $slug }){
        id
        title
        subtitle
        frontImage {
            fluid (maxWidth: 1200, quality: 100) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
            }
        }
        onlinePresence {
            id
            name
            url
        }
        progress
        roles
        collaborators {
            id
            name
            url
        }
        text {
            childMarkdownRemark {
                html
            }
        }
        creationChildren {
            id
            childTitle
            childImage {
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
            childOnlinePresence {
                id
                name
                url
            }
        }
        backImage {
            fluid (maxWidth: 1200, quality: 100) {
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
`