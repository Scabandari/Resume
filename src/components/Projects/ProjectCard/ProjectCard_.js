import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";
import { Chip } from "@material-ui/core";

const ProjectCard = ({ projectAction, project }) => {
  return (
    <Card style={{ marginBottom: "3rem " }}>
      <Card.Content>
        <Card.Header>{project.title}</Card.Header>
        <Card.Meta>
          <span className="date">
            {project.courseName} ({project.course})
          </span>
        </Card.Meta>
        <Card.Description>{project.description}</Card.Description>
      </Card.Content>
      <Card.Content>
        {project.chips.map(data => {
          return (
            <Chip key={data.key} label={data.label} style={{ margin: "4px" }} />
          );
        })}
      </Card.Content>

      <Card.Content extra>
        <Fragment>
          {project.github_repos.map(repo => {
            return (
              <a href={repo.link}>
                <Button icon="github" content={repo.name} />
              </a>
            );
          })}
        </Fragment>
        <Link to="/pdf">
          {" "}
          <Button
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
