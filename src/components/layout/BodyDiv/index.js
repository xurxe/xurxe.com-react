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
            Nav_button___displayNone
            Nav_button___invisible
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___displayBlock 
            Nav_div___visible
            `,
            classNameNavA: `
            NavA
            NavA___desktop
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
            Nav___tucked
            `,
            classNameNavButton: `
            Nav_button 
            Nav_button___displayBlock
            Nav_button___visible
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___displayNone
            Nav_div___invisible
            `,
            classNameNavA: `
            NavA
            NavA___mobile
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
            classNameNavDiv: `
            Nav_div 
            Nav_div___displayBlock 
            Nav_div___invisible
            `,
            classNameNavA: `
            NavA
            NavA___mobile
            `,
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNav: `
                Nav 
                Nav___tucked
                `,
                classNameNavButton: `
                Nav_button 
                Nav_button___displayBlock
                Nav_button___invisible 
                `,
                classNameNavDiv: `
                Nav_div 
                Nav_div___displayNone
                Nav_div___invisible
                `,
                classNameHeaderMainWrapper: `
                HeaderMainWrapper
                HeaderMainWrapper___narrowPadding
                `,
            }));
        }, 500);

        setTimeout(() => {
            this.setState(() => ({
                classNameNavButton: `
                Nav_button 
                Nav_button___displayBlock                Nav_button___visible
                `,
            }));
        }, 550);

        return;
    };

    changeTuckedToDesktop = () => {
        this.setState(() => ({
            desktop: true, 
            classNameNavButton: `
            Nav_button 
            Nav_button___displayBlock
            Nav_button___invisible
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___displayBlock 
            Nav_div___invisible
            `,
            classNameNavA: `
            NavA
            NavA___desktop
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
                Nav_button___displayNone
                Nav_button___invisible
                `,
                classNameHeaderMainWrapper: `
                HeaderMainWrapper
                HeaderMainWrapper___widePadding
                `,
            }));
        }, 500);

        setTimeout(() => {
            this.setState(() => ({
                classNameNavDiv: `
                Nav_div 
                Nav_div___displayBlock
                Nav_div___visible
                `,
            }));
        }, 700);

        return;
    };

    untuck = () => {
        this.setState(() => ({
            tucked: false,
            classNameNav: `
            Nav 
            Nav___untucked
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___displayBlock 
            Nav_div___invisible
            `,
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNavDiv: `
                Nav_div 
                Nav_div___displayBlock 
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
            Nav___tucked
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___displayBlock 
            Nav_div___invisible
            `,
        }));
        
        setTimeout(() => {
            this.setState(() => ({
                classNameNavDiv: `
                Nav_div 
                Nav_div___displayNone
                Nav_div___invisible
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