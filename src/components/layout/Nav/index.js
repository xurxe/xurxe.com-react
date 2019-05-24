import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

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
                            <Link
                            key={page.id}
                            to={`/${page.slug}`}
                            className={classNameNavA}
                            >

                                {page.name}

                            </Link>
                        ))}
                    </div>

                    <div
                    className={classNameNavDiv}
                    >
                        {personPages.map(page => (
                            <Link
                            key={page.id}
                            to={`/${page.slug}`}
                            className={classNameNavA}
                            >

                                {page.name}

                            </Link>
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