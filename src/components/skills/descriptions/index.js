import React from "react";
import { Typography } from "@material-ui/core";
import peopleDescriptions from "./People";
import leadershipDescriptions from './Leadership';
import foosballDescriptions from './Foosball';


export const PeopleTldr = () => {
    console.log(`peopleDescriptions.tldr: ${peopleDescriptions.tldr}`);
    return (
        <Typography variant='body1'>{peopleDescriptions.tldr}</Typography>
    )
};

export const PeopleLf = () => {
    return (
        <Typography variant='body1'>{peopleDescriptions.longForm}</Typography>
    )
};


export const LeadershipTldr = () => {
    console.log(`peopleDescriptions.tldr: ${peopleDescriptions.tldr}`);
    return (
        <Typography variant='body1'>{leadershipDescriptions.tldr}</Typography>
    )
};

export const LeadershipLf = () => {
    return (
        <Typography variant='body1'>{leadershipDescriptions.longForm}</Typography>
    )
};


export const FoosballTldr = () => {
    console.log(`peopleDescriptions.tldr: ${peopleDescriptions.tldr}`);
    return (
        <Typography variant='body1'>{foosballDescriptions.tldr}</Typography>
    )
};

export const FoosballLf = () => {
    return (
        <Typography variant='body1'>{foosballDescriptions.longForm}</Typography>
    )
};