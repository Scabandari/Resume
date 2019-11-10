import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from './Footer';
//import { changeFooterHeight } from '../../actions';

const FooterContainer = () => {
  return <Footer />;
};

FooterContainer.propTypes = {};

export default connect(
  null,
  null, //{ changeFooterHeight }
)(FooterContainer);
