import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import './styles.css';

const Nav = () => {

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
                className='Nav'
                >
    
                    <div>
                        {workPages.map(page => (
                            <Link
                            to={`/${page.slug}`}
                            >

                                {page.name}

                            </Link>
                        ))}
                    </div>

                    <div>
                        {personPages.map(page => (
                            <Link
                            to={`/${page.slug}`}
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