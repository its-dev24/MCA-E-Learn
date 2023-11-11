import React from "react";
import "./CardView.css";
import { Link } from "react-router-dom";
const CardView = () => {
  return (
    <div className="Card-body">
      <Link to="/$">
        <div className="card-contents"></div>
      </Link>
    </div>
  );
};

export default CardView;
