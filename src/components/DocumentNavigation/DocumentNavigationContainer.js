import React from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

import DocumentNavigation from './DocumentNavigation';
import { changeDocument, changePage } from "../../actions";
import { PROBLEM_STATEMENT, REPORT } from '../Projects/constants';

class DocumentNavigationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            0: PROBLEM_STATEMENT,
            1: REPORT
        };
        this.handleActionCreator = this.handleActionCreator.bind(this);
    }

    handleActionCreator(value){
        this.props.changeDocument(this.state[value]);
        this.props.changePage(1);
    }

    render() {
        return (
            <DocumentNavigation changeDoc={this.handleActionCreator}/>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        changePage: (page) => dispatch(changePage(page)),
        changeDocument: (doc) => dispatch(changeDocument(doc))
    }
};

export default connect(null, mapDispatchToProps)(DocumentNavigationContainer);