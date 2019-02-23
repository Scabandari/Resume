import React from 'react';
import { Typography} from '@material-ui/core';
import jsDescriptions from './Javascript';
import pythonDescriptions from './Python';
import gitDescriptions from './Git';
import CssDescriptions from './CSS';
import javaDescriptions from './Java';
import CppDescriptions from './CPP';

export const JsTldr = () => {
    return (
    <Typography variant='body1'>{jsDescriptions.tldr}</Typography>
    )
};

export const JsLf = () => {
    return (
        <Typography variant='body1'>{jsDescriptions.longForm}</Typography>
    )
};

export const PythonTldr = () => {
    return (
        <Typography variant='body1'>{pythonDescriptions.tldr}</Typography>
    )
};

export const PythonLf = () => {
    return (
        <Typography variant='body1'>{pythonDescriptions.longForm}</Typography>
    )
};

export const GitTldr = () => {
    return (
        <Typography variant='body1'>{gitDescriptions.tldr}</Typography>
    )
};

export const GitLf = () => {
    return (
        <Typography variant='body1'>{gitDescriptions.longForm}</Typography>
    )
};

export const CssTldr = () => {
    return (
        <Typography variant='body1'>{CssDescriptions.tldr}</Typography>
    )
};

export const CssLf = () => {
    return (
        <Typography variant='body1'>{CssDescriptions.longForm}</Typography>
    )
};


export const JavaTldr = () => {
    return (
        <Typography variant='body1'>{javaDescriptions.tldr}</Typography>
    )
};

export const JavaLf = () => {
    return (
        <Typography variant='body1'>{javaDescriptions.longForm}</Typography>
    )
};


export const CppTldr = () => {
    return (
        <Typography variant='body1'>{CppDescriptions.tldr}</Typography>
    )
};

export const CppLf = () => {
    return (
        <Typography variant='body1'>{CppDescriptions.longForm}</Typography>
    )
};