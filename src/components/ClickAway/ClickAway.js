import React, { useRef } from 'react';
import { useClickAway } from '../../hooks';

const ClickAway = props => {
  const { callFunction, arg, condition } = props;
  const wrapperRef = useRef(null);
  useClickAway(wrapperRef, callFunction, arg, condition);

  return <div ref={wrapperRef}>{props.children}</div>;
};

export default ClickAway;
