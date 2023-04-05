import React from "react";
import { FaTimes } from "react-icons/fa";

const OrderModal = ({ setShowModal }) => {
  const closeBackdrop = (e) => {
    if (e.target.id === "backdrop") {
      setShowModal(false);
    }
  };
  return (
    <div
      className='fixed inset-0 h-full bg-black/70 z-50 flex justify-center items-center'
      onClick={closeBackdrop}>
      <div
        className='w-11/12 h-[90%] m-auto bg-white rounded-2xl relative'
        data-aos='fade-up'>
        <button
          className='absolute top-5 right-5 text-2xl text-gray-600'
          onClick={() => setShowModal(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
