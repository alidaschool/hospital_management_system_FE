import React from "react";
import NavBar from "../NavBar/Navbar";

import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default Layout;
