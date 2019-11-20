import React, { useRef, useEffect } from 'react';

export default function useClickAway(ref, callFunction, arg, condition) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      if (condition) {
        callFunction(arg);
      }
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

// ref: https://codesandbox.io/s/outside-alerter-hooks-lmr2y?module=%2Fsrc%2FOutsideAlerter.js
