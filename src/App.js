import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './components/Landing';
import Projects from './components/Projects';
import PDF from './components/Projects/PDFs/Pdf';
import EmailForm from './components/EmailForm';
import TechsExpansionPanel from './components/techs/TechsExpansionPanel';
import SkillsExpansionPanel from './components/skills/SkillsExpansionPanel';

//const Skills = () => <h1>Skills Coming Soon!</h1>;
//const Technologies = () => <h1>Technologies Coming Soon!</h1>;
//const Contact = () => <h1>Contact Us Coming Soon!</h1>;


class App extends Component {

    render(){
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
        return(
            <BrowserRouter >
                <div style={styles.body} >
                    <div style={styles.siteContent}>
                        <Header />
                        <Route path="/" exact component={Landing} />
                        <Route path="/projects" exact component={Projects} />
                        <Route path="/pdf" exact component={PDF} />
                        <Route path="/skills" exact component={SkillsExpansionPanel} />
                        <Route path="/techs" exact component={TechsExpansionPanel} />
                        <Route path="/contact" exact component={EmailForm} />
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;