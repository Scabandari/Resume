import React from "react";
import {
    ExpansionPanelSummary, ExpansionPanelDetails, Divider, List,
    Typography, ListItem, Chip, ExpansionPanel
} from '@material-ui/core';

import { ExpandIcon } from '../../components';



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
                                        <Typography variant='body1'>{topic.longForm}</Typography>
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