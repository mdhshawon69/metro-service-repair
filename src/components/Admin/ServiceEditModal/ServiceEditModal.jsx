import React from "react";
import { FaTimes } from "react-icons/fa";

const ServiceEditModal = ({ setShowModal }) => {
  return (
    <div
      className='fixed inset-0 h-full bg-black/70 z-50 flex justify-center items-center'
      onClick={() => setShowModal(false)}>
      <div
        className='w-11/12 h-[90%] m-auto bg-white rounded-2xl relative p-10 flex justify-between gap-5'
        data-aos='fade-up'>
        <form className='flex-1'>
          <span>
            <label htmlFor=''></label>
            <input
              type='text'
              className='p-2 w-full border border-gray-500 rounded-lg block'
            />
          </span>
        </form>
        <div className='flex-1'></div>
        <button
          className='absolute top-5 right-5 text-2xl text-gray-600'
          onClick={() => setShowModal(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default ServiceEditModal;
