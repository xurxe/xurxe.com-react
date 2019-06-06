import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { StaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import './styles.css';
import '../../common.css'

import Helmet from '../../Helmet';
import Header from '../Header';
import Main from '../Main';

class App extends React.Component {

    // i use the state to manage the rendering of the navigation bar and the wrapper around the header and main
    state = {
        desktop: true,
        tucked: true,
        buttonAriaLabel: 'Open the navigation bar',
        classNameNav: 'Nav',
        classNameNavButton: 'NavButton displayNone invisible',
        classNameNavDiv: 'NavDiv displayNone invisible',
        classNameHeaderMainWrapper: 'HeaderMainWrapper HeaderMainWrapper___desktop',
    };

    // on mount, if the screen size is under 700px, render mobile layout; otherwise, render desktop layout
    componentDidMount = () => window.matchMedia('(max-width: 700px)').matches ? this.renderMobile() : this.renderDesktop();

    renderMobile = () => {
        this.setState(() => ({
            desktop: false,
            classNameNav: 'Nav Nav___tucked',
            classNameNavButton: 'NavButton displayBlock visible',
            classNameNavDiv: 'NavDiv displayNone invisible',
            classNameHeaderMainWrapper: 'HeaderMainWrapper HeaderMainWrapper___mobile',
        }));
    };

    renderDesktop = () => {
        this.setState(() => ({
            classNameNav: 'Nav Nav___desktop Nav___scrollable',
            classNameNavButton: 'NavButton displayNone invisible',
            classNameNavDiv: 'NavDiv displayBlock visible',
            classNameHeaderMainWrapper: 'HeaderMainWrapper HeaderMainWrapper___desktop',
        }));
    };

    // when the window resizes...
    handleWindowResize = () => {

        // if currently on desktop layout, and it's a small screen, transition to mobile layout
        if (
            this.state.desktop
            && window.matchMedia('(max-width: 700px)').matches
        ) {
            this.changeDesktopToMobile();
        }

        // otherwise, if currently on mobile layout, transition to desktop layout
        else if (
            !this.state.desktop 
            && !window.matchMedia('(max-width: 700px)').matches
        ) {
            this.changeMobileToDesktop();
        }
    };

    changeDesktopToMobile = () => {
        this.setState(() => ({
            desktop: false,
            classNameNavDiv: 'NavDiv displayBlock invisible',
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNav: 'Nav Nav___tucked',
                classNameNavButton: 'NavButton displayBlock invisible',
                classNameNavDiv: 'NavDiv displayNone invisible',
                classNameHeaderMainWrapper: 'HeaderMainWrapper HeaderMainWrapper___mobile',
            }));
        }, 500);

        setTimeout(() => {
            this.setState(() => ({
                classNameNavButton: 'NavButton displayBlock visible',
            }));
        }, 550);
    };

    changeMobileToDesktop = () => {
        this.setState(() => ({
            desktop: true, 
            classNameNavButton: 'NavButton displayBlock invisible',
            classNameNavDiv: 'NavDiv NavDiv___untucked displayBlock invisible',
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNav: 'Nav Nav___desktop Nav___scrollable',
                classNameNavButton: 'NavButton displayNone invisible',
                classNameHeaderMainWrapper: 'HeaderMainWrapper HeaderMainWrapper___desktop',
            }));
        }, 500);

        setTimeout(() => {
            this.setState(() => ({
                classNameNavDiv: 'NavDiv displayBlock visible',
            }));
        }, 700);
    };

    // when you click on the button (which is only displayed on mobile), toggle tuck/untuck
    handleClick = () => this.state.tucked ? this.untuck() : this.tuck();

    untuck = () => {
        this.setState(() => ({
            tucked: false,
            buttonAriaLabel: 'Close the navigation bar',
            classNameNav: 'Nav Nav___untucked Nav___scrollable',
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

    render () {
        return (
            // run static query to fetch navigation bar data
            <StaticQuery 
            query={
                graphql`
                query {
                    contentfulNavigationBar {
                        id
                        logo {
                            id
                            fixed (quality: 100, width: 160, height: 160) {
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
                            fixed (quality: 100, width: 160, height: 160) {
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
                            title
                            slug
                        }
                        personPages {
                            id
                            title
                            slug
                        }
                    }
                }   
                `
            }
            render={(data) => {
                const { contentfulNavigationBar } = data;
                const { id, logo, logoHover, firstName, middleName, lastName, workPages, personPages } = contentfulNavigationBar;

                const jsx = (

                    // this component tracks window sizes, and calls the appropriate function
                    <ReactResizeDetector
                    handleWidth
                    width={this.width}
                    onResize={this.handleWindowResize}
                    refreshMode='throttle'
                    refreshRate={100}
                    >

                        <nav 
                        key={id}
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
                                duration={0.8}
                                className='NavLogo'
                                aria-label='Home'
                                >
                                    <img
                                    alt='' 
                                    src={logoHover.fixed.src}
                                    className={`NavLogo_img`}
                                    />

                                    <img
                                    alt='' 
                                    src={logo.fixed.src}
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
                                    key={page.id}
                                    to={`/${page.slug}`}
                                    cover
                                    direction='right'
                                    bg='#7f3fbf'
                                    duration={0.8}
                                    className='NavA hvr-underline-from-left___App'
                                    activeClassName='hvr-underline-from-left___App___active'
                                    >
    
                                        {page.title}
    
                                    </AniLink>
                                ))}
                            </div>
    
                            <div
                            className={this.state.classNameNavDiv}
                            >

                                {personPages.map(page => (
                                    <AniLink
                                    key={page.id}
                                    to={`/${page.slug}`}
                                    cover
                                    direction='right'
                                    bg='#7f3fbf'
                                    duration={0.8}
                                    className='NavA hvr-underline-from-left___App'
                                    activeClassName='hvr-underline-from-left___App___active'
                                    >
    
                                        {page.title}
    
                                    </AniLink>
                                ))}
                            </div>
                        </nav>
            
                        <div
                        key='header-and-main'
                        className={this.state.classNameHeaderMainWrapper}
                        >
        
                            <Helmet></Helmet>

                            <Header
                            title={this.props.title}
                            subtitle={this.props.subtitle}
                            ></Header>

                            <Main
                            page={this.props.page}
                            mainHtml={this.props.mainHtml}
                            entries={this.props.entries}
                            creation={this.props.creation}
                            ></Main>      
                        </div>
            
                    </ReactResizeDetector>
        
                );
                return jsx;
            }}
            />
        );
    } 
};

export default App;