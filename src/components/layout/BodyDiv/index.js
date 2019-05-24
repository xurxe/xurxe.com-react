import React from 'react';
import ReactResizeDetector from 'react-resize-detector';

import './styles.css';

import Nav from '../Nav';

class RootDiv extends React.Component {

    state = {
        desktop: true,
        tucked: true,
        classNameNav: `
        Nav
        `,
        classNameNavButton: `
        NavButton
        `,
        classNameNavDiv: `
        NavDiv
        `,
        classNameNavA: `
        NavA
        `,
        classNameHeaderMainWrapper: `
        HeaderMainWrapper
        `,
    }

    renderDesktop = () => {
        this.setState(() => ({
            classNameNav: `
            Nav 
            Nav___desktop
            `,
            classNameNavButton: `
            Nav_button 
            Nav_button___desktop
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___desktop 
            Nav_div___visible
            `,
            classNameHeaderMainWrapper: `
            HeaderMainWrapper
            HeaderMainWrapper___widePadding
            `,
        }));
    }

    renderMobile = () => {
        this.setState(() => ({
            desktop: false,
            classNameNav: `
            Nav 
            Nav___mobile 
            Nav___tucked
            `,
            classNameNavButton: `
            Nav_button 
            Nav_button___mobile 
            Nav_p___visible
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___tucked
            `,
            classNameHeaderMainWrapper: `
            HeaderMainWrapper
            HeaderMainWrapper___narrowPadding
            `,
        }));
    }

    componentDidMount = () => {
        if (window.matchMedia('(max-width: 600px)').matches) {
            this.renderMobile();
        }

        else {
            this.renderDesktop();
        }
    }

    changeDesktopToTucked = () => {
        this.setState(() => ({
            desktop: false,
            classNameNavButton: `
            Nav_button 
            Nav_button___desktop 
            Nav_button___invisible
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___desktop 
            Nav_div___invisible
            `,
            classNameHeaderMainWrapper: `
            HeaderMainWrapper
            HeaderMainWrapper___narrowPadding
            `,
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNav: `
                Nav 
                Nav___mobile 
                Nav___tucked
                `,
                classNameNavButton: `
                Nav_button 
                Nav_button___mobile 
                Nav_p___invisible
                `,
                classNameNavDiv: `
                Nav_div 
                Nav_div___tucked
                `,
            }));
        }, 500);

        setTimeout(() => {
            this.setState(() => ({
                classNameNavButton: `
                Nav_button 
                Nav_button___mobile 
                Nav_button___visible
                `,
            }));
        }, 550);

        return;
    };

    changeTuckedToDesktop = () => {
        this.setState(() => ({
            desktop: true, 
            tucked: true,
            classNameNavButton: `
            Nav_button 
            Nav_button___invisible
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___untucked 
            Nav_div___invisible
            `,
            classNameHeaderMainWrapper: `
            HeaderMainWrapper
            HeaderMainWrapper___widePadding
            `,
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNav: `
                Nav 
                Nav___desktop
                `,
                classNameNavButton: `
                Nav_button 
                Nav_button___desktop
                `,
                classNameNavDiv: `
                Nav_div 
                Nav_div___desktop
                Nav_div___visible
                `,
            }));
        }, 500);

        return;
    };

    untuck = () => {
        this.setState(() => ({
            tucked: false,
            classNameNav: `
            Nav 
            Nav___mobile 
            Nav___untucked
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___untucked 
            Nav_div___invisible
            `,
            classNameHeaderMainWrapper: `
            HeaderMainWrapper
            HeaderMainWrapper___widePadding
            `,
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNavDiv: `
                Nav_div 
                Nav_div___untucked 
                Nav_div___visible
                `,
            }));
        }, 300);

        return;
    };

    tuck = () => {
        this.setState(() => ({
            tucked: true,
            classNameNav: `
            Nav 
            Nav___mobile 
            Nav___tucked
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___untucked 
            Nav_div___invisible
            `,
            classNameHeaderMainWrapper: `
            HeaderMainWrapper
            HeaderMainWrapper___narrowPadding
            `,
        }));
        
        setTimeout(() => {
            this.setState(() => ({
                classNameNavDiv: `
                Nav_div 
                Nav_div___untucked 
                Nav_div___tucked
                `,
            }));
        }, 300);

        return;
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

        const jsx = (
            <ReactResizeDetector
            handleWidth
            onResize={this.handleWindowResize}
            refreshMode='throttle'
            refreshRate={100}
            >
                    
                <div 
                className='RootDiv'>
        
                    <Nav
                    classNameNav={this.state.classNameNav}
                    classNameNavDiv={this.state.classNameNavDiv}
                    classNameNavA={this.state.classNameNavA}
                    classNameNavButton={this.state.classNameNavButton}
                    handleClick={this.handleClick}
                    >

                        <button 
                        className={this.state.classNameNavButton}
                        onClick={this.handleClick}
                        ></button>

                    </Nav>
        
                    <div
                    className={this.state.classNameHeaderMainWrapper}
                    >
        
                        {this.props.children}
        
                    </div>
        
                </div>
            </ReactResizeDetector>
        );
    
        return jsx;
    }
    
};

export default RootDiv;