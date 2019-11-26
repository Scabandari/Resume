import React from "react";
import { connect } from "react-redux";

import ProjectList from "./ProjectList";
import data from "./project_data";

const renderColumn = (projectList, filterTag) => {
  return projectList.filter(proj => {
    return proj["tags"].includes(filterTag);
  });
};

const ProjectListContainer = ({ projectsFilterTerm }) => {
  const projectList = renderColumn(data, projectsFilterTerm);

  return <ProjectList data={projectList} />;
};

const mapStateToProps = state => {
  return {
    projectsFilterTerm: state.currentProject.projectsFilterTerm
  };
};

export default connect(mapStateToProps, null)(ProjectListContainer);
