import {BrowserRouter, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './actions';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Cloud from './components/Projects/Cloud';
import PDF from './components/Projects/PDFs/Pdf';

const Dashboard = () => <h1>Dashboard</h1>;

//const Landing = () => <h1>Landing</h1>;

class App extends Component {
    render(){
        return(
            <BrowserRouter >
                <div>
                    <Header />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/" exact component={Landing} />
                    <Route path="/projects/cloud" exact component={Cloud} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/pdf" exact component={PDF} />
                </div>
            </BrowserRouter>
        )
    }
}

// todo notice
// null cuz not using mapStateToProps
// actions will be assigned to App component as props
export default connect(null, actions)(App);