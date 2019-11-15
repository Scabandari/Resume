import React from 'react';
import { GenericExpansionPanel } from '..';
import {
  js,
  python,
  java,
  cpp,
  sql,
  machine_learning,
  cloud,
  git,
  block_chain,
  css,
  bash
} from './descriptions';

const my_techs = [
  js,
  python,
  java,
  cpp,
  sql,
  machine_learning,
  cloud,
  git,
  block_chain,
  css,
  bash
];
const TechnologiesExpansionPanel = () => {
  return <GenericExpansionPanel topics={my_techs} />;
};

export default TechnologiesExpansionPanel;
