import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../images/notification.png";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>MCA ELearn</h1>
        <div className="links">
          <NavLink to="/">{" Home"}</NavLink>
          {/* <NavLink to="/Notes">{" Notes"}</NavLink> */}
          {/* <NavLink to="/">ChatGPT(Beta)</NavLink> */}
          <NavLink to="/Notifications">
            <img src={logo} alt="Notifications" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
