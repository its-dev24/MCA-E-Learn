import React from "react";
import AdminNav from "../AdminNav/AdminNav";
import { Outlet } from "react-router-dom";
import AdminMain from "../Admin.module.css";
const AdminLayout = () => {
  return (
    <div className={AdminMain.adminlayout}>
      <AdminNav />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
