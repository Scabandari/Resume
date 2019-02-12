import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { Card, CardActions, CardContent, Button, Typography, Chip } from '@material-ui/core'
//import {Link} from "react-router-dom";
import { changeProject, changeDocument } from '../../actions'

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 400,
        marginTop: 25,
        marginLeft: 25,
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

function ProjectCard(props) {
    const { classes,
        title,
        course,
        courseName,
        description,
        chips,
        link,
        tag
    } = props;

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
                <Button href={link}
                        size="small"

                >Github</Button>
                <Button href="/pdf" onClick={() => {console.log('onClick');}} >DOCS</Button>

            </CardActions>
        </Card>
    );
}

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(ProjectCard);
export default connect(null, { changeProject })(ProjectCard);