import { NavLink } from "react-router-dom";
import AdminNavCss from "./AdminNav.module.css";
// import logo from "../images/notification.png";
import { useLogout } from "../../hooks/useLogout";
const AdminNav = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <nav className={AdminNavCss.adminnavbar}>
        <h1>MCA ELearn | ADMIN</h1>
        <div className={AdminNavCss.adminlinks}>
          <NavLink to="/adminhome">{" Home"}</NavLink>
          <div className={AdminNavCss.adminbutton}>
            <button onClick={handleClick}>LOGOUT</button>
          </div>
          {/* <NavLink to="/Notes">{" placeholder"}</NavLink>
          <NavLink to="/">ChatGPT(Beta)</NavLink>
          <NavLink to="/Notifications">
            <img src={logo} alt="Notifications" />
          </NavLink>  */}
        </div>
      </nav>
    </div>
  );
};

export default AdminNav;
