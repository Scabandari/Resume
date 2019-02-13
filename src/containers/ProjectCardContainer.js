import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { changeProject } from '../actions';
import ProjectCard from '../components/Projects/ProjectCard';


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
        this.props.history.push("/projects");
        this.setState({toPDF: true}
        )
        //history.push('/');
    }

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

//export default connect(mapDispatchToProps)(ProjectCardContainer);
export default withRouter(connect(mapDispatchToProps)(ProjectCardContainer));

