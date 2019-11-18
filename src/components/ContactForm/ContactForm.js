import React, { useEffect, useState } from 'react';
import { Form, Header, Button, Checkbox } from 'semantic-ui-react';
import _ from 'lodash';

import { useServer, useScreenWidth } from '../../hooks';
//import './ContactForm.scss';
import Axios from 'axios';

const styles = {
  contactForm: {
    margin: '5rem'
  }
};

const ContactForm = props => {
  const server = useServer();
  const width = useScreenWidth();
  const [formStyles, setFormStyles] = useState(styles.contactForm);
  const [isWaiting, setIsWaiting] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    let margin = '5rem';
    if (width < 500) {
      margin = '1.5rem';
    } else if (width < 750) {
      margin = '3rem';
    }
    setFormStyles({ ...formStyles, margin });
  }, [width]);

  const clearForm = () => {
    setName('');
    setCompany('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = async () => {
    setIsWaiting(true);
    setErrors({});
    try {
      const res = await Axios.post(`${server}/email`, {
        name,
        company,
        email,
        message,
        checked
      });
      
      setIsWaiting(false);
      clearForm();
    } catch (err) {
      setErrors(_.keyBy(err.response.data.errors, 'param'));
      setIsWaiting(false);
    }
  };

  const showErrors = name => {
    return (
      errors[name] && {
        content: errors[name]['msg'],
        pointing: 'below'
      }
    );
  };

  return (
    <div style={formStyles}>
      <Header as='h2'>
        Contact Us
        <Header.Subheader>
          This form sends a message to my personal email.
        </Header.Subheader>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label='Name *'
          value={name}
          placeholder='Your name'
          onChange={(e, { name, value }) => setName(value)}
          error={showErrors('name')}
        />
        <Form.Input
          label='Company'
          value={company}
          placeholder='Your company'
          onChange={(e, { name, value }) => setCompany(value)}
          error={showErrors('company')}
        />
        <Form.Input
          label='Email *'
          value={email}
          placeholder='your@email.com'
          onChange={(e, { name, value }) => setEmail(value)}
          error={showErrors('email')}
        />
        <Form.Field>
          <Checkbox
            label='Send yourself a copy'
            checked={checked}
            onClick={() => setChecked(!checked)}
          />
        </Form.Field>

        <Form.TextArea
          label='Message *'
          value={message}
          style={{ minHeight: 150 }}
          onChange={(e, { name, value }) => setMessage(value)}
          error={showErrors('message')}
        />
        <Button loading={isWaiting} content='Submit' />
      </Form>
    </div>
  );
};

export default ContactForm;
