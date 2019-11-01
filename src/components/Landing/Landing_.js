/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
//import Image from 'react-bootstrap/es/Image';
import { Grid, Typography, Chip } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react';

import './Landing.scss';

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
    return (
      <div className='landing-container'>
        <div className='landing-container__img'>
          <Image src='/me.jpg' circular />
        </div>
        <div className='landing-container__chips-text'>
          <div className='landing-container__chips'>
            {this.state.chips.map(data => {
              return (
                <Chip key={data.key} label={data.label} style={{ margin: 4 }} />
              );
            })}
          </div>
          <div className='landing-container__text'>
            <Typography className='typography' variant='subtitle1' gutterBottom>
              This is a React app that manages state with react-redux. It's
              hosted on AWS S3 and here is a link the the{' '}
              <a href='https://github.com/Scabandari/Resume'>
                Github repository
              </a>
            </Typography>
            <Typography className='typography' variant='subtitle1' gutterBottom>
              I'm an aspiring Software Engineer with interests in the areas of
              both back-end and front-end web development, data science, cloud
              computing and blockchain.
            </Typography>
            <Typography className='typography' variant='subtitle1' gutterBottom>
              For my latest work incorporating more CSS, SASS, Semantic-UI and
              automated deployments to AWS see my new fictional production
              company{' '}
              <a href='http://dead-simple-apps.s3-website.us-east-2.amazonaws.com/'>
                Dead Simple Apps
              </a>
              .
            </Typography>

            <div className='landing-container__button'>
              <Typography variant='subtitle1'>
                <Link to='/projects'>
                  <Button fluid>Enter</Button>
                </Link>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
