import React from "react";
import { ImLocation } from "react-icons/im";

const SubNav = () => {
  return (
    <div className='bg-[#0288D1] py-3 px-5 md:px-10 lg:px-20 xl:px-40 flex lg:flex-row md:flex-row flex-col justify-between items-center text-white md:text-sm text-xs gap-1 capitalize'>
      <p>Welcome to our Metro Service.Repair!</p>
      <p className='flex justify-center items-center gap-0.5'>
        <ImLocation className='text-lg' />{" "}
        house-kha/5/1.road-10.nikunjo-2.khilkhet dhaka -1229
      </p>
    </div>
  );
};

export default SubNav;
