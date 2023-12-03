import React from "react";
import AdminNav from "../AdminNav/AdminNav";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Outlet, Navigate } from "react-router-dom";
import AdminMain from "../Admin.module.css";
const AdminLayout = () => {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div className={AdminMain.adminlayout}>
      <AdminNav />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
