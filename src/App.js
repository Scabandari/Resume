import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Projects from './components/Projects';
import PDF from './components/Projects/PDFs/Pdf';
import EmailForm from './components/EmailForm';
import SkillsExpansionPanel from './containers/SkillsContainer/SkillsExpansionPanel';
import TechnologiesExpansionPanel from './containers/TechnologiesContainer/TechnologiesExpansionPanel';

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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={styles.body}>
          <Switch>
            <Route exact path='/' component={LandingContainer} />
            <Route component={DefaultContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const LandingContainer = () => (
  <div>
    <Route path='/' exact component={Landing} />
  </div>
);

const DefaultContainer = () => (
  <div>
    <Header />
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

export default App;
