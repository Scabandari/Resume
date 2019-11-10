import React, { useEffect, useRef } from 'react';

const styles = {
  backgroundColor: '#1b1c1d'
};

const Footer = () => {
  return (
    <footer className='page-footer' style={styles}>
      <div className='container'>
        <h5>Contact</h5>
        <a href='/contact'>ryan3nichols@gmail.com</a>
      </div>
      <div className='footer-copyright'>
        <div className='container'>© 2019 Copyright</div>
      </div>
    </footer>
  );
};

export default Footer;
