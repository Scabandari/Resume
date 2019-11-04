import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import { ALL, BASH, DATA_SCIENCE, WEB_DEV } from './constants';
import ProjectCardContainer from '../../containers/ProjectCardContainer';
import { changeProjectFilterTerm } from '../../actions';
import data from './project_data';
import './Projects.scss';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  columns: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '11px'
  }
};

// const renderColumn = (projectList, filterTag) => {
//   let projects = projectList.filter(proj => {
//     return proj['tags'].includes(filterTag);
//   });

//   return (
//     <div style={styles.columns}>
//       {projects.map(project => {
//         return <ProjectCardContainer key={project.title} project={project} />;
//       })}
//     </div>
//   );
// };

const renderColumn = projects => {
  return (
    <div style={styles.columns}>
      {projects.map(project => {
        return <ProjectCardContainer key={project.title} project={project} />;
      })}
    </div>
  );
};

const Projects = ({ data, changeProjectFilterTerm }) => {
  useEffect(() => {
    for (let dp of data) {
      console.log(`title: ${dp.title}`);
    }
  }, [data]);

  const [activeItem, setActiveItem] = useState(ALL);

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
      <div style={styles.container}>{renderColumn(data, activeItem)}</div>
    </div>
  );
};

export default connect(
  null,
  { changeProjectFilterTerm }
)(Projects);
