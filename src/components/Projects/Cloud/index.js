import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';

class Cloud extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            paper: {
                margin: 10
            }
        };

        return (
            <Paper elevation={1} style={styles.paper}>
                <Typography variant="h5" component="h3">
                    Sentiment Analysis using PySpark
                </Typography>
                <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
                </Typography>
            </Paper>
        );
    }
}

export default Cloud;