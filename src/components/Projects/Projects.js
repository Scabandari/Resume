import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { cloneDeep } from 'lodash';

import { ALL, BASH, DATA_SCIENCE, WEB_DEV } from './constants';
import ProjectCardContainer from './ProjectCard/ProjectCardContainer';
import { changeProjectFilterTerm } from '../../actions';
import './Projects.scss';

const styles = {
  columns: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '11px'
  }
};

const renderColumn = (projects, screenWidth) => {
  let columns;
  let columnList;
  let incVal = 0;
  if (screenWidth > 1300) {
    columns = 3;
    columnList = [[], [], []];
  } else if (screenWidth > 850) {
    columns = 2;
    columnList = [[], []];
  } else {
    columns = 1;
    columnList = [[]];
  }

  const localProjects = cloneDeep(projects);
  // distribute projects evenly among columns
  while (localProjects.length > 0) {
    columnList[incVal].push(localProjects.pop());
    incVal = (incVal + 1) % columns;
  }

  return (
    <>
      {columnList.map((col, index) => {
        return (
          <div key={index} style={styles.columns}>
            {col.map(project => {
              return (
                <ProjectCardContainer key={project.title} project={project} />
              );
            })}
          </div>
        );
      })}
    </>
  );
};

const Projects = ({ data, changeProjectFilterTerm }) => {
  const [activeItem, setActiveItem] = useState(ALL);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
  }, []);

  return (
    <div>
      <div className='second-nav-container'>
        <Menu inverted stackable fluid widths={4}>
          <Menu.Item
            name={ALL}
            active={activeItem === ALL}
            onClick={(e, { name }) => {
              setActiveItem(name);
              changeProjectFilterTerm(name);
            }}
          />
          <Menu.Item
            name={WEB_DEV}
            active={activeItem === WEB_DEV}
            onClick={(e, { name }) => {
              setActiveItem(name);
              changeProjectFilterTerm(name);
            }}
          />
          <Menu.Item
            name={DATA_SCIENCE}
            active={activeItem === DATA_SCIENCE}
            onClick={(e, { name }) => {
              setActiveItem(name);
              changeProjectFilterTerm(name);
            }}
          />
          <Menu.Item
            name={BASH}
            active={activeItem === BASH}
            onClick={(e, { name }) => {
              setActiveItem(name);
              changeProjectFilterTerm(name);
            }}
          />
        </Menu>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        {renderColumn(data, windowWidth)}
      </div>
    </div>
  );
};


export default connect(
  null, 
  { changeProjectFilterTerm }
)(Projects);
