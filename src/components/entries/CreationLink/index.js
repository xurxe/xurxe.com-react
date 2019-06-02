import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';

import './styles.css';

const CreationLink = ({ entry }) => {
    const { title, subtitle, slug, frontImage} = entry;

    const jsx = (
        <AniLink 
        cover
        direction='right'
        bg='#7f3fbf'
        to={`/${slug}`}
        duration={0.8}
        className='Entry CreationLink hvr-overline-from-left hvr-underline-from-left'
        >
            <Img
            alt=''
            fixed={frontImage.fixed}
            className='CreationLink_img'
            fadeIn={false}
            ></Img>

            <div
            className='CreationLink_div'
            >

                <p
                className='CreationLink_p CreationLink_p___title'
                >
                    {title} <br />
                </p>

                <p
                className='CreationLink_p CreationLink_p___subtitle'
                >
                    {subtitle} <br />
                </p>

            </div>

        </AniLink>
    );

    return jsx;
};

export default CreationLink;