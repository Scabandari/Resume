import React from 'react';

const Footer = () => {

    const styles = {
        backgroundColor: '#493C55',
        //maxHeight: 200
    };

    return (
        <footer className="page-footer" style={styles}>
            <div className="container">
                <h5>Contact</h5>
                <p>ryan3nichols@gmail.com</p>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2019 Copyright
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;