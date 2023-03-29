import React from "react";

const MessageSection = () => {
  return (
    <div className='flex justify-center items-center lg:py-32 py-20 px-5'>
      <div className='w-fit text-center'>
        <h2 className='text-[32px] text-[#0288D1] text-center pb-10 '>
          আপনি কি আমাদেরকে কোন মেসেজ পাঠাতে চান?
        </h2>
        <form action=''>
          <textarea
            className='w-full outline-[#0288D1] box-shadow_one rounded-xl border border-gray-400 p-5'
            cols='20'
            rows='7'
            placeholder='আপনার মূল্যবান বার্তাটি লিখুন।'></textarea>
          <button className='py-2 px-8 bg-[#0288D1] transition-all duration-300 hover:bg-[#165e85] rounded-3xl text-white mt-5'>
            পাঠান
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageSection;
