import React, { useState, useEffect, useRef } from 'react';
import { Icon, Menu, Divider } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { ResponsiveNavbar } from '../../components';
import './Navbar.scss';

const MenuExampleSecondary = ({
  setSidebarShowing,
  sidebarIsShowing,
  location
}) => {
  const { pathname } = location;
  const ref = useRef(undefined); // was null, neither work sometimes not sure why

  const [activeItem, setActiveItem] = useState(pathname.substring(1)); // remove leading /
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
  }, []);

  const updateWidth = () => {
    if (ref.current.clientWidth) {
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

        {(width > 500 && (
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
        )) || (
          <Menu.Menu position='right'>
            <Menu.Item onClick={() => setSidebarShowing(!sidebarIsShowing)}>
              <Icon name='sidebar' />
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    </div>
  );
};

const Navbar = withRouter(props => <MenuExampleSecondary {...props} />);

export default Navbar;
