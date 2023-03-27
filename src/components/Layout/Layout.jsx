import React from "react";
import Navbar from "../Navbar/Navbar";
import SubNav from "../SubNav/SubNav";

const Layout = ({ children }) => {
  return (
    <div className=''>
      <SubNav />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
