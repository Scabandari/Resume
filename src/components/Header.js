import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
//import GoogleAuth from './GoogleAuth';
import Typography from '@material-ui/core/Typography';
import HeaderButton from './HeaderButton';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerButtons: [
                {
                    name: "Projects",
                    link: "/projects"
                },
                {
                    name: "Technologies",
                    link: "/techs"
                },
                {
                    name: "Skills",
                    link: "/skills"
                }
            ]
        }
       // this.showNavButtons = this.showNavButtons.bind(this);
    }

    showNavButtons() {
        const { showing } = this.props.showingNav;
        const { headerButtons } = this.state;
        if (showing) {
            return(
                <Fragment>
                    {headerButtons.map(button => {
                        return (
                            <HeaderButton name={button.name} link={button.link}/>
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

        //const { showNavButtons } = this.props;
        return(
            <div>
                <nav>
                    <div style={styles.banner} className="nav-wrapper">
                        <Typography variant="h3" gutterBottom style={styles.name}>
                            Ryan Nichols
                        </Typography>
                        <div className="right" style={{ display: "flex", marginLeft: 'auto' }}>
                            { this.showNavButtons() }
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = ({ showingNav }) => {
    return { showingNav };
};
export default connect(mapStateToProps)(Header) ;