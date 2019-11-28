import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
//import { connect } from "react-redux";

import ProjectList_ from "./ProjectList_";
//import ProjectList from "./ProjectList";
import { useServer, useWatcher } from "../../hooks";
import data from "./project_data";

const renderColumn = (projectList, filterTag) => {
  return projectList.filter(proj => {
    return proj["tags"].includes(filterTag);
  });
};

const ProjectListContainer_ = () => {
  const projectsFilterTerm_ = useSelector(
    state => state.currentProject.projectsFilterTerm
  );
  const server = useServer();
  const [projects, setProjects] = useState([]);
  useWatcher(projects);

  //const projectList = renderColumn(data, projectsFilterTerm_);
  const projectList = renderColumn(data, projects); // won't work, no tags yet

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(`${server}/resume/projects`);
      console.log(JSON.stringify(response.data));
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  //return <ProjectList_ data={projectList} />;
  return <ProjectList_ data={projects} />;
};

// const mapStateToProps = state => {
//   return {
//     projectsFilterTerm: state.currentProject.projectsFilterTerm
//   };
// };

// export default connect(mapStateToProps, null)(ProjectListContainer_);
export default ProjectListContainer_;
