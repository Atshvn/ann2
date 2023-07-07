import React from "react";
import { Router, Route } from "react-router-dom";

// components
import Navbar from "../components/Navbars/AuthNavbar.jsx"
import FooterSmall from "../components/Footers/FooterSmall.jsx"; 

// views
import Login from "../views/Auth/Login.jsx";
import Register from "../views/Auth/Register.jsx";

export default function Auth({ children, ...rest }) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + "/img/register_bg_2.png" + ")",
            }}
          ></div>
          {/* <Router>
            <Route path="/auth/login" exact component={<Login/>} />
            <Route path="/auth/register" exact component={<Register/>} />
            <Redirect from="/auth" to="/auth/login" />
          </Router> */}
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
