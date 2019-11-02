import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Chip
} from '@material-ui/core';
import { FaGithub } from 'react-icons/fa';

import './ProjectCard.scss';

const styles = {

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

// function ProjectCard(props) {
class ProjectCard extends Component {
  constructor(props) {
    super(props);

    const { classes, projectAction, project } = this.props;
    this.state = {
      classes,
      projectAction,
      project
    };
  }

  render() {
    return (
      <Card className='card'>
        <CardContent>
          <Typography variant='h6' component='h2'>
            {this.state.project.title}
          </Typography>
          <Typography variant='subtitle1' component='h2'>
            {this.state.project.courseName} ({this.state.project.course})
          </Typography>
          <Typography component='p'>
            {this.state.project.description}
          </Typography>
          {this.state.project.chips.map(data => {
            return (
              <Chip key={data.key} label={data.label} style={{ margin: 4 }} />
            );
          })}
        </CardContent>
        <CardActions>
          <Fragment>
            {this.state.project.github_repos.map(repo => {
              return (
                <Button href={repo.link} size='small'>
                  <FaGithub style={{ paddingRight: 3 }} /> {repo.name}{' '}
                </Button>
              );
            })}
          </Fragment>
          <Button
            onClick={() => {
              this.state.projectAction(this.state.project.docs);
            }}
          >
            DOCS
          </Button>
        </CardActions>
      </Card>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard);
