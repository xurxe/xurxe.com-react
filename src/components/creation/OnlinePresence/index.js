import React from 'react';
import Parser from 'html-react-parser';
import { StaticQuery, graphql } from 'gatsby';

import './styles.css';

const OnlinePresence = ({ onlinePresence }) => {

    const staticQuery = (<StaticQuery 
            query={
                graphql`
                query {
                    allContentfulSocialMediaProfile {
                        edges {
                            node {
                                name
                                fontAwesomeIcon
                            }
                        }
                    }
                } 
                `
            }
            render={(data) => {
                const { allContentfulSocialMediaProfile } = data;
                const socialMediaProfiles = allContentfulSocialMediaProfile.edges;
                console.log(allContentfulSocialMediaProfile.edges);


                const checkIcon = (name) => {

                    let fontAwesomeIcon;
                    const match = socialMediaProfiles.filter(profile => profile.node.name === name)

                    if (match.length === 1) {
                        fontAwesomeIcon = match[0].node.fontAwesomeIcon;
                    }

                    else {
                        fontAwesomeIcon = '<i class="fas fa-external-link-alt"></i>'
                    }

                    return fontAwesomeIcon;
                }
    
                const jsx = (
                    onlinePresence.map(presence => (
                        <a 
                        key={presence.id}
                        href={presence.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='OnlinePresence'
                        >

                            {Parser(checkIcon(presence.name))}

                        </a> 
                    ))                 
                );
                return jsx;
            }}
            />
        );

    return staticQuery;
};

export default OnlinePresence;