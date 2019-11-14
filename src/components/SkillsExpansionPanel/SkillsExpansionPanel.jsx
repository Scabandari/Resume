import React, { useState, useEffect } from 'react';

import { GenericExpansionPanel } from '..';
import skills from './descriptions';

const my_skills = [skills.people, skills.leadership, skills.foosball];

const SkillsExpansionPanel = () => <GenericExpansionPanel topics={my_skills} />;

export default SkillsExpansionPanel;
