import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import './styles.css';

const CreationLink = ({ entry }) => {
    const { id, title, description, slug, coverImage} = entry;

    const jsx = (
        <Link 
        key={id}
        to={`/${slug}`}
        className='Entry CreationLink'
        >
            <Img
            alt=''
            fluid={coverImage.fluid}
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
                className='CreationLink_p CreationLink_p___description'
                >
                    {description} <br />
                </p>

            </div>

        </Link>
    );

    return jsx;
};

export default CreationLink;