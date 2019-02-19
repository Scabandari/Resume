import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './components/Landing';
import Projects from './components/Projects';
import PDF from './components/Projects/PDFs/Pdf';

const Skills = () => <h1>Skills Comming Soon!</h1>;
const Technologies = () => <h1>Technologies</h1>;

class App extends Component {
    render(){
        return(
            <BrowserRouter >
                <div>
                    <Header />
                    <Route path="/" exact component={Landing} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/pdf" exact component={PDF} />
                    <Route path="/skills" exact component={Skills} />
                    <Route path="/techs" exact component={Technologies} />
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;