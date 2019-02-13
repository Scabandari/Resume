import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import PDF from './components/Projects/PDFs/Pdf';

const Dashboard = () => <h1>Dashboard</h1>;

class App extends Component {
    render(){
        return(
            <BrowserRouter >
                <div>
                    <Header />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/" exact component={Landing} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/pdf" exact component={PDF} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;