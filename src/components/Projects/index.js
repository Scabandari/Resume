import React from 'react';
import ProjectCardContainer from '../../containers/ProjectCardContainer';
import { Grid } from '@material-ui/core';
import data from './project_data';


const Projects = () =>  {

    //const { projects } = this.state;
    return (
        <div>
            <Grid container>
                {
                    data.map(project => {
                        return (
                            <Grid item>
                                <ProjectCardContainer project = {project} />
                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
};

export default Projects;

