import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Chip } from '@material-ui/core'
import { FaGithub } from 'react-icons/fa';


const styles = {
    card: {
        minWidth: 275,
        maxWidth: 400,
        marginTop: 25,
        marginLeft: 25,
        marginBottom: 25
        //minHeight: 350
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

// function ProjectCard(props) {
function ProjectCard(props) {
     const {title,
            course,
            courseName,
            description,
            chips,
            github_repos,
            docs
        } = props.project;

    const { classes, projectAction } = props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" component="h2">
                        {courseName} ({course})
                    </Typography>
                    <Typography component="p">
                        {description}
                    </Typography>
                    {chips.map(data => {
                        return (
                            <Chip
                                key={data.key}
                                label={data.label}
                                style={{margin: 4}}
                            />
                        );
                    })}
                </CardContent>
                <CardActions>
                    <Fragment>
                        {github_repos.map(repo =>{
                            return (
                                <Button href={repo.link}
                                        size="small"

                                ><FaGithub style={{paddingRight: 3}}/> {repo.name} </Button>
                            )
                        })}
                    </Fragment>
                    <Button onClick={() => {projectAction(docs)}}>DOCS</Button>

                </CardActions>
            </Card>
        );
}


ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);
//export default connect(null, { changeProject })(ProjectCard);