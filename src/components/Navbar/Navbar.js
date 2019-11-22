import React, { useState, useEffect, useRef } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { useScreenWidth } from "../../hooks";
import "./Navbar.scss";

const MenuExampleSecondary = ({
  setSidebarShowing,
  sidebarIsShowing,
  location
}) => {
  const { pathname } = location;
  const ref = useRef(undefined); // was null, neither work sometimes not sure why
  const width = useScreenWidth();
  const handleItemClick = () => console.log("nabar items click"); //(e, { name }) => setActiveItem(name);

  return (
    <div ref={ref} className="navbar-container">
      <Menu icon inverted size="massive">
        <Menu.Item header name="Ryan Nichols" />

        <Menu.Item disabled as={NavLink} to="/" name="avsddf">
          <Icon name="home" />
        </Menu.Item>

        {(width > 500 && (
          <Menu.Menu position="right">
            <Menu.Item
              as={NavLink}
              to="/projects"
              name="projects"
              active={pathname === "/projects"}
            >
              <p>Projects</p>
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/udemy-courses"
              name="udemy-courses"
              active={pathname === "/udemy-courses"}
            >
              <p>Udemy</p>
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/techs"
              name="techs"
              active={pathname === "/techs"}
            >
              <p>Tech</p>
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/skills"
              name="skills"
              active={pathname === "/skills"}
            >
              <p>Skills</p>
            </Menu.Item>
          </Menu.Menu>
        )) || (
          <Menu.Menu position="right">
            <Menu.Item onClick={() => setSidebarShowing(!sidebarIsShowing)}>
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    </div>
  );
};

const Navbar = withRouter(props => <MenuExampleSecondary {...props} />);

export default Navbar;
