import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { chunk } from 'lodash';

import { ALL, BASH, DATA_SCIENCE, WEB_DEV } from './constants';
import ProjectCardContainer from '../../containers/ProjectCardContainer';
import { changeProjectFilterTerm } from '../../actions';
import data from './project_data';
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
  while (projects.length > 0) {
    columnList[incVal].push(projects.pop());
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

const Projects = ({
  data,
  changeProjectFilterTerm,
  footerHeight,
  navbarHeight
}) => {
  const [activeItem, setActiveItem] = useState(ALL);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [secondMenuHeight, setSecondMenuHeight] = useState(41.5);
  const ref = useRef(null);

  const updateHeights = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
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
        {renderColumn(data, windowWidth)}
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
