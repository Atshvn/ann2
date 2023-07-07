import * as React from "react";
import { Route, Routes } from "react-router-dom";
/* import { Redirect } from 'react-router'; */

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
import "./App.css";

// layouts
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";

// views without layouts

import Dashboard from "./views/admin/Dashboard.jsx";
import Maps from "./views/admin/Maps.jsx";
import Settings from "./views/admin/Settings.jsx";
import Tables from "./views/admin/Tables.jsx";

import Login from "./views/auth/Login.jsx";
import Register from "./views/auth/Register.jsx";

import Landing from "./views/Landing.jsx";
import Profile from "./views/Profile.jsx";
import Index from "./views/Index.jsx";

function App() {
  return (
    <Routes>
      {/* add routes with layouts */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/maps" element={<Maps />} />
      <Route path="/admin/settings" element={<Settings />} />
      <Route path="/admin/tables" element={<Tables />} />

      <Route path="/auth" element={<Auth />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      {/* add routes without layouts */}
      <Route path="/landing" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Index />} />
      {/* add redirect for first page */}
      {/* <Redirect from="*" to="/" /> */}
    </Routes>
  );
}
export default App;
