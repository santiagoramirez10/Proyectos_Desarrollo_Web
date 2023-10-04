import React from "react";
import { Outlet, useLocation } from "react-router-dom/dist";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Partners from "./Partners";

const Layout = () => {
  const location = useLocation();

  console.log(location);
  return (
    <>
      <Navigation />
      <div className={location.pathname === "/" ? "" : "pd"}>
        <Outlet />
      </div>
      <Partners/>
      <Footer />
    </>
  );
};

export default Layout;
