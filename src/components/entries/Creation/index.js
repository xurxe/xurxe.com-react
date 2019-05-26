import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import './styles.css';

const Creation = (props) => {
    const { entry } = props;
    const { id, title, slug, coverImage} = entry;

    const jsx = (
        <Link 
        key={id}
        to={`/${slug}`}
        className='Entry Entry___creation'
        >
            <Img
            alt=''
            fluid={coverImage.fluid}
            className='Creation_img'
            ></Img>

            <p
            className='Creation_p'
            >
                {title}
            </p>

        </Link>
    );

    return jsx;
};

export default Creation;