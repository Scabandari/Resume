import React, { useState, useEffect, useRef } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { screenSize } from '../hoc';
import './Navbar.scss';

const getActiveItem = pathName => {
  switch (pathName) {
    case '/techs':
      return 'techs';
    case '/projects':
      return 'projects';
    case '/skills':
      return 'skills';
    default:
      return '';
  }
};

const MenuExampleSecondary = props => {
  const { width } = props;
  const { pathname } = props.location;
  const ref = useRef(null);

  const [activeItem, setActiveItem] = useState(getActiveItem(pathname));
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', updateHeight);
  }, []);

  const updateHeight = () => {
    setHeight(ref.current.clientHeight);
    props.changeNavbarHeight(ref.current.clientHeight);
  };
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div ref={ref} className='navbar-container'>
      <Menu icon inverted size='massive'>
        <Menu.Item header name='Ryan Nichols' />

        <Menu.Item disabled as={NavLink} to='/' name='avsddf'>
          <Icon name='home' />
        </Menu.Item>
        <Menu.Item content={height} />

        {width > 500 && (
          <Menu.Menu position='right'>
            <Menu.Item
              as={NavLink}
              to='/projects'
              name='projects'
              active={activeItem === 'projects'}
              onClick={handleItemClick}
            >
              <p>Projects</p>
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/techs'
              name='techs'
              active={activeItem === 'techs'}
              onClick={handleItemClick}
            >
              <p>Tech</p>
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/skills'
              name='skills'
              active={activeItem === 'skills'}
              onClick={handleItemClick}
            >
              <p>Skills</p>
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    </div>
  );
};

const Navbar = withRouter(props => <MenuExampleSecondary {...props} />);

export default screenSize(Navbar);
