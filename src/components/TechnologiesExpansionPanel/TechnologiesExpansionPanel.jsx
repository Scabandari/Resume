import React, {Component} from "react";
import { GenericExpansionPanel } from '..';
import techs from './descriptions';


class TechnologiesExpansionPanel extends Component {
    my_techs = [
        techs.js,
        techs.python,
        techs.java,
        techs.cpp,
        techs.sql,
        techs.machine_learning,
        techs.cloud,
        techs.git,
        techs.block_chain,
        techs.css,
    ];


    render() {
        return <GenericExpansionPanel topics={this.my_techs} />
    }
}

export default TechnologiesExpansionPanel;