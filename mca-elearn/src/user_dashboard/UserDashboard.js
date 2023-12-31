import React from "react";
import "./UserDashboard.css";
import CardView from "../cards/CardView";
import { Link } from "react-router-dom";
const UserDashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="contents">
        <div className="cards">
          <CardView
            text="SYLLABUS"
            image={require("../images/syllubus.png")}
            url="/Syllubus"
          />
          <CardView
            text="NOTES"
            image={require("../images/notes.png")}
            url="/Semester"
          />
          <CardView
            text="NOTIFICATIONS"
            image={require("../images/notification-card.png")}
            url="/Notifications"
          />
          <CardView
            text="CONTRIBUTIONS"
            image={require("../images/contribute.png")}
            url={"/Contributions"}
          />
          <CardView
            text="PLACEHOLDER"
            image={require("../images/syllubus.png")}
          />
          <CardView
            text="PLACEHOLDER"
            image={require("../images/syllubus.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
