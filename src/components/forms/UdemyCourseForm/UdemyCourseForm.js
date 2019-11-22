import React, { useEffect, useState, useReducer, useRef } from "react";
import { Form, Header, Button, Checkbox, Dropdown } from "semantic-ui-react";
import _ from "lodash";
//import { inspect } from 'util';

import { Portal } from "../..";
import { useServer, useScreenWidth } from "../../../hooks";
//import './ContactForm.scss';
import axios from "axios";

const UPDATE_FORM_FIELD = "UPDATE_FORM_FIELD";
const CLEAR_FORM = "CLEAR_FORM";
const FORM_SUBMIT = "FORM_SUBMIT";
const FORM_SUCCESS = "FORM_SUCCESS";
const FORM_FAILURE = "FORM_FAILURE";

const SET_ERRORS = "SET_ERRORS";

const styles = {
  contactForm: {
    margin: "5rem"
  }
};

const initialState = {
  fields: {
    title: "myTitle",
    author: "myAuthor",
    link: "www.google.com",
    review: "myReview",
    purchased: false,
    started: false,
    completed: false,
    rating: 0
  },
  errors: {},
  isLoading: false,
  portalIsOpen: false
};

// ref: https://react.semantic-ui.com/modules/dropdown/#variations-compact
const getDropdownOptions = (number, prefix = "Choice ") =>
  _.times(number, index => ({
    key: index,
    text: `${prefix}${index}`,
    value: index
  }));

const reducer = (state, { type, payload, name }) => {
  switch (type) {
    case UPDATE_FORM_FIELD:
      return { ...state, fields: { ...state.fields, [name]: payload } };
    case FORM_SUBMIT:
      return { ...state, errors: {}, isLoading: true };
    case FORM_SUCCESS:
      return { ...initialState, portalIsOpen: true };
    case FORM_FAILURE:
      return { ...state, errors: payload, isLoading: false };
    case CLEAR_FORM: // todo am i using this?
      return initialState;
    case SET_ERRORS:
      return { ...state, errors: payload };
    default:
      throw new Error("Undefined type in reducer for UdemyCourseForm");
  }
};

const UdemyCourseForm = props => {
  const server = useServer();
  const width = useScreenWidth();
  const fileInputRef = useRef();
  const [file, setFile] = useState({});
  //let file = useRef(null);
  const [formState, dispatch] = useReducer(reducer, initialState);

  const [formStyles, setFormStyles] = useState(styles.contactForm);
  const [isLoading, setIsLoading] = useState(false);
  //const [portalIsOpen, setPortalIsOpen] = useState(false);

  const portalRedirect = "/udemy-courses";
  const portalHeadline = "Success!";
  const portalMessage = "View your updated list of Udemy courses.";

  useEffect(() => {
    let margin = "5rem";
    if (width < 500) {
      margin = "1.5rem";
    } else if (width < 750) {
      margin = "3rem";
    }
    setFormStyles({ ...formStyles, margin });
  }, [width]);

  //  WATCH file
  useEffect(() => {
    //console.log(`file: ${JSON.stringify(file, null, 2)}`);
    console.log(`file.name: ${file.name}`);
    console.log(`file.name: ${file.name}`);
  }, [file]);

  //   useEffect(() => {
  //     //console.log(`formState: ${JSON.stringify(formState, null, 2)}`);
  //   }, [formState]);

  const handleSubmit = async event => {
    event.preventDefault();
    const uploadConfig = await axios.get(`${server}/upload`);
    try {
      await axios.put(uploadConfig.data.url, file, {
        headers: {
          "Content-Type": file.type
        }
      });
      const res = await axios.post(`${server}/resume/udemy-courses`, {
        ...formState.fields,
        imgUrl: uploadConfig.data.key
      });

      console.log(`Success! res.data: ${JSON.stringify(res.data, null, 2)}`);
    } catch (err) {
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
    title,
    author,
    link,
    purchased,
    started,
    completed,
    rating,
    review
  } = formState.fields;

  return (
    <div style={formStyles}>
      <Header as="h2">Create Udemy Course</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Title *"
          value={title}
          name="title"
          placeholder="Course title"
          error={showErrors("title")}
          onChange={(e, { name, value }) =>
            dispatch({
              type: UPDATE_FORM_FIELD,
              payload: value,
              name
            })
          }
        />
        <Form.Input
          label="Author *"
          value={author}
          name="author"
          placeholder="Course author"
          error={showErrors("author")}
          onChange={(e, { name, value }) =>
            dispatch({
              type: UPDATE_FORM_FIELD,
              payload: value,
              name
            })
          }
        />
        <Form.Input
          label="Link *"
          value={link}
          name="link"
          placeholder="URL link to course"
          error={showErrors("link")}
          onChange={(e, { name, value }) =>
            dispatch({
              type: UPDATE_FORM_FIELD,
              payload: value,
              name
            })
          }
        />
        <Form.Field>
          <Checkbox
            label="Purchased"
            name="purchased"
            checked={purchased}
            onChange={(e, { name, value }) =>
              dispatch({
                type: UPDATE_FORM_FIELD,
                payload: !purchased,
                name
              })
            }
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Started"
            name="started"
            checked={started}
            onChange={(e, { name, value }) =>
              dispatch({
                type: UPDATE_FORM_FIELD,
                payload: !started,
                name
              })
            }
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Completed"
            name="completed"
            checked={completed}
            onChange={(e, { name, value }) =>
              dispatch({
                type: UPDATE_FORM_FIELD,
                payload: !completed,
                name
              })
            }
          />
        </Form.Field>

        <Dropdown
          text={`Rating: ${rating}`}
          onChange={(e, { value }) =>
            dispatch({
              type: UPDATE_FORM_FIELD,
              payload: value,
              name: "rating"
            })
          }
          compact
          selection
          options={getDropdownOptions(6, "")}
        />
        <br />
        <br />
        <h5>Add an Image</h5>
        <input
          type="file"
          accept="image/*"
          onChange={event => setFile(event.target.files[0])}
        />
        {/* <Button
          content="Choose File"
          labelPosition="left"
          icon="file"
          onClick={() => fileInputRef.current.click()}
        /> */}
        {/* <input
          ref={fileInputRef}
          type="file"
          name="file"
          hidden
          onChange={event => {
            //await axios.post(`${server}/upload`, event.target.files);
            console.log(`event.target.files: ${event.target.files}`);
            console.log(
              `event.target.files[0]: ${JSON.stringify(event.target.files[0])}`
            );
          }}
        /> */}
        <Form.TextArea
          label="Review *"
          value={review}
          name="review"
          style={{ minHeight: 150 }}
          error={showErrors("review")}
          onChange={(e, { name, value }) =>
            dispatch({
              type: UPDATE_FORM_FIELD,
              payload: value,
              name
            })
          }
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

export default UdemyCourseForm;
