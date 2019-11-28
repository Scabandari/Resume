import React, { useEffect, useState, useReducer } from "react";
import {
  Form,
  Header,
  Button,
  Checkbox,
  Icon,
  Label,
  Input
  //Dropdown
} from "semantic-ui-react";
import _ from "lodash";

import { Portal } from "../..";
import { useServer, useScreenWidth, useWatcher } from "../../../hooks";
import axios from "axios";

const UPDATE_FORM_FIELD = "UPDATE_FORM_FIELD";
const CLEAR_FORM = "CLEAR_FORM";
const FORM_SUBMIT = "FORM_SUBMIT";
const FORM_SUCCESS = "FORM_SUCCESS";
const FORM_FAILURE = "FORM_FAILURE";
const SET_ERRORS = "SET_ERRORS";
const UPDATE_HAS_SECOND_REPO = "UPDATE_HAS_SECOND_REPO";
const ADD_CHIP = "ADD_CHIP";
const REMOVE_CHIP = "REMOVE_CHIP";

const initialState = {
  fields: {
    title: "",
    subTitle: "",
    description: "",
    firstRepo: "",
    firstRepoName: "",
    secondRepo: "",
    secondRepoName: "",
    //repoLinks: [],
    // problemStatement: "",
    // report: "",
    chips: [],
    mainRepo: "",
    secondRepo: "",
    newChip: "" // Anything from here down not part of actual object
  },
  errors: {},
  portalIsOpen: false,
  hasSecondRepo: false
};

const reducer = (state, { type, payload, name }) => {
  switch (type) {
    case UPDATE_FORM_FIELD:
      return { ...state, fields: { ...state.fields, [name]: payload } };
    case FORM_SUBMIT:
      return { ...state, errors: {} };
    case FORM_SUCCESS:
      return { ...initialState, portalIsOpen: true };
    case FORM_FAILURE:
      return { ...state, errors: payload };
    case CLEAR_FORM:
      return initialState;
    case SET_ERRORS:
      return { ...state, errors: payload };
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
          chips: state.fields.chips.filter(chip => chip != payload)
        }
      };
    default:
      throw new Error("Undefined type in reducer for UdemyCourseForm");
  }
};

// ref: https://react.semantic-ui.com/modules/dropdown/#variations-compact
// const getDropdownOptions = (number, prefix = "Choice ") =>
//   _.times(number, index => ({
//     key: index,
//     text: `${prefix}${index}`,
//     value: index
//   }));

const ProjectCreate = props => {
  const server = useServer();
  const width = useScreenWidth();
  const [report, setReport] = useState(null);
  const [probStatement, setStatement] = useState(null);
  const [formState, dispatch] = useReducer(reducer, initialState);
  useWatcher(Object.keys({ formState })[0], formState);
  const [isLoading, setIsLoading] = useState(false);
  const [formMargin, setFormMargin] = useState("5rem");

  const portalRedirect = "/project-list";
  const portalHeadline = "Success!";
  const portalMessage = "View your updated list of projects.";

  const updateForm = (name, value) => {
    dispatch({
      type: UPDATE_FORM_FIELD,
      payload: value,
      name
    });
  };

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
    //const { chips } = formState.fields;
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

  useEffect(() => {
    let margin = "5rem";
    if (width < 500) {
      margin = "1.5rem";
    } else if (width < 750) {
      margin = "3rem";
    }
    setFormMargin(margin);
    //console.log(`${Object.keys({ width })[0]}: ${width}`);
  }, [width]);

  const handleClick = event => {
    event.preventDefault();
    const { newChip } = formState.fields;
    //console.log(`adding newChip: ${newChip}`);
    addChip(newChip);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      // Get pre-signed urls
      const statementConfig = await axios.get(
        `${server}/upload/resume/projects/problem-statement`
      );
      const reportConfig = await axios.get(
        `${server}/upload/resume/projects/report`
      );
      //Upload files direct to S3
      await axios.put(reportConfig.data.url, report, {
        headers: {
          "Content-Type": report.type
        }
      });
      await axios.put(statementConfig.data.url, probStatement, {
        headers: {
          "Content-Type": probStatement.type
        }
      });
      console.log(`formState.fields: ${JSON.stringify(formState.fields)}`);
      const { fields } = formState;
      const res = await axios.post(`${server}/resume/projects`, {
        ...fields,
        probStatement: statementConfig.data.key,
        report: reportConfig.data.key
      });
      dispatch({ type: FORM_SUCCESS });
      console.log(`Success! res.data: ${JSON.stringify(res.data, null, 2)}`);
      setIsLoading(false);
    } catch (err) {
      const formErrors = _.keyBy(err.response.data.errors, "param");
      dispatch({
        type: FORM_FAILURE,
        payload: formErrors
      });
      setIsLoading(false);
      console.log(`err: ${JSON.stringify(err, null, 2)}`);
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
        {hasSecondRepo ? (
          <>
            <Form.Group>
              <Form.Input
                label="First Repository"
                value={firstRepo}
                name="firstRepo"
                error={showErrors("firstRepo")}
                placeholder="www.github.com/firstRepo"
                width={10}
                onChange={(e, { name, value }) => updateForm(name, value)}
              />
              <Form.Input
                label="Repo Name"
                value={firstRepoName}
                name="firstRepoName"
                error={showErrors("firstRepoName")}
                placeholder="Client"
                width={6}
                onChange={(e, { name, value }) => updateForm(name, value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Second Repository"
                value={secondRepo}
                name="secondRepo"
                error={showErrors("secondRepo")}
                placeholder="www.github.com/secondRepo"
                width={10}
                onChange={(e, { name, value }) => updateForm(name, value)}
              />
              <Form.Input
                label="Repo Name"
                value={secondRepoName}
                name="secondRepoName"
                error={showErrors("secondRepoName")}
                placeholder="Server"
                width={6}
                onChange={(e, { name, value }) => updateForm(name, value)}
              />
            </Form.Group>
          </>
        ) : (
          <Form.Input
            label="Github Repository *"
            value={firstRepo}
            name="firstRepo"
            placeholder="www.github.com/yourRepo"
            error={showErrors("firstRepo")}
            onChange={(e, { name, value }) => updateForm(name, value)}
          />
        )}
        <Form.Field>
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

        <h6>Add a Problem Statement</h6>
        <Form.Field>
          {" "}
          <input
            type="file"
            accept="application/*"
            onChange={event => setStatement(event.target.files[0])}
          />
        </Form.Field>
        <h6>Add a Report</h6>
        <Form.Field>
          {" "}
          <input
            type="file"
            accept="application/*"
            onChange={event => setReport(event.target.files[0])}
          />
        </Form.Field>
        <Form.Group>
          <Form.Input
            label="Add Chips"
            value={newChip}
            name="newChip"
            //error={showErrors("secondRepoName")}
            placeholder="Chip"
            width={3}
            onChange={(e, { name, value }) => updateForm(name, value)}
          />
          {renderChips(chips)}
        </Form.Group>
        <Button onClick={handleClick} icon>
          <Icon name="plus" />
        </Button>
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
