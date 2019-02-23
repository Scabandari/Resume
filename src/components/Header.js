import React, { Fragment, Component } from 'react';
//import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

//import GoogleAuth from './GoogleAuth';
import Typography from '@material-ui/core/Typography';
import HeaderButton from './HeaderButton';
import {PROJECTS, TECH, SKILLS} from './Projects/constants';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    showNavButtons() {
        const {pathname} = this.props.location;
        const headerButtons =
            [
                {
                    name: "Projects",
                    link: PROJECTS,
                    is_disabled: pathname === PROJECTS
                },
                {
                    name: "Technologies",
                    link: TECH,
                    is_disabled: pathname === TECH

                },
                {
                    name: "Skills",
                    link: SKILLS,
                    is_disabled: pathname === SKILLS

                }
            ];
        if (pathname !== "/") {
            return (
                <Fragment>
                    {headerButtons.map(button => {
                        return (
                            <HeaderButton
                                name={button.name}
                                is_disabled={button.is_disabled}
                                link={button.link}/>
                        )
                    })}
                </Fragment>

            );

        }
    }


    render() {
        const styles = {
            banner: {
                backgroundColor: '#493C55',
                //border: '5px solid green',
                display: 'flex',
                flexDirection: "row"
            },
            name: {
                paddingTop: 8,
                color: '#ffffff',
                paddingLeft: 8
            }
        };

        return (
            <div>
                <nav>
                    <div style={styles.banner} className="nav-wrapper">
                        <Link to="/" >
                            <Typography variant="h3" gutterBottom style={styles.name}>
                                Ryan Nichols
                            </Typography>
                        </Link>
                        <div className="right" style={{display: "flex", marginLeft: 'auto'}}>
                            {this.showNavButtons()}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(Header);