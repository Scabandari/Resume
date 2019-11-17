import React from 'react';
import { connect } from 'react-redux';

import ContactForm from './ContactForm'
//import {  } from '../../actions';

const ContactFormContainer = (props) => {
    return (
        <ContactForm  />
    );
};

// const mapStateToProps = state => {
//     return {

//     };
//   };
  
export default connect(null, null)(ContactFormContainer);
