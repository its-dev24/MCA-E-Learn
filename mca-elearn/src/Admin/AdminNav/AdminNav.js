import { NavLink } from "react-router-dom";
import AdminNavCss from "./AdminNav.module.css";
// import logo from "../images/notification.png";
const AdminNav = () => {
  return (
    <div>
      <nav className={AdminNavCss.adminnavbar}>
        <h1>MCA ELearn</h1>
        <div className={AdminNavCss.adminlinks}>
          {/* <NavLink to="/">{" Home"}</NavLink>
          <NavLink to="/Notes">{" placeholder"}</NavLink>
          <NavLink to="/">ChatGPT(Beta)</NavLink>
          <NavLink to="/Notifications">
            <img src={logo} alt="Notifications" />
          </NavLink> */}
        </div>
      </nav>
    </div>
  );
};

export default AdminNav;
