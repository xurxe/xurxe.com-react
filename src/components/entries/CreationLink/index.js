import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import './styles.css';

const CreationLink = ({ entry }) => {
    const { title, subtitle, slug, frontImage} = entry;

    const jsx = (
        <Link 
        to={`/${slug}`}
        className='Entry CreationLink hvr-overline-from-left hvr-underline-from-left'
        >
            <Img
            alt=''
            fluid={frontImage.fluid}
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

        </Link>
    );

    return jsx;
};

export default CreationLink;