import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Assignment, BorderColor } from '@material-ui/icons';

const styles = {
    root: {
        width: 500,
    },
};

class DocumentNavigation extends React.Component {
    state = {
        value: 0,
    };

    render() {
        const { classes, changeDoc } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={(event, value) => {
                    changeDoc(value);
                    this.setState({ value });
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Problem Statement" icon={<Assignment />} />
                <BottomNavigationAction label="Report" icon={<BorderColor />} />
            </BottomNavigation>
        );
    }
}

DocumentNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DocumentNavigation);