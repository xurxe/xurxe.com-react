import React from 'react';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Parser from 'html-react-parser';

import './styles.css';

const CreationLink = ({ entry }) => {
    const { title, subtitle, slug, frontImage} = entry;

    const jsx = (
        <AniLink 
        to={`/${slug}`}
        cover
        direction='right'
        bg={`#7f3fbf`}
        duration={0.8}
        className='Entry CreationLink hvr-overline-from-left___creationLink hvr-underline-from-left___creationLink'
        >
            <Img
            alt=''
            fluid={frontImage.fluid}
            className='CreationLink_img'
            ></Img>

            <div
            className='CreationLink_div'
            >

                <p
                className='CreationLink_p CreationLink_p___title'
                >
                    {Parser(title)}
                </p>

                <p
                className='CreationLink_p CreationLink_p___subtitle'
                >
                    {Parser(subtitle)}
                </p>

            </div>

        </AniLink>
    );

    return jsx;
};

export default CreationLink;