import React from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import { changeNavbarHeight } from '../../actions';

import PropTypes from 'prop-types';

const NavbarContainer = ({ changeNavbarHeight }) => {
    return (
        <Navbar changeNavbarHeight={changeNavbarHeight} />
    );
};

NavbarContainer.propTypes = {

};

export default connect(null, {changeNavbarHeight})(NavbarContainer);
