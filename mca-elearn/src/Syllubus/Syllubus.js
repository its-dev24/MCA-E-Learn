import React from "react";
import CardView from "../cards/CardView";

const Syllubus = () => {
  const img = require("../images/sticky-notes.png");
  return (
    <div className="notes-main">
      <div className="contents">
        <div className="cards">
          <CardView text="SYLLUBUS S1 & S2" image={img} />
          <CardView text="SYLLUBUS S3 & S4" image={img} />
        </div>
      </div>
    </div>
  );
};

export default Syllubus;
