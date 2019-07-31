import React from "react";
import ExpandIcon from './ExpandIcon';
import {
    ExpansionPanelSummary, ExpansionPanelDetails, Divider, List,
    Typography, ListItem, Chip, ExpansionPanel
} from '@material-ui/core';


// skills = [
//     {
//         longform: peopleDescriptions.longForm,
//         tldr: peopleDescriptions.tldr,
//         headline: 'People'
//     },
//     {
//         longform: leadershipDescriptions.longForm,
//         tldr: leadershipDescriptions.tldr,
//         headline: 'Leadership'
//
//     },
//     {
//         longform: foosballDescriptions.longForm,
//         tldr: foosballDescriptions.tldr,
//         headline: 'Foosball'
//     }
// ];

const GenericExpansionPanel = ({ topics }) => {

    const displayChips = chips => {
      return (
          <React.Fragment>
              <ListItem>
                  {
                      chips.map(chip => {
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
          </React.Fragment>
      )
    };

    return(
        <div style={{ width: '100%', padding: 15}}>
            {
                topics.map(topic => {
                    return (
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandIcon />}>
                                <Typography variant='headline' >{topic.headline}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <List>
                                    { topic.chips && displayChips(topic.chips)}
                                    <ListItem>
                                        <Typography variant='h6' >TLDR;</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant='body1'>{topic.tldr}</Typography>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <Typography variant='h6' >Long Form</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant='body1'>{topic.longform}</Typography>
                                    </ListItem>
                                </List>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )
                })
            }
        </div>
    )
};

export default GenericExpansionPanel;