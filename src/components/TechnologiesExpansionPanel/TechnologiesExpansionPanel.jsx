import React from "react";

import { GenericExpansionPanel } from "..";
import { useScreenWidth } from "../../hooks";
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
} from "./descriptions";

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
  const width = useScreenWidth();
  const maxWidth = width > 1000 ? "700px" : "90vw";
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth }}>
        <GenericExpansionPanel topics={my_techs} />
      </div>
    </div>
  );
};

export default TechnologiesExpansionPanel;
