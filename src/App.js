import {BrowserRouter, Route} from "react-router-dom";
import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Landing from './components/Landing';
import Layout from './components/Layout';

const Dashboard = () => <h1>Dashboard</h1>;

//const Landing = () => <h1>Landing</h1>;

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <Layout />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact={true} path="/" component={Landing} />

                </div>
            </BrowserRouter>
        )
    }
}

// todo notice
// null cuz not using mapStateToProps
// actions will be assigned to App component as props
export default connect(null, actions)(App);