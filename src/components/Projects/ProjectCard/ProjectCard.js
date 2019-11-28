import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";
import { Chip } from "@material-ui/core";
import axios from "axios";

import { useS3BucketEndpoint } from "../../../hooks";

const ProjectCard = ({ projectAction, project }) => {
  const s3bucket = useS3BucketEndpoint();
  //const [projectDocs, setDocs] = useState({});
  const probRef = useRef();
  const reportRef = useRef();

  //   useEffect(() => {
  //     console.log(`pdf Url: ${s3bucket}/${report}`);
  //   }, []);
  const {
    firstRepo,
    secondRepo,
    firstRepoName,
    secondRepoName,
    title,
    subTitle,
    description,
    probStatement,
    report,
    chips
  } = project;

  const hasSecondRepo = secondRepo !== "";
  const singlePdf = probStatement === report;

  const renderButtons = (probRef, reportRef) => {
    return (
      <>
        {singlePdf ? (
          <Button
            style={{ marginTop: hasSecondRepo ? "3px" : 0 }}
            icon="file"
            content="Report"
            onClick={() => reportRef.current.click()}
          />
        ) : (
          <div></div>
        )}
        <Button.Group>
          <Button
            style={{ marginTop: hasSecondRepo ? "3px" : 0 }}
            icon="file"
            content="Prob Desc"
            onClick={() => probRef.current.click()}
          />
          <Button
            style={{ marginTop: hasSecondRepo ? "3px" : 0 }}
            icon="file"
            content="Report"
            onClick={() => reportRef.current.click()}
          />
        </Button.Group>
      </>
    );
  };
  return (
    <Card style={{ marginBottom: "3rem " }}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{subTitle}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content>
          {chips.map(chip => {
            return <Chip key={chip} label={chip} style={{ margin: "4px" }} />;
          })}
      </Card.Content>

      <Card.Content extra>
        {hasSecondRepo ? (
          <>
            <a href={firstRepo}>
              <Button icon="github" content={firstRepoName} />
            </a>
            <a href={secondRepo}>
              <Button icon="github" content={secondRepoName} />
            </a>
          </>
        ) : (
          <a href={firstRepo}>
            <Button icon="github" content="Repo" />
          </a>
        )}
        <>
          {singlePdf ? ( // There can only be one or two pdfs
            <a href={`${s3bucket}/${report}`}>
              <Button
                style={{ marginTop: hasSecondRepo ? "3px" : 0 }}
                icon="file"
                content="Report"
              />
            </a>
          ) : (
            <>
              {renderButtons(probRef, reportRef)}
              <a ref={probRef} href={`${s3bucket}/${probStatement}`} hidden></a>
              <a ref={reportRef} href={`${s3bucket}/${report}`} hidden></a>
            </>
          )}
        </>
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
