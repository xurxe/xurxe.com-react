import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { CSSGrid, layout } from 'react-stonecutter';

import './styles.css';

class GridD extends React.Component {

    state = {
        columns: 3,
    }

    calculateColumns = () => {
        if (window.matchMedia('(max-width: 600px)').matches) {
            this.setState(() => ({
                columns: 1,
            }));
        }

        else if (window.matchMedia('(max-width: 850px)').matches) {
            this.setState(() => ({
                columns: 2,
            }));
        }

        else {
            this.setState(() => ({
                columns: 3,
            }));
        }
    }

    componentDidMount = () => {
        this.calculateColumns();
    }

    render(){

        const { page, progress, roles, collaborators } = this.props;
        
        const jsx = (

            <ReactResizeDetector
            handleWidth
            width={this.width}
            onResize={this.calculateColumns}
            refreshMode='throttle'
            refreshRate={100}
            >
                <CSSGrid
                columns={this.state.columns}
                columnWidth={180}
                itemHeight={150}
                gutterWidth={18}
                gutterHeight={18}
                layout={layout.simple}
                duration={500}
                className={`Grid___${page}`}
                >
                    {progress && 
                    <div>
                        <h3
                        className='H3____creations'
                        >
                            progress:
                        </h3>

                        <p>{progress}</p>
                    </div>}

                    {roles && 
                    <div>
                        <h3 
                        htmlFor="roles"
                        className='H3____creations'
                        >
                            my roles:
                        </h3>

                        <ul id="roles">
                            {roles.map((role, index) => (
                                <li
                                key={index}
                                >
                                    {role}
                                </li>
                            ))}
                        </ul>

                    </div>}

                    {collaborators && 
                    <div>
                        <h3 
                        htmlFor="collaborators"
                        className='H3____creations'
                        >
                            my collaborators:
                        </h3>

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
    
                </CSSGrid>
            </ReactResizeDetector>
        );

        return jsx;
    };
};

export default GridD;