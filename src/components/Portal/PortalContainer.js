import React from "react";
import { Portal, Header, Button, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const PortalContainer = ({ open, headline, message, redirect }) => {
  let history = useHistory();

  return (
    <Portal onClose={() => history.push(redirect)} open={open}>
      <Segment
        style={{
          left: "40%",
          position: "fixed",
          top: "35%",
          zIndex: 1000
        }}
      >
        <Header>{headline}</Header>
        <p>{message}</p>

        <Button
          content="Done"
          positive
          onClick={() => history.push(redirect)}
        />
      </Segment>
    </Portal>
  );
};

export default PortalContainer;
