import React from "react";
import "./CardView.css";
import { Link } from "react-router-dom";
//Imported images

let cardText = "PLACEHOLDER";

const CardView = ({ text, image }) => {
  return (
    <div className="Card-body">
      <Link to="/Notes">
        <div className="card-contents">
          <div className="image">
            <img src={image} />
          </div>
          <div className="text">{text}</div>
        </div>
      </Link>
    </div>
  );
};

export default CardView;
