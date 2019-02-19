import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
//'#493C55'
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    cssRoot: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: '#493C55',
        '&:hover': {
            backgroundColor: '#493C77',
        },
    },

});

function HeaderButton(props) {
    const { classes } = props;

    return (
        <Button
            variant="contained"
            color="primary"
            className={classNames(classes.margin, classes.cssRoot)}
        >
            Custom CSS
        </Button>
    );
}

HeaderButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderButton);
