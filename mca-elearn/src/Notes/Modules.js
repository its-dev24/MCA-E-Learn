import React from "react";
import CardView from "../cards/CardView";
import { useParams } from "react-router-dom";

const Module = () => {
  const { semester, subjectCode } = useParams();
  console.log(semester, subjectCode);
  const img = require("../images/module.png");
  const indexes = [0, 1, 2, 3, 4];
  return (
    <div className="notes-main">
      <div className="contents">
        <div className="cards">
          {indexes &&
            indexes.map((data, index) => (
              <CardView
                key={index}
                text={`MODULE ${data + 1}`}
                image={img}
                url={`/Notes/${semester}/${subjectCode}/${data + 1}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Module;
