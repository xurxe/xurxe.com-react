import React from 'react';
import Parser from 'html-react-parser';
import Img from 'gatsby-image';
import { CSSGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';

import './styles.css';

import OnlinePresence from '../../creation/OnlinePresence';
import Entry from '../Entry';

class Main extends React.Component {

    render() {
        const { page, mainHtml, entries, creation } = this.props;
        let jsx;

        if (page === 'index'
        || page === 'stillness'
        || page === 'movement'
        || page === 'interactivity'
        ) {

            jsx = (
                <main
                className='Main Main_page'>
        
                    <div
                    className='Main_text'
                    >
        
                        {mainHtml && Parser(mainHtml)}
        
                    </div>

                    {entries && 
                    <div
                    className='Main_grid Main_grid___A'
                    >
                        {entries && entries.map(entry => 
                            <div
                            key={entry.id}
                            >
                                <Entry 
                                entry={entry} 
                                ></Entry>
                            </div>
                        )}
                    </div>}
                </main>
            );
        }

        else if (page === 'skills') {

            const Grid = makeResponsive(measureItems(CSSGrid), {
                maxWidth: 1920,
                minPadding: 200
            });

            jsx = (
                <main
                className='Main Main_page'>
        
                    <div
                    className='Main_text'
                    >
        
                        {mainHtml && Parser(mainHtml)}
        
                    </div>

                    {entries && 
                    <Grid
                    gutterWidth={27}
                    gutterHeight={54}
                    duration={500}
                    columnWidth={400}
                    layout={layout.pinterest}
                    className={`Grid___${page}`}
                    >
                        {entries && entries.map(entry => 
                            <div
                            key={entry.id}
                            >
                                <Entry 
                                entry={entry} 
                                ></Entry>
                            </div>
                        )}
                    </Grid>}
                </main>
            );
        }

        else if (page === 'creation'){
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

                <div
                className='Main_creationInfo'>

                    <div>
                        <h3
                        className='H3___creation'
                        >
                            {Parser('stage:&ensp;')}
                        </h3>

                        <span>{progress}</span>
                    </div>

                    <div>
                        <h3 
                        className='H3___creation'
                        >
                            {Parser('my roles:&ensp;')}
                        </h3>

                        <span>{roles.join(', ')}</span>
                            
                    </div>

                    {collaborators && 
                    <div>
                        <h3 
                        className='H3___creation'
                        >
                            {Parser('my collaborators:&ensp;')}
                        </h3>

                            {collaborators.map(collaborator => (
                                <a 
                                href={collaborator.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                >
                                    {collaborator.name}
                                </a>
                            )).reduce((previous, current) => [previous, ', ', current])}
                    </div>}

                </div>

                {text && Parser(text.childMarkdownRemark.html)}

                <Img
                fluid={backImage.fluid}
                className='BackImage'
                ></Img>

                </main>
            );
        }

        else {
            jsx = (
                <main
                className='Main Main_page'>
        
                    <div
                    className='Main_text'
                    >
        
                        {mainHtml && Parser(mainHtml)}
        
                    </div>
                </main>
            )
        }
    
        return jsx;
    };
};

export default Main;