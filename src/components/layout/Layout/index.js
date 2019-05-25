import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { StaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import './styles.css';

class Layout extends React.Component {

    state = {
        desktop: true,
        tucked: true,
        buttonAriaLabel: 'Open the navigation bar',
        classNameNav: 'Nav',
        classNameNavButton: 'NavButton',
        classNameNavDiv: 'NavDiv',
        classNameHeaderMainWrapper: 'HeaderMainWrapper___desktop',
    };

    renderDesktop = () => {
        this.setState(() => ({
            classNameNav: 'Nav Nav___desktop',
            classNameNavButton: 'NavButton displayNone invisible',
            classNameNavDiv: 'NavDiv displayBlock visible',
            classNameHeaderMainWrapper: 'HeaderMainWrapper___desktop',
        }));
    };

    renderMobile = () => {
        this.setState(() => ({
            desktop: false,
            classNameNav: 'Nav Nav___tucked',
            classNameNavButton: 'NavButton displayBlock visible',
            classNameNavDiv: 'NavDiv displayNone invisible',
            classNameHeaderMainWrapper: ' HeaderMainWrapper___mobile',
        }));
    };

    componentDidMount = () => {
        if (window.matchMedia('(max-width: 600px)').matches) {
            this.renderMobile();
        }

        else {
            this.renderDesktop();
        };
    };

    changeDesktopToTucked = () => {
        this.setState(() => ({
            desktop: false,
            classNameNavDiv: 'NavDiv displayBlock invisible',
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNav: 'Nav Nav___tucked',
                classNameNavButton: 'NavButton displayBlock invisible',
                classNameNavDiv: 'NavDiv displayNone invisible',
                classNameHeaderMainWrapper: 'HeaderMainWrapper___narrowPadding',
            }));
        }, 500);

        setTimeout(() => {
            this.setState(() => ({
                classNameNavButton: 'NavButton displayBlock visible',
            }));
        }, 550);
    };

    changeTuckedToDesktop = () => {
        this.setState(() => ({
            desktop: true, 
            classNameNavButton: 'NavButton displayBlock invisible',
            classNameNavDiv: 'NavDiv displayBlock invisible',
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNav: 'Nav Nav___desktop',
                classNameNavButton: 'NavButton displayNone invisible',
                classNameHeaderMainWrapper: 'HeaderMainWrapper___widePadding',
            }));
        }, 500);

        setTimeout(() => {
            this.setState(() => ({
                classNameNavDiv: 'NavDiv displayBlock visible',
            }));
        }, 700);
    };

    untuck = () => {
        this.setState(() => ({
            tucked: false,
            buttonAriaLabel: 'Close the navigation bar',
            classNameNav: 'Nav Nav___untucked',
            classNameNavDiv: 'NavDiv NavDiv___untucked displayBlock invisible',
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNavDiv: 'NavDiv NavDiv___untucked displayBlock visible',
            }));
        }, 200);
    };

    tuck = () => {
        this.setState(() => ({
            tucked: true,
            buttonAriaLabel: 'Open the navigation bar',
            classNameNavDiv: 'NavDiv NavDiv___untucked displayBlock invisible',
        }));
        
        setTimeout(() => {
            this.setState(() => ({
                classNameNav: 'Nav Nav___tucked',
                classNameNavDiv: 'NavDiv displayNone invisible',
            }));
        }, 200);
    };

    handleWindowResize = () => {
        if (
            this.state.desktop
            && window.matchMedia('(max-width: 600px)').matches
        ) {
            this.changeDesktopToTucked();
        }

        else if (
            !this.state.desktop 
            && this.state.tucked
            && !window.matchMedia('(max-width: 600px)').matches
        ) {
            this.changeTuckedToDesktop();
        }

        else if (
            !this.state.desktop 
            && !this.state.tucked
            && !window.matchMedia('(max-width: 600px)').matches
        ) {
            this.tuck();

            setTimeout(() => {
                this.changeTuckedToDesktop();
            }, 1000);
        };
    };

    handleClick = () => {

        if (this.state.tucked) {
            this.untuck();
        }

        else {
            this.tuck();
        };
    };

    render () {

        return (
            <StaticQuery 
            query={
                graphql`
                query {
                    contentfulNavigationBar {
                        logo {
                            id
                            fixed (quality: 100, width: 144, height: 144) {
                                aspectRatio
                                width
                                height
                                src
                                srcSet
                                srcWebp
                                srcSetWebp
                            }
                        }
                        logoHover {
                            id
                            fixed (quality: 100, width: 144, height: 144) {
                                aspectRatio
                                width
                                height
                                src
                                srcSet
                                srcWebp
                                srcSetWebp
                            }
                        }
                        firstName
                        middleName
                        lastName
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
                const { logo, logoHover, firstName, middleName, lastName, workPages, personPages } = contentfulNavigationBar;
        
                const jsx = (
                    <ReactResizeDetector
                    handleWidth
                    onResize={this.handleWindowResize}
                    refreshMode='throttle'
                    refreshRate={100}
                    >
                    
                        <nav 
                        key='nav'
                        className={this.state.classNameNav}
                        >
                            <button 
                            className={this.state.classNameNavButton}
                            onClick={this.handleClick}
                            aria-label={this.state.buttonAriaLabel}
                            >

                                <img
                                alt='' 
                                src={logoHover.fixed.src}
                                className={`NavButton_img`}
                                />

                                <img
                                alt='' 
                                src={logo.fixed.src}
                                className={`NavButton_img NavButton_img___hover`}
                                />

                            </button>

                            <div
                            className={this.state.classNameNavDiv}
                            >

                                <AniLink
                                to='/'
                                cover
                                direction='right'
                                bg='#7f3fbf'
                                duration={1}
                                className='NavLogo'
                                aria-label='Home'
                                >
                                    <img
                                    alt='' 
                                    src={logo.fixed.src}
                                    className={`NavLogo_img`}
                                    />

                                    <img
                                    alt='' 
                                    src={logoHover.fixed.src}
                                    className={`NavLogo_img NavLogo_img___hover`}
                                    />

                                    <p 
                                    className='NavLogo_name NavLogo_name___first'
                                    >

                                        {firstName}

                                    </p>

                                    <p
                                    className='NavLogo_name NavLogo_name___middle'
                                    >
                                    
                                        {middleName}
                                        
                                    </p>

                                    <p
                                    className='NavLogo_name NavLogo_name___last'
                                    >

                                        {lastName}
                                    
                                    </p>

                                </AniLink>
                            </div>
    
                            <div
                            className={this.state.classNameNavDiv}
                            >
                                {workPages.map(page => (
                                    <AniLink
                                    to={`/${page.slug}`}
                                    cover
                                    direction='right'
                                    bg='#7f3fbf'
                                    duration={1}
                                    key={page.id}
                                    className='NavA'
                                    >
    
                                        {page.name}
    
                                    </AniLink>
                                ))}
                            </div>
    
                            <div
                            className={this.state.classNameNavDiv}
                            >

                                {personPages.map(page => (
                                    <AniLink
                                    to={`/${page.slug}`}
                                    cover
                                    direction='right'
                                    bg='#7f3fbf'
                                    duration={1}
                                    key={page.id}
                                    className='NavA'
                                    >
    
                                        {page.name}
    
                                    </AniLink>
                                ))}
                            </div>
                        </nav>
            
                    <div
                    key='header-and-main'
                    className={this.state.classNameHeaderMainWrapper}
                    >
    
                        {this.props.children}
    
                    </div>
        
                </ReactResizeDetector>
        
                );
        
                return jsx;
            }}
            />
        );
    }
    
};

export default Layout;