import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";

import { changeProject } from "../../../actions";
// import ProjectCard from './ProjectCard';
import ProjectCard from "./ProjectCard";

class ProjectCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toPDF: false
    };
    this.handleClickActionCreator = this.handleClickActionCreator.bind(this);

    this.cardRef = React.createRef();

    this.state = {
      spans: 25
    };
  }

  handleClickActionCreator(project_key) {
    this.props.dispatch(changeProject(project_key));
    this.props.history.push("/projects");
    this.setState({ toPDF: true });
  }

  componentDidMount() {
    //console.log(this.cardRef);
    this.setState({ spans: Math.ceil(this.cardRef.current.clientHeight / 2) });
  }

  render() {
    if (this.state.toPDF === true) {
      return <Redirect to="/pdf" />;
    }
    const { project } = this.props;
    return (
      <div
        style={{
          height: "auto",
          gridRowEnd: `span ${this.state.spans}`,
          marginBottom: "12px"
        }}
      >
        <div ref={this.cardRef}>
          <ProjectCard
            project={project}
            projectAction={this.handleClickActionCreator}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeProject }, dispatch);
}

export default withRouter(connect(mapDispatchToProps)(ProjectCardContainer));
