import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

import GridA from '../GridA';
import GridB from '../GridB';
import GridC from '../GridC';

class Main extends React.Component {

    state = {
        grid: undefined,
    }

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
            this.setState(() => ({
                grid: GridB,
            })); 
        }

        else if (this.props.page === 'contact') {
            this.setState(() => ({
                grid: GridC,
            })); 
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

                    <div
                    className='Main_grid'
                    >
                        {Grid && <Grid
                        page={page}
                        entries={entries}
                        ></Grid>}
                    </div>
        
                </main>
            );
        }

        else if (creation) {

            const { frontImage, onlinePresence, progress, roles, collaborators, text, creationChildren, backImage } = creation;
            console.log(frontImage, onlinePresence, progress, roles, collaborators, text, creationChildren, backImage);
            
            jsx = (
                <main
                className='Main Main_creation'>



                </main>
            );
        }
    
        return jsx;
    };
};

export default Main;