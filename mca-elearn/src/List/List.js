import React from "react";
import "./List.css";
import { Link } from "react-router-dom";
const List = ({ title, url, type }) => {
  const img = require("../images/menu.png");
  const img2 = require("../images/pdf.png");
  const apiUrl = `http://localhost:5000/${type}/${url}`;
  return (
    <div className="list-main">
      <Link to={apiUrl} target="_blank" rel="noopener noreferrer">
        <div className="list-content">
          {/* <img src={img2} /> */}
          <h3>{title}</h3>
          <img src={img} />
        </div>
      </Link>
    </div>
  );
};

export default List;
