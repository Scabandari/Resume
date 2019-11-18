import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => setWidth(window.innerWidth);

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
