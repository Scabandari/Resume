/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Grid, Row, Col} from 'react-bootstrap';
import Image from "react-bootstrap/es/Image";
import {Grid, Typography, Button, Chip, CardContent} from '@material-ui/core/';
import { Link } from 'react-router-dom';
//import { showNavButtons }  from '../actions';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chips: [
                {key: 0, label: 'React'},
                {key: 1, label: 'react-redux'},
                {key: 2, label: 'AWS S3'},
                {key: 3, label: 'AWS Route 53'},
                {key: 4, label: 'Material-UI'},
                {key: 5, label: 'EmailJs'}
            ]
        }
    }

    // componentDidMount() {
    //     this.props.showNavButtons(false);
    // }

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
            <div>
                <Grid container>
                    <Grid item >
                        <Image src="/me.jpg" circle style={styles.img} />
                    </Grid >
                    <Grid item style={styles.text}>
                        <div>
                            {this.state.chips.map(data => {
                                return (
                                    <Chip
                                        key={data.key}
                                        label={data.label}
                                        style={{margin: 4}}
                                    />
                                );
                            })}
                        </div>
                        <Typography variant="subtitle1" gutterBottom style={{paddingTop: 8}}>
                            This is a React app that manages state with react-redux.<br/> It's hosted on
                            AWS S3 and here is a link the the
                            <a href="https://github.com/Scabandari/Resume"> Github repository</a>.
                            <br/> I'm an aspiring Software Engineer with interests in the areas of machine <br/> learning & A.I,
                            data science, blockchain and of course both backend and <br/> front end development. <br/> <br/>
                            For school projects I take to a leadership role naturally. If you want to <br/> learn more about my
                            school projects, pet projects and accomplishments<br/>  then you can ...
                        </Typography>
                        <Typography variant="subtitle1" >
                            Continue as <Button
                                            component={Link}
                                            to="/projects"
                                            >Guest</Button>
                        </Typography>
                    </Grid >
                </Grid>
            </div>
        );
    }
}

// const mapDispatchToProps = dispatch => {
//     return { showNavButtons: truthy => dispatch(showNavButtons(truthy)) };
// };
//
// export default connect(null, mapDispatchToProps)(Landing) ;
export default Landing;

