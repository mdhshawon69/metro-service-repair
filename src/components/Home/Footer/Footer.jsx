import React from "react";
import { images } from "../../../public/assets/images";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='px-5 md:px-10 lg:px-20 xl:px-40 border-t border-gray-300 py-14 flex justify-between md:items-center flex-col md:flex-row'>
      <div className='space-y-8 mb-5 md:mb-0'>
        <Link href='/'>
          <img
            className='md:w-full w-4/5 md:h-full h-4/5 object-contain'
            src={images.logo.src}
            alt=''
          />
        </Link>
        <p className='text-[18px] flex justify-start gap-1'>
          <ImLocation className='text-xl' /> বাড়ি-বি/৫/১, রোড-১০, নিকুঞ্জ-২,{" "}
          <br /> খিলক্ষেত, ঢাকা-১২২৯
        </p>
      </div>

      <div className='space-y-4'>
        <p className='text-[18px] flex justify-start items-center gap-2'>
          <BsFillTelephoneFill /> +৮৮০ ১৮১১১১২০৬৩
        </p>
        <p className='text-[18px] flex justify-start items-center gap-2'>
          <BsFillTelephoneFill /> +৮৮০ ১৮১১১১২০৬৩
        </p>
        <p className='text-[18px] flex justify-start items-center gap-2'>
          <BiMailSend className='text-2xl' /> robingazi11122@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
