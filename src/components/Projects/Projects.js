//import React, { useState } from 'react';
import React from 'react';
import ProjectCardContainer from '../../containers/ProjectCardContainer';

import { Icon, Menu } from 'semantic-ui-react';
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

const renderColumn = projectList => {
  return (
    <div>
      <div style={styles.columns}>
        {projectList.map(project => {
          return <ProjectCardContainer project={project} />;
        })}
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeItem, setActiveItem] = useState('All');
  return (
    <div>
      <div className='second-nav-container'>
        <Menu inverted fluid widths={4}>
          <Menu.Item
            name='All'
            active={activeItem === 'All'}
            onClick={() => console.log('click')}
          />
          <Menu.Item
            name='Web Dev'
            active={activeItem === 'Web Dev'}
            onClick={() => console.log('click')}
          />
          <Menu.Item
            name='Data Science'
            active={activeItem === 'Data Science'}
            onClick={() => console.log('click')}
          />
          <Menu.Item
            name='Bash'
            active={activeItem === 'Bash'}
            onClick={() => console.log('click')}
          />
        </Menu>
      </div>
      <div style={styles.container}>{renderColumn(data)}</div>
    </div>
  );
};

export default Projects;

/////////////

// return (
//     <div style={styles.container}>
//       <div>
//         <div style={styles.columns}>
//           {data.column1.map(project => {
//             return <ProjectCardContainer project={project} />;
//           })}
//         </div>
//       </div>

//       <div>
//         <div style={styles.columns}>
//           {data.column2.map(project => {
//             return <ProjectCardContainer project={project} />;
//           })}
//         </div>
//       </div>

//       <div>
//         <div style={styles.columns}>
//           {data.column3.map(project => {
//             return <ProjectCardContainer project={project} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
