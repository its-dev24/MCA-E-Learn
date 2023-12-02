import React from "react";
import { Link } from "react-router-dom";
import AdminCardsCSS from "./AdminCards.module.css";
const AdminCards = ({ text, image, url }) => {
  return (
    <div className={AdminCardsCSS.adminCardsBody}>
      <Link to={url}>
        <div className={AdminCardsCSS.adminCardContent}>
          <div className={AdminCardsCSS.adminCardImage}>
            <img src={image} alt="404" />
          </div>
          <div className={AdminCardsCSS.adminCardText}>{text}</div>
        </div>
      </Link>
    </div>
  );
};

export default AdminCards;
