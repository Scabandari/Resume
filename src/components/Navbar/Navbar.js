import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: '' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className='navbar-container'>
        <Menu icon inverted size='large'>
          <Menu.Item
            header
            name='Ryan Nichols'
            //active={activeItem === 'home'}
            //onClick={this.handleItemClick}
          />

          <Menu.Item disabled as={NavLink} to='/' name='avsddf'>
            <Icon name='home' />
          </Menu.Item>

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
        </Menu>
      </div>
    );
  }
}
