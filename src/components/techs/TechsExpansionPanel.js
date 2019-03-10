// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import { ExpansionPanelSummary, ExpansionPanelDetails, Divider, List,
//     Typography, ListItem} from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { JsChips, PythonChips, GitChips, JavaChips, CppChips,
//     SqlChips, MachineLearningChips, BlockchainChips, CloudChips} from './chips';
// import { JsTldr, JsLf, PythonTldr, PythonLf, GitTldr, GitLf,
//     CssTldr, CssLf, JavaTldr, JavaLf, CppTldr, CppLf,
//     MlTldr, MlLf, SqlTldr, SqlLf, BlockchainTldr, BlockchainLf,
//     CloudTldr, CloudLf } from './descriptions';
// // TODO this badly needs a refactor. Way too much repetition
//
// const styles = theme => ({
//     root: {
//         width: '100%',
//         padding: 15
//     }
// });
//
// function TechsExpansionPanel(props) {
//     const { classes } = props;
//     return (
//         <div className={classes.root}>
//             <ExpansionPanel>
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography variant='headline' >Javascript</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <List>
//                         <ListItem>
//                             <JsChips />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >TLDR;</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <JsTldr />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >Long Form</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <JsLf />
//                         </ListItem>
//                     </List>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel>
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography variant='headline' >Python</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <List>
//                         <ListItem>
//                             <PythonChips />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >TLDR;</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <PythonTldr/>
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >Long Form</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <PythonLf/>
//                         </ListItem>
//                     </List>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel>
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography variant='headline' >SQL</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <List>
//                         <ListItem>
//                             <SqlChips />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >TLDR;</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <SqlTldr/>
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >Long Form</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <SqlLf/>
//                         </ListItem>
//                     </List>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel>
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography variant='headline' >Machine Learning</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <List>
//                         <ListItem>
//                             <MachineLearningChips />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >TLDR;</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <MlTldr/>
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >Long Form</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <MlLf />
//                         </ListItem>
//                     </List>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel>
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography variant='headline' >Blockchain</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <List>
//                         <ListItem>
//                             <BlockchainChips />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >TLDR;</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <BlockchainTldr/>
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >Long Form</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <BlockchainLf />
//                         </ListItem>
//                     </List>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel>
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography variant='headline' >Cloud Deployment</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <List>
//                         <ListItem>
//                             <CloudChips />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >TLDR;</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <CloudTldr/>
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >Long Form</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <CloudLf />
//                         </ListItem>
//                     </List>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel >
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography variant='headline' >Git</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <List>
//                         <ListItem>
//                             <GitChips />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >TLDR;</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <GitTldr />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >Long Form</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <GitLf />
//                         </ListItem>
//                     </List>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel >
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography variant='headline' >CSS</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <List>
//                         <ListItem>
//                             <Typography variant='h6' >TLDR;</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <CssTldr />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >Long Form</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <CssLf />
//                         </ListItem>
//                     </List>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel >
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography variant='headline' >Java</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <List>
//                         <ListItem>
//                             <JavaChips />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >TLDR;</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <JavaTldr />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >Long Form</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <JavaLf />
//                         </ListItem>
//                     </List>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel >
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                     <Typography variant='headline' >C++</Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <List>
//                         <ListItem>
//                             <CppChips />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >TLDR;</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <CppTldr />
//                         </ListItem>
//                         <Divider />
//                         <ListItem>
//                             <Typography variant='h6' >Long Form</Typography>
//                         </ListItem>
//                         <ListItem>
//                             <CppLf />
//                         </ListItem>
//                     </List>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//         </div>
//     );
// }
//
// TechsExpansionPanel.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(TechsExpansionPanel);