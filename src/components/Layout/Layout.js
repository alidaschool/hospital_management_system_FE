import React from "react";
// import Home from "../../pages/Home/Home";

import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Home /> */}
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default Layout;
