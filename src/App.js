import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from 'semantic-ui-react';

import {
  Footer,
  Landing,
  PDF,
  ContactForm,
  SkillsExpansionPanel,
  TechnologiesExpansionPanel,
  Navbar,
  Projects,
  ClickAway
} from './components';
import { setSidebarShowing } from './actions';
import './App.scss';

const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  siteContent: {
    flex: '1 0 auto',
    padding: 'var(--space) var(--space) 0',
    width: '100%'
  }
};

const LandingContainer = () => (
  <>
    <Route path='/' exact component={Landing} />
  </>
);

const DefaultContainer = () => (
  <div className='site-container'>
    <Navbar />
    <div style={styles.siteContent}>
      <Route path='/projects' exact component={Projects} />
      <Route path='/pdf' exact component={PDF} />
      <Route path='/skills' exact component={SkillsExpansionPanel} />
      <Route path='/techs' exact component={TechnologiesExpansionPanel} />
      <Route path='/contact' exact component={ContactForm} />
    </div>
    <Footer />
  </div>
);

const App = ({ sidebarIsShowing, setSidebarShowing }) => {
  //const [visible, setVisible] = useState(false);

  return (
    <BrowserRouter>
      <Sidebar.Pushable>
        <ClickAway
          callFunction={setSidebarShowing}
          arg={!sidebarIsShowing}
          condition={sidebarIsShowing}
        >
          {' '}
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            direction='right'
            //items={leftItems}
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
                to='/projects'
                name='projects'
                //active={activeItem === 'projects'}
                onClick={() => setSidebarShowing(false)}
              >
                <p>Projects</p>
              </Menu.Item>
              <Menu.Item
                as={NavLink}
                to='/techs'
                name='techs'
                // active={activeItem === 'techs'}
                onClick={() => setSidebarShowing(false)}
              >
                <p>Tech</p>
              </Menu.Item>
              <Menu.Item
                as={NavLink}
                to='/skills'
                // name='skills'
                // active={activeItem === 'skills'}
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
              <Route exact path='/' component={LandingContainer} />
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
