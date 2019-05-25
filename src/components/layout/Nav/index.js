import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import './styles.css';

const Nav = ({ children, classNameNav, classNameNavDiv, classNameNavA}) => {

    return (
        <StaticQuery 
        query={
            graphql`
            query {
                contentfulNavigationBar {
                    id
                    workPages {
                        id
                        name
                        slug
                    }
                    personPages {
                        id
                        name
                        slug
                    }
                }
            }    
            `
        }
        render={data => {
            const { contentfulNavigationBar } = data;
            const { workPages, personPages } = contentfulNavigationBar;

            const jsx = (
                
                <nav 
                className={classNameNav}
                >
                    { children }
    
                    <div
                    className={classNameNavDiv}
                    >
                        {workPages.map(page => (
                            <AniLink
                            key={page.id}
                            to={`/${page.slug}`}
                            className={classNameNavA}
                            cover
                            direction='right'
                            bg='#7f3fbf'
                            duration={1.5}
                            >

                                {page.name}

                            </AniLink>
                        ))}
                    </div>

                    <div
                    className={classNameNavDiv}
                    >
                        {personPages.map(page => (
                            <AniLink
                            key={page.id}
                            to={`/${page.slug}`}
                            className={classNameNavA}
                            cover
                            direction='right'
                            bg='#7f3fbf'
                            duration={1.5}
                            >

                                {page.name}

                            </AniLink>
                        ))}
                    </div>
    
                </nav>

            );

            return jsx;
        }}
        />
    );
};

export default Nav;