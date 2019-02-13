import React from 'react';
import { bindActionCreators } from "redux";
import { changeDocument } from "../actions";
import connect from "react-redux/es/connect/connect";
import { PROBLEM_STATEMENT, REPORT } from '../components/Projects/constants';
import DocumentNavigation from '../components/DocumentNavigation';


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
        this.props.dispatch(changeDocument(this.state[value]));
    }

    render() {
        return (
            <DocumentNavigation changeDoc={this.handleActionCreator}/>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeDocument }, dispatch);
}

export default connect(mapDispatchToProps)(DocumentNavigationContainer);