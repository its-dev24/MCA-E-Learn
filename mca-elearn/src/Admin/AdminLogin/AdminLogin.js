import React from "react";
import AdminLoginCSS from "./AdminLogin.module.css";
import { useState } from "react";
import img from "../../images/login-card.jpg";
import { useLogin } from "../../hooks/useLogin";
import { ToastContainer, toast } from "react-toastify";
import { useAuthContext } from "../../hooks/useAuthContext";
const AdminLogin = () => {
  const { user } = useAuthContext();
  const [username, setUser] = useState();
  const [pass, setPass] = useState();
  const { login, isLoading, error } = useLogin();
  const handleSubmit = async (e) => {
    try {
      await login(username, pass);
    } catch (error) {
      toast(error);
    }
  };
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
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
          <div className={AdminLoginCSS.pass}>
            {/* <label htmlFor="password">PASSWORD</label> */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="PASSWORD"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <div className={AdminLoginCSS.Loginbutton}>
            <button onClick={handleSubmit} disabled={isLoading}>
              LOGIN
            </button>
            {error && <ToastContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
