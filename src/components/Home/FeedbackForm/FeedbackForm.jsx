import React from "react";
import { MdModeEdit } from "react-icons/md";

const FeedbackForm = () => {
  return (
    <div className='flex justify-center items-center lg:py-32 py-20 px-5'>
      <div className='w-fit text-center'>
        <h2 className='text-[32px] text-[#0288D1] text-center pb-10 '>
          আপনি কি আমাদেরকে কোন মেসেজ পাঠাতে চান?
        </h2>
        <form action=''>
          <div className='rounded-xl overflow-hidden outline-none box-shadow_one'>
            <span className='relative'>
              <input
                className='py-3 border-b border-[#0288D1] px-5 w-full outline-none'
                type='text'
                name=''
                id=''
                placeholder='আপনার নাম'
              />
              <MdModeEdit className='absolute text-lg text-black/40 z-50 top-1 right-2' />
            </span>
            <span className='relative'>
              <input
                className='py-3 border-b border-[#0288D1] px-5 w-full outline-none'
                type='text'
                name=''
                id=''
                placeholder='আপনার মন্তব্য লিখুন'
              />
              <MdModeEdit className='absolute text-lg text-black/40 z-50 top-1 right-2' />
            </span>
          </div>
          <button className='py-2 px-8 bg-[#0288D1] transition-all duration-300 hover:bg-[#165e85] rounded-3xl text-white mt-5'>
            পাঠান
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
