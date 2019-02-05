/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
// import { Grid, Row, Col} from 'react-bootstrap';
import Image from "react-bootstrap/es/Image";
import {Grid, Typography } from '@material-ui/core/';
//import Image from 'react-bootstrap/Image'

class Landing extends Component {

    render() {
        const styles = {
            img: {
                marginLeft: 20,
                marginTop: 20,
                maxWidth: 500,
                maxHeight: 500,
                borderRadius: 250
            },
            text: {
                padding: 25
            }
        };

        return (
            <Grid container>
                <Grid item >
                    <Image src="/me.jpg" circle style={styles.img} />
                </Grid >
                <Grid item style={styles.text}>
                    <Typography variant="subtitle1" gutterBottom>
                        This is a React app built using my favourite IDE for Js, Webstorm. It's hosted on
                        AWS S3.
                    </Typography>
                </Grid >
            </Grid>
        );
    }
}

export default Landing;

