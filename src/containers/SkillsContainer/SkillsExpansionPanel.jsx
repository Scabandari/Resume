import React, { Component } from 'react';
import GenericExpansionPanel from '../../components/GenericExpansionPanel';
import { connect } from 'react-redux';
import skills from './descriptions';

class SkillsExpansionPanel extends Component {
  my_skills = [skills.people, skills.leadership, skills.foosball];

  render() {
    return (
      <div style={{ minHeight: '70vh' }}>
        <GenericExpansionPanel topics={this.my_skills} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navbarHeight: state.navbar.height,
    footerHeight: state.footer.height
  };
};

export default connect(
  mapStateToProps,
  null
)(SkillsExpansionPanel);
