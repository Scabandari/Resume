import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Projects from '../components/Projects/Projects';
import data from '../components/Projects/project_data';

const renderColumn = (projectList, filterTag) => {
  return projectList.filter(proj => {
    return proj['tags'].includes(filterTag);
  });
};

const ProjectsContainer = ({ projectsFilterTerm }) => {
  const projectList = renderColumn(data, projectsFilterTerm);

  return <Projects data={projectList} />;
};

ProjectsContainer.propTypes = {};

const mapStateToProps = state => {
  return {
    projectsFilterTerm: state.currentProject.projectsFilterTerm
  };
};

export default connect(
  mapStateToProps,
  null
)(ProjectsContainer);
