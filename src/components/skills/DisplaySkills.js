import React, {Component} from "react";
import peopleDescriptions from "./descriptions/People";
import leadershipDescriptions from './descriptions/Leadership';
import foosballDescriptions from './descriptions/Foosball';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandIcon from '../ExpandIcon';
import {
    ExpansionPanelSummary, ExpansionPanelDetails, Divider, List,
    Typography, ListItem
} from '@material-ui/core';


class DisplaySkills extends Component {
    skills = [
        {
            longform: peopleDescriptions.longForm,
            tldr: peopleDescriptions.tldr,
            headline: 'People'
        },
        {
            longform: leadershipDescriptions.longForm,
            tldr: leadershipDescriptions.tldr,
            headline: 'Leadership'

        },
        {
            longform: foosballDescriptions.longForm,
            tldr: foosballDescriptions.tldr,
            headline: 'Foosball'
        }
    ];

    showSkills = this.skills.map(skill => {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandIcon />}>
                    <Typography variant='headline' >{skill.headline}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>
                        <ListItem>
                            <Typography variant='h6' >TLDR;</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='body1'>{skill.tldr}</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Typography variant='h6' >Long Form</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='body1'>{skill.longform}</Typography>
                        </ListItem>
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    });

    render() {
        return(
                <div style={{ width: '100%', padding: 15}}>
                    {this.showSkills}
                </div>
            )
    }
}

export default DisplaySkills;

