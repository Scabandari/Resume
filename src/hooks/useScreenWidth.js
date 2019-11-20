import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SET_SIDEBAR_SHOWING } from '../actions/types';

const useScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const sidebarIsShowing = useSelector(state => state.navbar.sidebarIsShowing);
  const dispatch = useDispatch();

  const handleResize = () => {
    setWidth(window.innerWidth);
    if (window.innerWidth > 515 && sidebarIsShowing) {
      dispatch({ type: SET_SIDEBAR_SHOWING, payload: false });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
};

export default useScreenWidth;

// reference: https://gist.github.com/gaearon/cb5add26336003ed8c0004c4ba820eae
