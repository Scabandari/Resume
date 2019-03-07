import React, { Fragment } from 'react';
import { Chip } from '@material-ui/core';


export const JsChips = () => {
    const chips = [
        {key: 0, label: 'Node.js'},
        {key: 1, label: 'React.js'},
        {key: 2, label: 'ES6'}
    ];

    return (
        <Fragment>
            {
                chips.map(chip => {
                    return (
                        <Chip
                            key={chip.key}
                            label={chip.label}
                            style={{margin: 4}}
                        />
                    )
                })
            }
        </Fragment>
    )
};

export const PythonChips = () => {
    const chips = [
        {key: 0, label: 'Sockets'},
        {key: 1, label: 'Threads'},
        {key: 2, label: 'Data Science'},
        {key: 3, label: 'PySpark'},
        {key: 4, label: 'Machine Learning'},
        {key: 5, label: 'A.I'},
        {key: 6, label: 'Pandas'},
    ];

    return (
        <Fragment>
            {
                chips.map(chip => {
                    return (
                        <Chip
                            key={chip.key}
                            label={chip.label}
                            style={{margin: 4}}
                        />
                    )
                })
            }
        </Fragment>
    )
};

export const GitChips = () => {
    const chips = [
        {key: 0, label: 'Github'},
    ];

    return (
        <Fragment>
            {
                chips.map(chip => {
                    return (
                        <Chip
                            key={chip.key}
                            label={chip.label}
                            style={{margin: 4}}
                        />
                    )
                })
            }
        </Fragment>
    )
};

export const JavaChips = () => {
    const chips = [
        {key: 0, label: 'Mobile Development'},
        {key: 1, label: 'Android'}
    ];

    return (
        <Fragment>
            {
                chips.map(chip => {
                    return (
                        <Chip
                            key={chip.key}
                            label={chip.label}
                            style={{margin: 4}}
                        />
                    )
                })
            }
        </Fragment>
    )
};

export const CppChips = () => {
    const chips = [
        {key: 0, label: '1st Love'},
        {key: 1, label: 'Blockchain'},
        {key: 2, label: 'EOSIO'}
    ];

    return (
        <Fragment>
            {
                chips.map(chip => {
                    return (
                        <Chip
                            key={chip.key}
                            label={chip.label}
                            style={{margin: 4}}
                        />
                    )
                })
            }
        </Fragment>
    )
};


export const SqlChips = () => {
    const chips = [
        {key: 0, label: 'MySql'},
        {key: 1, label: 'COMP 353'}
    ];

    return (
        <Fragment>
            {
                chips.map(chip => {
                    return (
                        <Chip
                            key={chip.key}
                            label={chip.label}
                            style={{margin: 4}}
                        />
                    )
                })
            }
        </Fragment>
    )
};

export const MachineLearningChips = () => {
    const chips = [
        {key: 0, label: 'Python3'},
        {key: 1, label: 'A.I'},
        {key: 1, label: 'Keras'},
        {key: 1, label: 'ANN'},
        {key: 1, label: 'Deep Learning'}
    ];

    return (
        <Fragment>
            {
                chips.map(chip => {
                    return (
                        <Chip
                            key={chip.key}
                            label={chip.label}
                            style={{margin: 4}}
                        />
                    )
                })
            }
        </Fragment>
    )
};


export const BlockchainChips = () => {
    const chips = [
        {key: 0, label: 'Trading'},
        {key: 1, label: 'EOSIO'},
        {key: 2, label: 'EOS'},
        {key: 3, label: 'Scalability'},
        {key: 3, label: 'Fundamentals'}
    ];

    return (
        <Fragment>
            {
                chips.map(chip => {
                    return (
                        <Chip
                            key={chip.key}
                            label={chip.label}
                            style={{margin: 4}}
                        />
                    )
                })
            }
        </Fragment>
    )
};

export const CloudChips = () => {
    const chips = [
        {key: 0, label: 'Node.js'},
        {key: 1, label: 'ReactJs'},
        {key: 2, label: 'AWS EC2'},
        {key: 3, label: 'AWS S3'},
        {key: 4, label: 'AWS Route 53'}
    ];

    return (
        <Fragment>
            {
                chips.map(chip => {
                    return (
                        <Chip
                            key={chip.key}
                            label={chip.label}
                            style={{margin: 4}}
                        />
                    )
                })
            }
        </Fragment>
    )
};
