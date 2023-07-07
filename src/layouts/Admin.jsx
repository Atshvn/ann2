import React from "react";
import { Route, Router } from "react-router-dom";

// components

import AdminNavbar from "../components/navbars/AdminNavbar.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import HeaderStats from "../components/headers/HeaderStats.jsx";
import FooterAdmin from "../components/footers/FooterAdmin.jsx";

// views

import Dashboard from "../views/admin/Dashboard.jsx";
import Maps from "../views/admin/Maps.jsx";
import Settings from "../views/admin/Settings.jsx";
import Tables from "../views/admin/Tables.jsx";

export default function Admin({ children, ...rest }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {/* <Router>
            <Route path="/admin/dashboard" element={<Dashboard/>} />
            <Route path="/admin/maps" element={<Maps/>} />
            <Route path="/admin/settings" element={<Settings/>} />
            <Route path="/admin/tables" element={<Tables/>} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Router> */}
          children
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
