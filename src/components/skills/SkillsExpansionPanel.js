import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { ExpansionPanelSummary, ExpansionPanelDetails, Divider, List,
    Typography, ListItem} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import { JsChips, PythonChips, GitChips, JavaChips, CppChips } from './chips';
import { PeopleTldr, PeopleLf, LeadershipTldr, LeadershipLf, FoosballTldr, FoosballLf } from './descriptions';
// TODO this badly needs a refactor. Way too much repetition

const styles = theme => ({
    root: {
        width: '100%',
        padding: 15
    }
});

function SkillsExpansionPanel(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant='headline' >People Skills</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>
                        <ListItem>
                            <Typography variant='h6' >TLDR;</Typography>
                        </ListItem>
                        <ListItem>
                            <PeopleTldr />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Typography variant='h6' >Long Form</Typography>
                        </ListItem>
                        <ListItem>
                            <PeopleLf />
                        </ListItem>
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant='headline' >Leadership Skills</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>
                        <ListItem>
                            <Typography variant='h6' >TLDR;</Typography>
                        </ListItem>
                        <ListItem>
                            <LeadershipTldr />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Typography variant='h6' >Long Form</Typography>
                        </ListItem>
                        <ListItem>
                            <LeadershipLf />
                        </ListItem>
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant='headline' >Foosball Skills</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>
                        <ListItem>
                            <Typography variant='h6' >TLDR;</Typography>
                        </ListItem>
                        <ListItem>
                            <FoosballTldr />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Typography variant='h6' >Long Form</Typography>
                        </ListItem>
                        <ListItem>
                            <FoosballLf />
                        </ListItem>
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

SkillsExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillsExpansionPanel);