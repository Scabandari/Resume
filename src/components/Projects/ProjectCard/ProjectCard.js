import React, { useState, useRef, useEffect } from "react";
import { Card, Button, Menu, Icon } from "semantic-ui-react";
import { Chip } from "@material-ui/core";

import { useS3BucketEndpoint } from "../../../hooks";

const ProjectCard = ({ projectAction, project }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [linksViewable, setLinksViewable] = useState(false);
  const s3bucket = useS3BucketEndpoint();
  const [firstGitRepo, setFirstRepo] = useState(""); // A url
  const [secondGitRepo, setSecondRepo] = useState(""); // A url
  const firstGitRef = useRef(); // Refs for external links
  const secondGitRef = useRef();
  const probRef = useRef();
  const reportRef = useRef();

  const {
    title,
    subTitle,
    description,
    probStatement,
    report,
    repositories,
    chips
  } = project;

  // Prepare menuItems for rendering
  useEffect(() => {
    //console.log(`repositories: ${JSON.stringify(repositories, null, 2)}`);
    const items = [];
    if (repositories[0]) {
      //   console.log(project.title);
      //   console.log("Adding repo1");
      const { url, name } = repositories[0];
      setFirstRepo(url);
      items.push({
        icon: "github",
        name: name || "Repo",
        click: () => firstGitRef.current.click()
      });
    }
    if (repositories[1]) {
      //console.log("Adding repo2");
      const { url, name } = repositories[1];
      setSecondRepo(url);
      items.push({
        icon: "github",
        name: name || "Repo",
        click: () => secondGitRef.current.click()
      });
      //console.log(`probStatement: ${probStatement}`);
    }
    if (probStatement) {
      //   console.log(`project: ${JSON.stringify(project)}`);
      //   console.log("Adding probStatement");
      items.push({
        icon: "file",
        name: "Problem Statement",
        click: () => probRef.current.click()
      });
    }
    setMenuItems(items);
    //console.log(`report: ${report}`);
    if (report) {
      //console.log("Adding report");
      items.push({
        icon: "file",
        name: "Report",
        click: () => reportRef.current.click()
      });
    }
  }, [project]);

  const renderMenuItems = () => {
    //const items = [];
    console.log(`menuItems: ${JSON.stringify(menuItems, null, 2)}`);
    return (
      <>
        {menuItems.map(item => {
          return (
            <Menu.Item
              key={item.name}
              icon={item.icon}
              name={item.name}
              onClick={item.click}
            />
          );
        })}
      </>
    );
  };

  const renderChevron = direction => {
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Icon
          circular
          name={`chevron ${direction}`}
          onClick={() => setLinksViewable(!linksViewable)}
        />
      </div>
    );
  };

  return (
    <Card style={{ marginBottom: "3rem " }}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{subTitle}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      {chips.length > 0 && (
        <Card.Content>
          {chips.map(chip => {
            return <Chip key={chip} label={chip} style={{ margin: "4px" }} />;
          })}
        </Card.Content>
      )}

      <Card.Content extra>
        {(linksViewable && (
          <>
            <Menu fluid vertical>
              {renderMenuItems()}
            </Menu>
            {renderChevron("up")}
            <a ref={firstGitRef} href={firstGitRepo} />
            <a ref={secondGitRef} href={secondGitRepo} />
            <a ref={probRef} href={`${s3bucket}/${probStatement}`} />
            <a ref={reportRef} href={`${s3bucket}/${report}`} />
          </>
        )) ||
          (menuItems.length && renderChevron("down"))}
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
