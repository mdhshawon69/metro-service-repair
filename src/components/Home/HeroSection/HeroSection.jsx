import Image from "next/image";
import React, { useEffect } from "react";
import { images } from "../../../public/assets/images";
import AOS from "aos";

const HeroSection = () => {
  return (
    <div className='font-noirrit flex lg:justify-between items-center px-5 md:px-10 lg:px-20 xl:px-40 bg-[#e6f3fa] lg:h-[83vh] h-screen flex-col-reverse lg:flex-row'>
      <div className='flex-1' data-aos='fade-right' data-aos-duration='700'>
        <h1 className='2xl:text-[55px] md:text-[40px] text-[35px] lg:text-left sm:mx-auto sm:my-5 lg:my-0 font-bold font-bangla'>
          <span className='inline-block '>আমাদের সাথে সরাসরি</span>{" "}
          <span className='inline-block'>যোগাযোগ করতে</span>{" "}
          <span className='inline-block'>কল করুন।</span>
        </h1>
        <button className='py-[10px] px-8 text-white mt-5 transition-all duration-300 hover:bg-[#165e85] bg-[#0288D1] rounded-tl-xl rounded-tr-xl rounded-br-xl'>
          কল করুন
        </button>
      </div>
      <Image
        data-aos='fade-left'
        data-aos-duration='700'
        className='flex-1 2xl:w-[65%] 2xl:h-[65%] lg:w-[60%] md:h-full md:w-full lg:w-[60%] md:h-fit md:w-[60%] w-4/5 h-1/2 object-contain'
        src={images.headerSvg}
      />
    </div>
  );
};

export default HeroSection;
