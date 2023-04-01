import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { images } from "../../../public/assets/images";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='px-5 h-20 md:px-10 lg:px-20 xl:px-40 flex justify-between items-center relative'>
      <Link href='/'>
        <Image src={images.logo} />
      </Link>
      <button
        className='text-3xl lg:hidden'
        onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <FaTimes /> : <HiOutlineMenuAlt3 />}
      </button>
      <ul
        className={`lg:flex justify-center items-start gap-8 space-y-5 lg:space-y-0 font-bold text-md absolute top-20 ${
          showMenu ? "left-0" : "-left-full"
        } w-full lg:w-auto text-center h-screen lg:h-auto lg:bg-white bg-[#0288D1] lg:static z-50 lg:text-[#222] text-white menu-transition`}>
        <li
          onClick={() => setShowMenu(false)}
          className='border-b-2 border-transparent hover:border-b-2 lg:hover:border-[#0288D1] hover:border-[#fff] transition-all delay-100 mt-5 lg:mt-0'>
          <Link href='#'>হোম</Link>
        </li>
        <li
          onClick={() => setShowMenu(false)}
          className='border-b-2 border-transparent hover:border-b-2 lg:hover:border-[#0288D1] hover:border-[#fff] transition-all delay-100'>
          <Link href='#'>সার্ভিস সমূহ </Link>
        </li>
        <li
          onClick={() => setShowMenu(false)}
          className='border-b-2 border-transparent hover:border-b-2 lg:hover:border-[#0288D1] hover:border-[#fff] transition-all delay-100'>
          <Link href='#'>আমাদের সম্পর্কে</Link>
        </li>
        <li
          onClick={() => setShowMenu(false)}
          className='border-b-2 border-transparent hover:border-b-2 lg:hover:border-[#0288D1] hover:border-[#fff] transition-all delay-100'>
          <Link href='/admin'>Admin</Link>
        </li>
        <li className='flex justify-center text-xl items-center'>
          <a href='' target='_blank'>
            <BsFacebook className='text-[#0288D1]' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
