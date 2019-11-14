import React, { useState, useEffect } from 'react';

import { GenericExpansionPanel } from '..';
import { people, leadership, foosball } from './descriptions';

const my_skills = [people, leadership, foosball];

const SkillsExpansionPanel = () => <GenericExpansionPanel topics={my_skills} />;

export default SkillsExpansionPanel;
