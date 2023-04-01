import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import ServiceEditModal from "../ServiceEditModal/ServiceEditModal";

const ServiceItems = () => {
  const [showModal, setShowModal] = useState(false);
  const serviceQuery = async () => {
    return await axios.get("/api/service");
  };
  const { data, loading } = useQuery("services", serviceQuery);

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-5 gap-y-10 justify-center items-center px-5 md:px-10 lg:px-20 xl:px-40 py-20 bg-white'>
      {data?.data?.data?.map((item, i) => (
        <div
          data-aos='fade-up'
          data-aos-duration='700'
          className='text-center'
          key={item}>
          <img
            className='w-full h-full object-contain'
            src={item.image}
            alt=''
          />
          <h4 className='text-[22px] my-5'>{item.title}</h4>
          <button
            className='py-2 px-8 bg-[#0288D1] transition-all hover:scale-110 duration-300 ease-in-out hover:bg-[#165e85] rounded-3xl text-white'
            onClick={setShowModal}>
            Edit
          </button>
        </div>
      ))}
      {showModal && <ServiceEditModal setShowModal={setShowModal} />}
    </div>
  );
};

export default ServiceItems;
