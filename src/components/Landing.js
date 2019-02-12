/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
// import { Grid, Row, Col} from 'react-bootstrap';
import Image from "react-bootstrap/es/Image";
import {Grid, Typography, Button } from '@material-ui/core/';
import { Link } from 'react-router-dom';

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
                        This is a React app built using my favourite IDE for Js, Webstorm.<br/> It's hosted on
                        AWS S3 and here is a link the the
                        <a href="https://github.com/Scabandari/Resume"> Github repository</a>.
                    <br/> I'm an aspiring Software Engineer with interests in the areas of machine <br/> learning & A.I,
                        data science, blockchain and of both backend and front end development. <br/> <br/>
                        My soft skills include being able to get along with a wide range of <br/> personality types as
                        as well as taking on leadership roles naturally. If you <br/> want to learn more about my
                        school projects, pet projects and accomplishments<br/>  then you can ...
                    </Typography>
                    <Typography variant="subtitle1" >
                        Continue as <Button component={Link} to="/pdf">Guest</Button>
                    </Typography>
                </Grid >
            </Grid>
        );
    }
}

export default Landing;

