import React from "react";
import Swal from "sweetalert2";
import { images } from "../../../public/assets/images";

const Services = () => {
  const services = [1, 2, 3, 4, 5, 6];
  const triggerSwrl = () => {
    Swal.fire("Good job!", "You clicked the button!", "success");
  };
  return (
    <div className='px-5 md:px-10 lg:px-20 xl:px-40 pb-20'>
      <h2 className='text-[32px] text-[#0288D1] text-center pt-20 pb-5'>
        আমাদের সার্ভিস সমূহ
      </h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-5 gap-y-10 justify-center items-center'>
        {services.map((item) => (
          <div
            data-aos='fade-up'
            data-aos-duration='700'
            className='text-center'
            key={item}>
            <img
              className='w-full h-full object-contain'
              src={images.serviceImg.src}
              alt=''
            />
            <h4 className='text-[22px] my-5'>এসি সার্ভিসিং এবং অন্যান্য</h4>
            <button
              onClick={triggerSwrl}
              className='py-2 px-8 bg-[#0288D1] transition-all duration-300 hover:bg-[#165e85] rounded-3xl text-white'>
              বিস্তারিত
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
