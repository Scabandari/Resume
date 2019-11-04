import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import { ALL, BASH, DATA_SCIENCE, WEB_DEV } from './constants';
import ProjectCardContainer from '../../containers/ProjectCardContainer';
import { changeProjectFilterTerm } from '../../actions';
import data from './project_data';
import './Projects.scss';

const styles = {
  //   container: {
  //     display: 'flex',
  //     justifyContent: 'space-around'
  //   },
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

const Projects = ({
  data,
  changeProjectFilterTerm,
  footerHeight,
  navbarHeight
}) => {
  const [activeItem, setActiveItem] = useState(ALL);
  const [windowHeight, setWindowHeight] = useState(650);
  const [secondMenuHeight, setSecondMenuHeight] = useState(41.5);
  const ref = useRef(null);

  const updateHeights = () => {
    setWindowHeight(window.innerHeight);
    setSecondMenuHeight(ref.current.clientHeight);
  };
  useEffect(() => {
    window.addEventListener('resize', updateHeights);
  }, []);

  return (
    <div>
      <div ref={ref} className='second-nav-container'>
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
          justifyContent: 'space-around',
          minHeight: `${windowHeight -
            (navbarHeight + secondMenuHeight + footerHeight)}px`
        }}
      >
        {renderColumn(data, activeItem)}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    navbarHeight: state.navbar.height,
    footerHeight: state.footer.height
  };
};

export default connect(
  mapStateToProps,
  { changeProjectFilterTerm }
)(Projects);
