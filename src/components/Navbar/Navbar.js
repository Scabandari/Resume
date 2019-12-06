import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { useScreenWidth } from "../../hooks";

const MenuExampleSecondary = ({
  setSidebarShowing,
  sidebarIsShowing,
  location
}) => {
  const { pathname } = location;
  const width = useScreenWidth();

  return (
    <div style={{ backgroundColor: "#000000" }}>
      <Menu icon color="black" inverted size="massive">
        <Menu.Item header name="Ryan Nichols" />

        <Menu.Item disabled as={NavLink} to="/" name="avsddf">
          <Icon name="home" />
        </Menu.Item>

        {(width > 650 && (
          <Menu.Menu position="right">
            <Menu.Item
              as={NavLink}
              to="/project-list"
              name="projects"
              active={pathname === "/project-list"}
            >
              <p>Projects</p>
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/udemy-course-list"
              name="udemy-courses"
              active={pathname === "/udemy-course-list"}
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
