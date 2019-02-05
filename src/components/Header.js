import React, { Component } from 'react';
//import GoogleAuth from './GoogleAuth';
import Typography from '@material-ui/core/Typography';


class Header extends Component {

    render() {
        const bannerStyles = {
            backgroundColor: '#493C55',
        };

        return(
            <div>
                <nav>
                    <div style={bannerStyles} className="nav-wrapper">
                        <Typography variant="h3" gutterBottom style={{paddingTop: 8, color: '#ffffff'}}>
                            Ryan Nichols
                        </Typography>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;