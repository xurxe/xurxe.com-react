import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

import GridA from '../GridA';
import GridB from '../GridB';
import GridC from '../GridC';

class Main extends React.Component {

    state = {
        entries: undefined,
    }

    componentDidMount = () =>{
        if (
        this.props.page === 'index' 
        || this.props.page === 'stillness'
        || this.props.page === 'movement'
        || this.props.page === 'interactivity'
        ) {
            this.setState(() => ({
                entries: GridA,
            }));        
        }

        else if (this.props.page === 'skills') {
            this.setState(() => ({
                entries: GridB,
            })); 
        }

        else if (this.props.page === 'contact') {
            this.setState(() => ({
                entries: GridC,
            })); 
        }
    }

    render() {

        const { page, mainHtml, entries } = this.props;

        const Entries = this.state.entries;

        const jsx = (
                <main
                className='Main'>
        
                    <div
                    className='Main_text'
                    >
        
                        {mainHtml && Parser(mainHtml)}
        
                    </div>

                    {Entries && <Entries
                    page={page}
                    entries={entries}
                    ></Entries>}
        
                </main>
            );
    
        return jsx;
    };
};

export default Main;