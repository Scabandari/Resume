import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { screenSize } from '../hoc';
import './Navbar.scss';

class MenuExampleSecondary extends Component {
  state = { activeItem: '' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    //console.log(`this.props: ${JSON.stringify(this.props)}`);
    const { activeItem } = this.state;
    const { width } = this.props;
    const { pathname } = this.props.location;

    return (
      <div className='navbar-container'>
        <Menu icon inverted size='massive'>
          <Menu.Item
            header
            name='Ryan Nichols'
            //active={activeItem === 'home'}
            //onClick={this.handleItemClick}
          />

          <Menu.Item disabled as={NavLink} to='/' name='avsddf'>
            <Icon name='home' />
          </Menu.Item>

          {width > 500 && (
            <Menu.Menu position='right'>
              <Menu.Item as={NavLink} to='/projects' name='projects'>
                <p>Projects</p>
              </Menu.Item>
              <Menu.Item as={NavLink} to='/techs' name='techs'>
                <p>Tech</p>
              </Menu.Item>
              <Menu.Item as={NavLink} to='/skills' name='skills'>
                <p>Skills</p>
              </Menu.Item>
            </Menu.Menu>
          )}
        </Menu>
      </div>
    );
  }
}

// const Navbar = props => {
//   return <MenuExampleSecondary width={props.width} />;
// };
//const Navbar = props => <MenuExampleSecondary {...props} />;
const Navbar = withRouter(props => <MenuExampleSecondary {...props} />);

//export default withRouter(screenSize(Navbar));
export default screenSize(Navbar);
