import React from "react";
import "./UserDashboard.css";
import CardView from "../cards/CardView";
import { Link } from "react-router-dom";
const UserDashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="contents">
        <div className="cards">
          <CardView />
          <CardView />
          <CardView />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
