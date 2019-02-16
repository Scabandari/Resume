import React, { Component } from 'react';
//import GoogleAuth from './GoogleAuth';
import Typography from '@material-ui/core/Typography';


class Header extends Component {

    render() {
        const styles = {
            banner: {
                backgroundColor: '#493C55'
            },
            name: {
                paddingTop: 8,
                color: '#ffffff',
                paddingLeft: 8
            }
        };

        return(
            <div>
                <nav>
                    <div style={styles.banner} className="nav-wrapper">
                        <Typography variant="h3" gutterBottom style={styles.name}>
                            Ryan Nichols
                        </Typography>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;