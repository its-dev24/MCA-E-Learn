import React from "react";
import AdminLoginCSS from "./AdminLogin.module.css";
import { useState } from "react";
import img from "../../images/login-card.jpg";
const AdminLogin = () => {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  return (
    <div className={AdminLoginCSS.adminMain}>
      <div className={AdminLoginCSS.adminLoginBox}>
        <div className={AdminLoginCSS.adminLeft}>
          <img src={img} alt="login image" />
        </div>
        <div className={AdminLoginCSS.adminRight}>
          <h2>ADMIN LOGIN</h2>
          <div className={AdminLoginCSS.username}>
            {/* <label htmlFor="username">USERNAME</label> */}
            <input
              type="text"
              name="username"
              id="username"
              placeholder="USERNAME"
            />
          </div>
          <div className={AdminLoginCSS.pass}>
            {/* <label htmlFor="password">PASSWORD</label> */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="PASSWORD"
            />
          </div>
          <div className={AdminLoginCSS.Loginbutton}>
            <button>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
