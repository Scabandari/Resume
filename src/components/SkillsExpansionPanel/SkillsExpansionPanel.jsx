import React, { useState, useEffect } from "react";

import { GenericExpansionPanel } from "..";
import { people, leadership, foosball } from "./descriptions";
import { useScreenWidth } from "../../hooks";

const my_skills = [people, leadership, foosball];

const SkillsExpansionPanel = () => {
  const width = useScreenWidth();
  const maxWidth = width > 1000 ? "700px" : "90vw";
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth }}>
        <GenericExpansionPanel topics={my_skills} />
      </div>
    </div>
  );
};

export default SkillsExpansionPanel;
