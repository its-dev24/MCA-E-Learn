import React from "react";
import AdminListCSS from "./AdminList.module.css";
import { Link } from "react-router-dom";
const AdminList = ({ title, url }) => {
  return (
    <div className={AdminListCSS.adminListMain}>
      <div className={AdminListCSS.adminListContent}>
        {/* <img src={img2} /> */}
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default AdminList;
