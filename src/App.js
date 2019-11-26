import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Sidebar } from "semantic-ui-react";

import {
  Footer,
  Landing,
  PDF,
  SkillsExpansionPanel,
  TechnologiesExpansionPanel,
  Navbar,
  ProjectListContainer,
  ClickAway,
  UdemyCourseList
} from "./components";
import {
  UdemyCourseCreate,
  ProjectCreate,
  ContactForm
} from "./components/forms";
import { setSidebarShowing } from "./actions";
import "./App.scss";

const styles = {
  body: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  siteContent: {
    flex: "1 0 auto",
    padding: "var(--space) var(--space) 0",
    width: "100%"
  }
};

const LandingContainer = () => (
  <>
    <Route path="/" exact component={Landing} />
  </>
);

const DefaultContainer = () => (
  <div className="site-container">
    <Navbar />
    <div style={styles.siteContent}>
      <Route path="/project-list" exact component={ProjectListContainer} />
      <Route path="/project-create" exact component={ProjectCreate} />
      <Route path="/pdf" exact component={PDF} />
      <Route path="/skills" exact component={SkillsExpansionPanel} />
      <Route path="/techs" exact component={TechnologiesExpansionPanel} />
      <Route path="/contact" exact component={ContactForm} />
      <Route path="/udemy-course-create" exact component={UdemyCourseCreate} />
      <Route path="/udemy-course-list" exact component={UdemyCourseList} />
    </div>
    <Footer />
  </div>
);

const App = ({ sidebarIsShowing, setSidebarShowing }) => {
  return (
    <BrowserRouter>
      <Sidebar.Pushable>
        <ClickAway
          callFunction={setSidebarShowing}
          arg={!sidebarIsShowing}
          condition={sidebarIsShowing}
        >
          {" "}
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            direction="right"
            vertical
            visible={sidebarIsShowing}
          >
            <Menu.Menu>
              <Menu.Item>
                <p> </p>
              </Menu.Item>
              <Menu.Item>
                <p> </p>
              </Menu.Item>
              <Menu.Item>
                <p> </p>
              </Menu.Item>
              <Menu.Item>
                <p> </p>
              </Menu.Item>
              <Menu.Item
                as={NavLink}
                to="/project-list"
                name="projects"
                onClick={() => setSidebarShowing(false)}
              >
                <p>Projects</p>
              </Menu.Item>
              <Menu.Item
                as={NavLink}
                to="/udemy-course-list"
                name="udemy-courses"
                onClick={() => setSidebarShowing(false)}
              >
                <p>Udemy</p>
              </Menu.Item>
              <Menu.Item
                as={NavLink}
                to="/techs"
                name="techs"
                onClick={() => setSidebarShowing(false)}
              >
                <p>Tech</p>
              </Menu.Item>
              <Menu.Item
                as={NavLink}
                to="/skills"
                onClick={() => setSidebarShowing(false)}
              >
                <p>Skills</p>
              </Menu.Item>
            </Menu.Menu>
          </Sidebar>
        </ClickAway>
        <Sidebar.Pusher>
          <div>
            <Switch>
              <Route exact path="/" component={LandingContainer} />
              <Route component={DefaultContainer} />
            </Switch>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return {
    sidebarIsShowing: state.navbar.sidebarIsShowing
  };
};

export default connect(mapStateToProps, { setSidebarShowing })(App);
