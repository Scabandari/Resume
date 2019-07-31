import React, {Component} from "react";
import GenericExpansionPanel from '../../components/GenericExpansionPanel';
import skills from './descriptions';


class SkillsExpansionPanel extends Component {
    my_skills = [
        skills.people,
        skills.leadership,
        skills.foosball,
    ];


    render() {
        return <GenericExpansionPanel topics={this.my_skills} />
    }
}

export default SkillsExpansionPanel;