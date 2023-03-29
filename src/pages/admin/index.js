import { Dvr } from "@mui/icons-material";
import React from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar/AdminNavbar";
import DataTable from "../../components/Admin/DataTable/DataTable";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";

const Admin = () => {
  return (
    <div>
      <Sidebar />
      <div className=' bg-[#0288D1]/20 h-screen'>
        <div className='pt-5 px-5 md:px-10 lg:px-20 xl:px-20'>
          <div className='px-5 py-4 bg-slate-600 rounded-tl-lg rounded-tr-lg'>
            <h2 className='text-white text-2xl font-bold uppercase'>Orders</h2>
          </div>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Admin;
