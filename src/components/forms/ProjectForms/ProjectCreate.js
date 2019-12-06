import React, { useEffect, useState, useReducer } from "react";
import {
  Form,
  Header,
  Button,
  Checkbox,
  Icon,
  Label,
  Dropdown
} from "semantic-ui-react";
import _ from "lodash";
import axios from "axios";

import { Portal } from "../..";
import { useServer, useScreenWidth, useWatcher } from "../../../hooks";
import { BASH, DATA_SCIENCE, WEB_DEV, ALL } from "../../Projects/constants";

const initialState = {
  fields: {
    title: "",
    subTitle: "",
    description: "",
    probStatement: "", // Represents the url of file stored on S3 on successful upload
    report: "", // Represents the url of file stored on S3 on successful upload
    repositories: [],
    chips: [],
    tags: [],
    // fields below not part of actual Project document on backend
    newChip: "",
    firstRepo: "",
    firstRepoName: "",
    secondRepo: "",
    secondRepoName: ""
  },
  errors: {},
  portalIsOpen: false,
  hasSecondRepo: false
};

const UPDATE_FORM_FIELD = "UPDATE_FORM_FIELD";
const CLEAR_FORM = "CLEAR_FORM";
const FORM_SUBMIT = "FORM_SUBMIT";
const FORM_SUCCESS = "FORM_SUCCESS";
const SET_ERROR = "SET_ERROR";
const SET_ALL_ERRORS = "SET_ALL_ERRORS";
const UPDATE_HAS_SECOND_REPO = "UPDATE_HAS_SECOND_REPO";
const ADD_CHIP = "ADD_CHIP";
const REMOVE_CHIP = "REMOVE_CHIP";
const reducer = (state, { type, payload, name }) => {
  switch (type) {
    case UPDATE_FORM_FIELD:
      return { ...state, fields: { ...state.fields, [name]: payload } };
    case FORM_SUBMIT:
      return { ...state, errors: {} };
    case FORM_SUCCESS:
      return { ...initialState, portalIsOpen: true };
    case CLEAR_FORM:
      return initialState;
    case SET_ERROR:
      return {
        ...state,
        errors: { ...state.errors, [name]: payload }
      };
    case SET_ALL_ERRORS:
      return {
        ...state,
        errors: payload
      };
    case UPDATE_HAS_SECOND_REPO:
      return { ...state, hasSecondRepo: payload };
    case ADD_CHIP:
      return {
        ...state,
        fields: {
          ...state.fields,
          newChip: "",
          chips: [...state.fields.chips, payload]
        }
      };
    case REMOVE_CHIP:
      return {
        ...state,
        fields: {
          ...state.fields,
          chips: state.fields.chips.filter(chip => chip !== payload)
        }
      };
    default:
      console.log(`Reducer error for type: ${type}`);
      throw new Error("Undefined type in reducer for ProjectCreate form");
  }
};

const ProjectCreate = props => {
  const server = useServer();
  const width = useScreenWidth();
  const [report, setReport] = useState(null); // Holds the actual file from the form
  const [probStatement, setStatement] = useState(null); // Holds the actual file from the form
  //useWatcher(probStatement);
  const [formState, dispatch] = useReducer(reducer, initialState);
  //useWatcher(Object.keys({ formState })[0], formState);
  const [isLoading, setIsLoading] = useState(false);
  const [formMargin, setFormMargin] = useState("5rem");

  const portalRedirect = "/project-list";
  const portalHeadline = "Success!";
  const portalMessage = "View your updated list of projects.";

  const tagOptions = [
    { key: WEB_DEV, text: "Web Development", value: WEB_DEV },
    { key: DATA_SCIENCE, text: "Data Science", value: DATA_SCIENCE },
    { key: BASH, text: "Bash", value: BASH }
  ];

  useEffect(() => {
    let margin = "5rem";
    if (width < 500) {
      margin = "1.5rem";
    } else if (width < 750) {
      margin = "3rem";
    }
    setFormMargin(margin);
  }, [width]);

  useEffect(() => {
    console.log(`report: ${JSON.stringify(report)}`);
    console.log(`prob: ${JSON.stringify(probStatement)}`);
  }, [report, probStatement]);

  const updateForm = (name, value) => {
    dispatch({
      type: UPDATE_FORM_FIELD,
      payload: value,
      name
    });
  };

  const setErrors = errors => {
    dispatch({
      type: SET_ALL_ERRORS,
      payload: errors
    });
  };

  //   const addError = (name, error) => {
  //     dispatch({
  //       type: SET_ERROR,
  //       payload: error,
  //       name
  //     });
  //   };

  const addChip = chip => {
    dispatch({
      type: ADD_CHIP,
      payload: chip
    });
  };

  const removeChip = chip => {
    dispatch({
      type: REMOVE_CHIP,
      payload: chip
    });
  };

  const renderChips = chips => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {chips.map(chip => {
          return (
            <Label key={chip}>
              {chip}
              <Icon name="delete" onClick={() => removeChip(chip)} />
            </Label>
          );
        })}
      </div>
    );
  };

  const getRepositories = () => {
    const repos = [];
    if (firstRepo) {
      repos.push({
        url: firstRepo,
        name: firstRepoName
      });
      if (secondRepo) {
        repos.push({
          url: secondRepo,
          name: secondRepoName
        });
      }
    }
    return repos;
  };

  const handleClick = event => {
    event.preventDefault();
    const { newChip } = formState.fields;
    addChip(newChip);
  };

  // Pre-signed urls have a key property to save in the document and a url for direct upload
  // to S3.
  const getPreSignedUrls = async () => {
    // Get pre-signed urls
    let statementConfig;
    let reportConfig;
    const preSignedUrls = {};
    // TODO try catch blocks and error handling
    if (probStatement) {
      console.log(`setting problemStatement`);
      statementConfig = await axios.get(
        `${server}/upload/resume/projects/problem-statement`
      );
      preSignedUrls.probStatement = statementConfig.data;
    }
    if (report) {
      console.log(`setting report`);
      reportConfig = await axios.get(`${server}/upload/resume/projects/report`);
      preSignedUrls.report = reportConfig.data;
    }
    return preSignedUrls;
  };

  const getUpdatedDocs = preSigned => {
    let probStatement = "";
    let report = "";
    if (preSigned.probStatement) {
      probStatement = preSigned.probStatement.key;
    }
    if (preSigned.report) {
      report = preSigned.report.key;
    }
    return { probStatement, report };
  };

  const uploadToS3 = async preSigned => {
    if (preSigned.report) {
      console.log(`report.type: ${report.type}`);
      await axios.put(preSigned.report.url, report, {
        headers: {
          "Content-Type": report.type
        }
      });
    }
    if (preSigned.probStatement) {
      console.log(`probStatement.type: ${probStatement.type}`);
      await axios.put(preSigned.probStatement.url, probStatement, {
        headers: {
          "Content-Type": probStatement.type
        }
      });
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setErrors({});
    setIsLoading(true);
    // The url is for put request, the key is to save in the mongoose document
    const preSigned = await getPreSignedUrls(probStatement, report);
    //console.log(`urls: ${JSON.stringify(preSigned, null, 2)}`);
    // Take preSigned object and if defined upload files to S3
    try {
      await uploadToS3(preSigned);
    } catch (err) {
      console.log(`Error while direct uploading docs to S3: ${err}`);
    }
    const { probStatement: ps, report: r } = getUpdatedDocs(preSigned);
    const repos = getRepositories();
    const { fields: formFields } = formState;
    const fields = {
      ...formFields,
      tags: [...formFields.tags, ALL],
      repositories: repos,
      probStatement: ps,
      report: r
    };
    //console.log(`fields: ${JSON.stringify(fields, null, 2)}`);
    try {
      const res = await axios.post(`${server}/resume/projects`, fields);
      dispatch({ type: FORM_SUCCESS });
      setIsLoading(false);
    } catch (err) {
      console.log(
        `Could not make POST request for Project, err: ${JSON.stringify(
          err,
          null,
          2
        )}`
      );
      try {
        const formErrors = _.keyBy(err.response.data.errors, "param");
        setErrors(formErrors);
      } catch (error) {
        console.log(`Could not set errors, error: ${error}`);
      }
      setIsLoading(false);
    }
  };

  const showErrors = name => {
    const { errors } = formState;
    return (
      errors[name] && {
        content: errors[name]["msg"],
        pointing: "below"
      }
    );
  };

  const {
    fields: {
      title,
      subTitle,
      description,
      firstRepo,
      secondRepo,
      firstRepoName,
      secondRepoName,
      chips,
      newChip
    },
    hasSecondRepo
  } = formState;

  return (
    <div style={{ margin: formMargin }}>
      <Header as="h2">Project Card Create</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Title *"
          value={title}
          name="title"
          placeholder="Card title"
          error={showErrors("title")}
          onChange={(e, { name, value }) => updateForm(name, value)}
        />
        <Form.Input
          label="Sub Title *"
          value={subTitle}
          name="subTitle"
          placeholder="Sub title"
          error={showErrors("subTitle")}
          onChange={(e, { name, value }) => updateForm(name, value)}
        />
        <Form.Group>
          <Form.Input
            label={`Github Repository ${hasSecondRepo ? "*" : ""}`}
            value={firstRepo}
            name="firstRepo"
            error={showErrors("firstRepo")}
            placeholder="www.github.com/myRepo"
            width={10}
            onChange={(e, { name, value }) => updateForm(name, value)}
          />
          <Form.Input
            label={`Repo Name ${hasSecondRepo ? "*" : ""}`}
            value={firstRepoName}
            name="firstRepoName"
            error={showErrors("firstRepoName")}
            placeholder="Ex. Client"
            width={6}
            onChange={(e, { name, value }) => updateForm(name, value)}
          />
        </Form.Group>
        {hasSecondRepo && (
          <Form.Group>
            <Form.Input
              label="Second Repository *"
              value={secondRepo}
              name="secondRepo"
              error={showErrors("secondRepo")}
              placeholder="www.github.com/myOtherRepo"
              width={10}
              onChange={(e, { name, value }) => updateForm(name, value)}
            />
            <Form.Input
              label="Repo Name *"
              value={secondRepoName}
              name="secondRepoName"
              error={showErrors("secondRepoName")}
              placeholder="Ex. Server"
              width={6}
              onChange={(e, { name, value }) => updateForm(name, value)}
            />
          </Form.Group>
        )}
        <Form.Field style={{ marginTop: "8px" }}>
          <Checkbox
            label="I have a second Repository"
            name="secondRepo"
            checked={hasSecondRepo}
            onChange={(e, { name, value }) =>
              dispatch({
                type: UPDATE_HAS_SECOND_REPO,
                payload: !hasSecondRepo,
                name
              })
            }
          />
        </Form.Field>

        <b>Problem Statement</b>
        <Form.Field>
          <input
            type="file"
            accept="application/*"
            name="documents"
            error={showErrors("documents")}
            onChange={event => {
              setStatement(event.target.files[0]);
              console.log("set prob statement just ran");
            }}
          />
        </Form.Field>

        <b>Report</b>
        <Form.Field>
          <input
            type="file"
            accept="application/*"
            onChange={event => setReport(event.target.files[0])}
          />
        </Form.Field>
        <Form.Group>
          <div style={{ width: "150px" }}>
            {" "}
            <Form.Input
              label="Chips"
              value={newChip}
              name="newChip"
              placeholder="Chip"
              //width={3}
              onChange={(e, { name, value }) => updateForm(name, value)}
            />
          </div>
          <div
            style={{
              marginLeft: "35px",
              display: "flex",
              alignItems: "flex-end",
              flexWrap: "wrap"
            }}
          >
            {renderChips(chips)}
          </div>
        </Form.Group>
        <div
          style={{
            maxWidth: "175px",
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          {" "}
          <Button onClick={handleClick} icon>
            <Icon name="plus" />
          </Button>
        </div>
        <Form.Field>
          <b>Tags</b>
          <Dropdown
            placeholder="Tags"
            fluid
            multiple
            selection
            options={tagOptions}
            name="tags"
            onChange={(e, { name, value }) => updateForm(name, value)}
          />
        </Form.Field>
        <Form.TextArea
          label="Description *"
          value={description}
          name="description"
          style={{ minHeight: 150 }}
          error={showErrors("description")}
          onChange={(e, { name, value }) => updateForm(name, value)}
        />
        <Button loading={isLoading} content="Submit" />
      </Form>
      <Portal
        headline={portalHeadline}
        message={portalMessage}
        redirect={portalRedirect}
        open={formState.portalIsOpen}
      />
    </div>
  );
};

export default ProjectCreate;
