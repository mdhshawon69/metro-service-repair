import { useRouter } from "next/router";
import React from "react";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import SubNav from "../Home/SubNav/SubNav";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className=''>
      {router.pathname !== "/admin" && (
        <div className='div'>
          <SubNav />
          <Navbar />
        </div>
      )}
      {children}
      {router.pathname !== "/admin" && <Footer />}
    </div>
  );
};

export default Layout;
