/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import Image from 'react-bootstrap/es/Image';
import { Grid, Typography, Chip } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chips: [
        { key: 0, label: 'React' },
        { key: 1, label: 'react-redux' },
        { key: 2, label: 'AWS S3' },
        { key: 3, label: 'AWS Route 53' },
        { key: 4, label: 'Material-UI' },
        { key: 5, label: 'EmailJs' }
      ]
    };
  }

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
          <Grid item>
            <Image src='/me.jpg' circle style={styles.img} />
          </Grid>
          <Grid item style={styles.text}>
            <div>
              {this.state.chips.map(data => {
                return (
                  <Chip
                    key={data.key}
                    label={data.label}
                    style={{ margin: 4 }}
                  />
                );
              })}
            </div>
            <Typography
              variant='subtitle1'
              gutterBottom
              style={{ paddingTop: 8 }}
            >
              This is a React app that manages state with react-redux. It's
              hosted on
              <br /> AWS S3 and here is a link the the
              <a href='https://github.com/Scabandari/Resume'>
                {' '}
                Github repository
              </a>
              .<br />
              <br /> I'm an aspiring Software Engineer with interests in the
              areas of both <br /> back-end and front-end web development, data
              science and blockchain.
              <br /> <br />
              For my latest work incorporating more CSS, SASS, Semantic-UI and{' '}
              <br /> automated deployments to AWS see my new fictional
              production company <br />
              <a href='http://dead-simple-apps.s3-website.us-east-2.amazonaws.com/'>
                Dead Simple Apps
              </a>
              . <br /> <br />
              The site is broken up into sections containing info on projects
              I've done <br />
              and descriptions of both my skills and the technologies I've
              worked with.
              <br />
            </Typography>
            <Typography variant='subtitle1'>
              <Link to='/projects'>
                <Button fluid>Enter</Button>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Landing;
