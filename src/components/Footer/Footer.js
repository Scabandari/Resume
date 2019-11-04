import React, { useEffect, useRef } from 'react';

const styles = {
  backgroundColor: '#1b1c1d'
  //maxHeight: 20
};

const Footer = ({ changeFooterHeight }) => {
  //const [height, setHeight] = useState(0);
  //console.log('changeFooterHeight', changeFooterHeight);
  //console.log('props', props);
  const ref = useRef(null);
  const updateHeight = () => {
    //setHeight(ref.current.clientHeight);
    changeFooterHeight(ref.current.clientHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateHeight);
  }, []);

  return (
    <footer ref={ref} className='page-footer' style={styles}>
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
