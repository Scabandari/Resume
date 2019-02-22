import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCardContainer from '../../containers/ProjectCardContainer';
import { Grid } from '@material-ui/core';
import { showNavButtons }  from '../../actions';
import data from './project_data';



class Projects extends Component  {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("componentDidMount()");
        this.props.showNavButtons(true);
    }

    render() {
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
    }
}

//export default Projects;

const mapDispatchToProps = dispatch => {
    return { showNavButtons: truthy => dispatch(showNavButtons(truthy)) };
};

export default connect(null, mapDispatchToProps)(Projects) ;