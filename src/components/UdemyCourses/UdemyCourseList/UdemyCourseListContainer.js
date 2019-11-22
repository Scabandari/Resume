import React, { useState, useEffect } from "react";
import axios from "axios";

import UdemyCourseList from "./UdemyCourseList";
import { useServer, useS3BucketEndpoint } from "../../../hooks";

const UdemyCourseListContainer = props => {
  const [courses, setCourses] = useState([]);
  const server = useServer();
  const s3Bucket = useS3BucketEndpoint();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${server}/resume/udemy-courses`);
      setCourses(result.data);
    };
    fetchData();
  }, []);

  return <UdemyCourseList courses={courses} s3Bucket={s3Bucket} />;
};

export default UdemyCourseListContainer;

