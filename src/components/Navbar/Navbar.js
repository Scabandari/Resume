import React, { useState, useEffect, useRef } from 'react';
import { Icon, Menu, Divider } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { ResponsiveNavbar } from '../../components';
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

const activeItem = {
  '/techs': 'techs',
  '/projects': 'projects',
  '/skills': 'skills'
};

const MenuExampleSecondary = props => {
  // const { width } = props;
  const { pathname } = props.location;
  const ref = useRef(null);

  //   const [activeItem, setActiveItem] = useState(getActiveItem(pathname));
  const [activeItem, setActiveItem] = useState(pathname.substring(1)); // remove leading /

  //TODO this component needs to know the page width before rendering

  const [width, setWidth] = useState(1000);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
  }, []);

  const updateWidth = () => {
    if (ref) {
      setWidth(ref.current.clientWidth);
    }
  };
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div ref={ref} className='navbar-container'>
      <Menu icon inverted size='massive'>
        <Menu.Item header name='Ryan Nichols' />

        <Menu.Item disabled as={NavLink} to='/' name='avsddf'>
          <Icon name='home' />
        </Menu.Item>

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
      {/* <Divider />
      <div className='responsive-navbar'>
        <ResponsiveNavbar />
      </div> */}
    </div>
  );
};

const Navbar = withRouter(props => <MenuExampleSecondary {...props} />);

export default Navbar;
