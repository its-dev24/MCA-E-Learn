import React from "react";
import AdminDashCSS from "./AdminDashboard.module.css";
import img from "../../images/adminbanner.jpg";
import AdminCards from "../AdminCards/AdminCards";
import notifiImg from "../../images/add-noti.png";
import approveNoteImg from "../../images/tick-mark.png";
const AdminDashboard = () => {
  return (
    <div className={AdminDashCSS.dashMain}>
      <div className={AdminDashCSS.adminBox}>
        <div className={AdminDashCSS.adminImage}>
          <img src={img} alt="banner" />
        </div>
        <div className={AdminDashCSS.adminCards}>
          <div className={AdminDashCSS.adminNotification}>
            <AdminCards text="NOTIFICATIONS" image={notifiImg} />
          </div>
          <div className={AdminDashCSS.adminNotes}>
            <AdminCards
              text="NOTES"
              image={approveNoteImg}
              url={"/adminhome/adminNotes"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
