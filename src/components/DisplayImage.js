import React, { useEffect, useState, useReducer, useRef } from "react";
import axios from "axios";

const DisplayImage = () => {
  const [img, setImage] = useState("");

  useEffect(() => {
    let res;
    (async function() {
      res = await axios.get(
        "https://resume-files-32123.s3.us-east-2.amazonaws.com/resume/fd55ffb0-0c9a-11ea-b2e6-9b5232426021.jpeg"
      );
    })();
    console.log(`res: ${res}`);
    //setImage();
  }, []);

  return (
    <div>
      <img src="https://resume-files-32123.s3.us-east-2.amazonaws.com/resume/fd55ffb0-0c9a-11ea-b2e6-9b5232426021.jpeg" />
    </div>
  );
};

export default DisplayImage;

//<img src="s3://resume-files-32123/resume/6a0021d0-0c97-11ea-9e52-4d0a9f91c516.jpeg" />
