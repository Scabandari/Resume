import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import ProjectList from "./ProjectList";
import { useServer } from "../../hooks";

const filterProjects = (projectList, filterTag) => {
  return projectList.filter(proj => {
    return proj["tags"].includes(filterTag);
  });
};

const ProjectListContainer = () => {
  const projectsFilterTerm = useSelector(
    state => state.currentProject.projectsFilterTerm
  );
  const server = useServer();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(`${server}/resume/projects`);
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  return <ProjectList data={filterProjects(projects, projectsFilterTerm)} />;
};

export default ProjectListContainer;
