import React, { useState } from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar/AdminNavbar";
import DataTable from "../../components/Admin/DataTable/DataTable";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import ServiceCreateForm from "../../components/Admin/ServiceCreateForm/ServiceCreateForm";
import ServiceItems from "../../components/Admin/ServiceItems/ServiceItems";

const Admin = () => {
  const [showPage, setShowPage] = useState("Dashboard");
  return (
    <div>
      <Sidebar setShowPage={setShowPage} showPage={showPage} />
      <div className=' bg-[#0288D1]/20 min-h-screen'>
        <div className='pt-5 px-5 md:px-10 lg:px-20 xl:px-20 pb-20'>
          {showPage === "Dashboard" && (
            <>
              <div className='px-5 py-4 bg-slate-600 rounded-tl-lg rounded-tr-lg'>
                <h2 className='text-white text-2xl font-bold uppercase'>
                  Orders
                </h2>
              </div>
              <DataTable />
            </>
          )}
          {showPage === "Services" && (
            <div className='space-y-20'>
              <div>
                <div className='px-5 py-4 bg-slate-600 rounded-tl-lg rounded-tr-lg'>
                  <h2 className='text-white text-2xl font-bold uppercase'>
                    Create New Service
                  </h2>
                </div>
                <ServiceCreateForm />
              </div>

              <div>
                <div className='px-5 py-4 bg-slate-600 rounded-tl-lg rounded-tr-lg'>
                  <h2 className='text-white text-2xl font-bold uppercase'>
                    Existing Services
                  </h2>
                </div>
                <ServiceItems />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
