import React from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import { setSidebarShowing } from '../../actions';

import PropTypes from 'prop-types';

const NavbarContainer = ({ setSidebarShowing, sidebarIsShowing }) => (
  <Navbar 
  setSidebarShowing={setSidebarShowing} 
  sidebarIsShowing={sidebarIsShowing} 
  />
);

NavbarContainer.propTypes = {};

const mapStateToProps = state => {
    return {
      sidebarIsShowing: state.navbar.sidebarIsShowing
    };
  };
  

export default connect(
    mapStateToProps,
  { setSidebarShowing }
)(NavbarContainer);
