import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";
import { cloneDeep } from "lodash";

import UdemyCourseCard from "../UdemyCourseCard";
import { useScreenWidth } from "../../../hooks";
import "./UdemyCourseList.scss";

const UdemyCourseList = ({ courses, s3Bucket }) => {
  const width = useScreenWidth();
  const history = useHistory();
  const [columnList, setColumnList] = useState([]);

  useEffect(() => {
    const setColumns = () => {
      let colList;
      let incVal = 0;
      if (width > 1300) {
        colList = [[], [], []];
      } else if (width > 850) {
        colList = [[], []];
      } else {
        colList = [[]];
      }

      const localCourses = cloneDeep(courses);
      // distribute projects evenly among columns
      while (localCourses.length > 0) {
        colList[incVal].push(localCourses.pop());
        incVal = (incVal + 1) % colList.length;
      }
      setColumnList(colList);
    };
    setColumns();
  }, [width, courses]);

  return courses ? (
    <div className="UdemyCourseList">
      <div className="UdemyCourseList_list">
        {columnList.map((column, index) => {
          return (
            <div key={index}>
              {column.map(course => {
                return (
                  <UdemyCourseCard
                    key={course._id}
                    cardData={course}
                    s3Bucket={s3Bucket}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="UdemyCourseList_buttonCreate">
        <Button
          style={{ marginRight: `${width < 500 ? "3rem" : "8rem"}` }}
          circular
          size="massive"
          negative
          icon="plus"
          onClick={() => history.push("/udemy-course-create")}
        />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default UdemyCourseList;
