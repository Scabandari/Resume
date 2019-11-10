import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { GenericExpansionPanel } from '..';
import skills from './descriptions';

const my_skills = [skills.people, skills.leadership, skills.foosball];

const SkillsExpansionPanel = ({ navbarHeight, footerHeight }) => {
  const [windowHeight, setWindowHeight] = useState(650);

  const updateWindowHeight = () => setWindowHeight(window.innerHeight);

  return (
    <div
      style={{ minHeight: `${windowHeight - (navbarHeight + footerHeight)}px` }}
    >
      <GenericExpansionPanel topics={my_skills} />
    </div>
  );
};

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
