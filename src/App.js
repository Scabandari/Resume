import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import {
    Footer,
    Landing,
    PDF,
    EmailForm,
    SkillsExpansionPanel,
    TechnologiesExpansionPanel,
    Navbar,
    Projects

} from './components';
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
      <Route path='/contact' exact component={EmailForm} />
    </div>
    <Footer />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div style={{}}>
        <Switch>
          <Route exact path='/' component={LandingContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
