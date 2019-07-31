import React from 'react';
import ProjectCardContainer from '../../containers/ProjectCardContainer';
//import { Grid } from '@material-ui/core';
import data from './project_data';


const Projects = () =>  {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'space-around',
        },
        columns: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '11px',
        },

    };
    //const { projects } = this.state;
    return (
        <div style={styles.container}>
            <div>
                <div style={styles.columns}>
                    {
                        data.column1.map(project => {
                            return (
                                <ProjectCardContainer project = {project} />
                            );
                        })
                    }
                </div>
            </div>

            <div>
                <div style={styles.columns}>
                    {
                        data.column2.map(project => {
                            return (
                                <ProjectCardContainer project = {project} />
                            );
                        })
                    }
                </div>
            </div>

            <div>
                <div style={styles.columns}>
                    {
                        data.column3.map(project => {
                            return (
                                <ProjectCardContainer project = {project} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;

