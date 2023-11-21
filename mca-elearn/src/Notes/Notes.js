import React from "react";
import CardView from "../cards/CardView";

const Notes = () => {
  const indexes = [0, 1, 2, 3];
  return (
    <div className="notes-main">
      <div className="contents">
        <div className="cards">
          {indexes &&
            indexes.map((data, index) => (
              <CardView
                key={index}
                text={`SEMESTER ${data + 1}`}
                Image={require("../images/sem.png")}
                url={`/Subjects/${data + 1}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
