import React from 'react';
import Parser from 'html-react-parser';
import Img from 'gatsby-image';

import './styles.css';

import GridA from '../GridA';
import GridB from '../GridB';
import GridC from '../GridC';
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
    }

    render() {
        const { page, mainHtml, entries, creation } = this.props;
        let jsx;

        if (entries) {
            const Grid = this.state.grid;
    
            jsx = (
                <main
                className='Main Main_page'>
        
                    <div
                    className='Main_text'
                    >
        
                        {mainHtml && Parser(mainHtml)}
        
                    </div>

                    {Grid && <div
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
            const { frontImage, onlinePresence, progress, roles, collaborators, text, creationChildren, backImage } = creation;
            
            jsx = (
                <main
                className='Main Main_creation'>

                <Img
                fluid={frontImage.fluid}
                className='FrontImage'
                ></Img>

                <h3>progress:</h3>
                <p>{progress}</p>

                <h3 htmlFor="roles">my roles:</h3>
                <ul id="roles">
                    {roles.map((role, index) => (
                        <li
                        key={index}
                        >
                            {role}
                        </li>
                    ))}
                </ul>

                {collaborators && 
                <div>
                    <h3 htmlFor="collaborators">my collaborators:</h3>
                    <ul id="collaborators">
                        {collaborators.map(collaborator => (
                            <li
                            key={collaborator.id}
                            >
                                <a 
                                href={collaborator.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                >
                                    {collaborator.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>}

                {OnlinePresence && <OnlinePresence
                onlinePresence={onlinePresence}
                ></OnlinePresence>}

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