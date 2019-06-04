import React from 'react';
import Parser from 'html-react-parser';
import Img from 'gatsby-image';

import './styles.css';

import OnlinePresence from '../OnlinePresence';

const CreationChild = ({ creationChild }) => {

    const { childTitle, childImage, childOnlinePresence } = creationChild;

    const jsx = (
        <div
        className='CreationChild'
        >

            <Img
            alt=''
            fluid={childImage.fluid}
            className='CreationChild_img'
            ></Img>

            <div
            className='CreationChild_div'
            >

                <p
                className='CreationChild_p'
                >
                    {Parser(childTitle)}
                </p>

                <OnlinePresence
                onlinePresence={childOnlinePresence}
                modifier='child'
                ></OnlinePresence>

            </div>

        </div>
    );

    return jsx;
};

export default CreationChild;