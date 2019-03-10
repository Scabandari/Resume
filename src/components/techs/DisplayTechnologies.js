import React, {Component, Fragment} from "react";
import { Chip } from '@material-ui/core';
import blockchain from "./descriptions/Blockchain";
import ExpandIcon from '../../components/ExpandIcon';
import cloud from './descriptions/Cloud';
import cpp from './descriptions/CPP';
import css from "./descriptions/CSS";
import java from './descriptions/Java';
import git from './descriptions/Git';

import js from './descriptions/Javascript';
import ml from "./descriptions/MachineLearning";
import python from './descriptions/Python';
import sql from './descriptions/SQL';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import {
    ExpansionPanelSummary, ExpansionPanelDetails, Divider, List,
    Typography, ListItem
} from '@material-ui/core';


class DisplayTechnologies extends Component {
    techs = [
        {
            longform: js.longForm,
            tldr: js.tldr,
            headline: 'Javascript',
            chips: js.chips

        },
        {
            longform: python.longForm,
            tldr: python.tldr,
            headline: 'Python',
            chips: python.chips

        },
        {
            longform: java.longForm,
            tldr: java.tldr,
            headline: 'Java',
            chips: java.chips
        },
        {
            longform: cpp.longForm,
            tldr: cpp.tldr,
            headline: 'C++',
            chips: cpp.chips

        },
        {
            longform: sql.longForm,
            tldr: sql.tldr,
            headline: 'SQL',
            chips: sql.chips
        },
        {
            longform: ml.longForm,
            tldr: ml.tldr,
            headline: 'Machine Learning',
            chips: ml.chips
        },
        {
            longform: cloud.longForm,
            tldr: cloud.tldr,
            headline: 'Cloud Deployment',
            chips: cloud.chips
        },
        {
            longform: git.longForm,
            tldr: git.tldr,
            headline: 'Git',
            chips: git.chips
        },
        {
            longform: blockchain.longForm,
            tldr: blockchain.tldr,
            headline: 'Blockchain',
            chips: blockchain.chips
        },
        {
            longform: css.longForm,
            tldr: css.tldr,
            headline: 'CSS',
            chips: css.chips
        },

    ];


    showTechs = this.techs.map(tech => {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandIcon />}>
                    <Typography variant='headline' >{tech.headline}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>
                        <ListItem>
                                {
                                    tech.chips.map(chip => {
                                    return(
                                        <Chip
                                            key={chip.key}
                                            label={chip.label}
                                            style={{margin: 4}}
                                        />
                                    )
                                    })
                                }
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Typography variant='h6' >TLDR;</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='body1'>{tech.tldr}</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Typography variant='h6' >Long Form</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='body1'>{tech.longform}</Typography>
                        </ListItem>
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    });

    render() {
        return(
            <div style={{ width: '100%', padding: 15}}>
                {this.showTechs}
            </div>
        )
    }
}

export default DisplayTechnologies;

