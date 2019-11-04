import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from './Footer'
import { changeFooterHeight } from '../../actions';

const FooterContainer = ({ changeFooterHeight }) => {
    return (
        <Footer changeFooterHeight={ changeFooterHeight } />
    );
};

FooterContainer.propTypes = {

};

export default connect(null, { changeFooterHeight })(FooterContainer);
