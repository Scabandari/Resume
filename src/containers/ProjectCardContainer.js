import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Chip } from '@material-ui/core'
import { changeProject } from '../actions';
import ProjectCard from '../components/Projects/ProjectCard';
//import {Link} from "react-router-dom";


// TODO pass callback down to ProjectCard, it should call handleClickActionCreator
// TODO which should pass project.report and project.problem_description as payload for action creator
// That way currentProject from reducers should have everything they need and won't likely need currentDocument

// function ProjectCard(props) {
class ProjectCardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toPDF: false
        };

        this.handleClickActionCreator = this.handleClickActionCreator.bind(this);

    }

    handleClickActionCreator (project_key) {
        //console.log(`container projectDesc: ${this.props.currentProject}`);
        console.log(".\n.\n.\nhandleClickActionCreator()");
        this.props.dispatch(changeProject(project_key));
        this.setState({toPDF: true}
        )
        //history.push('/');
    }

    // componentDidMount() {
    //     this.props.dispatch(changeProject({problemDescription: "test", report: "test test"}));
    // }

    render() {

        if (this.state.toPDF === true) {
            return <Redirect to='/pdf' />
        }
        const { project } = this.props;
        console.log(`this.props.project: ${project}`);
        return (
            <ProjectCard project={ project } projectAction={this.handleClickActionCreator} />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeProject }, dispatch);
}

// function mapStateToProps( { currentProject }) {
//     return { currentProject };
// }

export default connect(mapDispatchToProps)(ProjectCardContainer);


//export default connect(mapStateToProps, mapDispatchToProps)(ProjectCardContainer);

//export default withStyles(styles)(ProjectCard);
//export default connect(null, { changeProject })(ProjectCard);