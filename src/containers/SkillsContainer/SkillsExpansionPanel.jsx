import React, {Component} from "react";
import GenericExpansionPanel from '../../components/GenericExpansionPanel';
import peopleDescriptions from "./descriptions/People";
import leadershipDescriptions from './descriptions/Leadership';
import foosballDescriptions from './descriptions/Foosball';


class SkillsExpansionPanel extends Component {
    skills = [
        {
            longform: peopleDescriptions.longForm,
            tldr: peopleDescriptions.tldr,
            headline: peopleDescriptions.title,
        },
        {
            longform: leadershipDescriptions.longForm,
            tldr: leadershipDescriptions.tldr,
            headline: leadershipDescriptions.title,

        },
        {
            longform: foosballDescriptions.longForm,
            tldr: foosballDescriptions.tldr,
            headline: foosballDescriptions.title,
        }
    ];


    render() {
        return <GenericExpansionPanel topics={this.skills} />
    }
}

export default SkillsExpansionPanel;