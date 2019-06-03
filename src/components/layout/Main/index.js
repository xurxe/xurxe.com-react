import React from 'react';
import Parser from 'html-react-parser';
import Img from 'gatsby-image';

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
                    className='Main_grid Main_grid___B'
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

        else if (page === 'creation'){
            const { onlinePresence, frontImage, progress, roles, collaborators, tools, text, /* creationChildren,  */backImage } = creation;
            
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
                        htmlFor='collaborators'
                        >
                            {Parser('my collaborators:&ensp;')}
                        </h3>

                        <ul
                        id='collaborators'
                        className='ul___creation'
                        >
                            {collaborators.map(collaborator => (

                                <li
                                key={collaborator.id}
                                className='li___creation'
                                >
                                    {collaborator.url && <a 
                                    href={collaborator.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    >
                                        {collaborator.name}
                                    </a>}

                                    {!collaborator.url && collaborator.name}

                                </li>
                            ))}
                        </ul>

                    </div>}

                    <div>
                        <h3 
                        className='H3___creation'
                        htmlFor='tools'
                        >
                            {Parser('made with:&ensp;')}
                        </h3>

                        <ul
                        id='tools'
                        className='ul___creation'
                        >
                            {tools.map((tool, i) => (

                                <li
                                key={i}
                                className='li___creation'
                                >

                                    {tool}

                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

                <div className='Main_text'>

                    {text && Parser(text.childMarkdownRemark.html)}

                </div>

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