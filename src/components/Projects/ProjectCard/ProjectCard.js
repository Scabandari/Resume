import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";
import { Chip } from "@material-ui/core";

const ProjectCard = ({ projectAction, project }) => {
  const {
    githubRepos: repos,
    title,
    course,
    courseName,
    description,
    chips
  } = project;

  return (
    <Card style={{ marginBottom: "3rem " }}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">
            {courseName} ({course})
          </span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content>
        {chips.map(data => {
          return (
            <Chip key={data.key} label={data.label} style={{ margin: "4px" }} />
          );
        })}
      </Card.Content>

      <Card.Content extra>
        <Fragment>
          {repos.map(repo => {
            return (
              <a key={repo.link} href={repo.link}>
                <Button icon="github" content={repo.name} />
              </a>
            );
          })}
        </Fragment>

        <Link to="/pdf">
          {" "}
          <Button
            style={{ marginTop: repos.length > 1 ? "3px" : 0 }}
            icon="file"
            content="Docs"
            onClick={() => projectAction(project.docs)}
          />
        </Link>
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
