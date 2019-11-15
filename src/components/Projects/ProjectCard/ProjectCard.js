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
  }
};

const ProjectCard = ({ classes, projectAction, project }) => {
  return (
    <Card className='card'>
      <CardContent>
        <Typography variant='h6' component='h2'>
          {project.title}
        </Typography>
        <Typography variant='subtitle1' component='h2'>
          {project.courseName} ({project.course})
        </Typography>
        <Typography component='p'>{project.description}</Typography>
        <CardContent>
          {project.chips.map(data => {
            return (
              <Chip
                key={data.key}
                label={data.label}
                style={{ margin: '4px' }}
              />
            );
          })}
        </CardContent>
      </CardContent>
      <CardActions>
        <Fragment>
          {project.github_repos.map(repo => {
            return (
              <Button key={repo.link} href={repo.link} size='small'>
                <FaGithub style={{ paddingRight: 3 }} /> {repo.name}{' '}
              </Button>
            );
          })}
        </Fragment>
        <Button
          onClick={() => {
            projectAction(project.docs);
          }}
        >
          DOCS
        </Button>
      </CardActions>
    </Card>
  );
};

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard);
