import React from 'react';
import Parser from 'html-react-parser';
import Img from 'gatsby-image';

import './styles.css';

import GridA from '../GridA';
import GridB from '../GridB';
import GridC from '../GridC';
import GridD from '../GridD';
import OnlinePresence from '../../creation/OnlinePresence';

class Main extends React.Component {

    state = {grid: null}

    componentDidMount = () =>{
        if (
        this.props.page === 'index' 
        || this.props.page === 'stillness'
        || this.props.page === 'movement'
        || this.props.page === 'interactivity'
        ) {
            this.setState(() => ({
                grid: GridA,
            }));        
        }

        else if (this.props.page === 'skills') {
            this.setState(() => ({grid: GridB})); 
        }

        else if (this.props.page === 'contact') {
            this.setState(() => ({grid: GridC})); 
        }

        else if (this.props.page === 'creation') {
            this.setState(() => ({grid: GridD})); 
        }
    }

    render() {
        const { page, mainHtml, entries, creation } = this.props;
        const Grid = this.state.grid;
        let jsx;

        if (entries) {
    
            jsx = (
                <main
                className='Main Main_page'>
        
                    <div
                    className='Main_text'
                    >
        
                        {mainHtml && Parser(mainHtml)}
        
                    </div>

                    {Grid && 
                    <div
                    className='Main_grid'
                    >
                        <Grid
                        page={page}
                        entries={entries}
                        ></Grid>

                    </div>}
                </main>
            );
        }

        else if (creation) {
            const { frontImage, progress, roles, collaborators, onlinePresence, text, /* creationChildren,  */backImage } = creation;
            
            jsx = (
                <main
                className='Main Main_creation'>

                {onlinePresence && 
                <div
                className='Main_onlinePresence'
                >
                    <OnlinePresence
                    onlinePresence={onlinePresence}
                    ></OnlinePresence>
                </div>}

                <Img
                fluid={frontImage.fluid}
                className='FrontImage'
                ></Img>

                {Grid && 
                <div
                className='Main_grid'
                >
                    <Grid
                    page={page}
                    progress={progress}
                    roles={roles}
                    collaborators={collaborators}
                    ></Grid>

                </div>}


                {text && Parser(text.childMarkdownRemark.html)}

                <Img
                fluid={backImage.fluid}
                className='BackImage'
                ></Img>

                </main>
            );
        }

        else if (!entries && !creation) {
            jsx = (
                <main
                className='Main Main_page'>
        
                    <div
                    className='Main_text'
                    >
        
                        {mainHtml && Parser(mainHtml)}
        
                    </div>
                </main>
            );
        };
    
        return jsx;
    };
};

export default Main;