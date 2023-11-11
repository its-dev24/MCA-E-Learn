import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../images/notification.png";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>MCA ELearn</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Notes">Notes</Link>
          {/* <Link to="/">ChatGPT(Beta)</Link> */}
          <Link to="/Notifications">
            <img src={logo} alt="Notifications" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
