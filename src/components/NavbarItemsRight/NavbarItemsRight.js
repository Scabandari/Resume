import React, { useEffect, useState } from 'react';

import './NavbarItemsRight.scss';

const NavbarItemsRight = (props) => {
  //const [height, setHeight] = useState(0);

  //useEffect(() => {
  //}, []);

  return (
    <>
       visible={sidebarIsShowing}
        >
          <Menu.Item as='a'>
            <Icon name='angle double right' />
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to='/projects'
            name='projects'
            //active={activeItem === 'projects'}
            //onClick={handleItemClick}
          >
            <p>Projects</p>
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to='/techs'
            name='techs'
            // active={activeItem === 'techs'}
            // onClick={handleItemClick}
          >
            <p>Tech</p>
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to='/skills'
            // name='skills'
            // active={activeItem === 'skills'}
            // onClick={handleItemClick}
          >
            <p>Skills</p>
          </Menu.Item>
    </>
  );
};

export default NavbarItemsRight;
