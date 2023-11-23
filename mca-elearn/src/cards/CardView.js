import React from "react";
import "./CardView.css";
import { Link } from "react-router-dom";
//Imported images

const CardView = ({ text, image, url }) => {
  return (
    <div className="Card-body">
      <Link to={url}>
        <div className="card-contents">
          <div className="image">
            <img src={image} alt="404" />
          </div>
          <div className="text">{text}</div>
        </div>
      </Link>
    </div>
  );
};

export default CardView;
