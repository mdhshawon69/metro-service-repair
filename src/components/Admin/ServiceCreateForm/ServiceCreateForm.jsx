import React, { useRef, useState } from "react";
import { images } from "../../../public/assets/images";
import axios from "axios";
import Swal from "sweetalert2";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ServiceCreateForm = () => {
  const [loading, setLoading] = useState(false);
  const titleRef = useRef();
  const [image, setImage] = useState("");
  const isActiveRef = useRef();

  const fileHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const createService = async (e) => {
    e.preventDefault();

    const file = new FormData();
    file.append("file", image);
    file.append("upload_preset", "metro_uploads");

    const uploadedImage = await axios.post(
      "https://api.cloudinary.com/v1_1/de2pvg2mu/image/upload",
      file
    );

    const data = {
      title: titleRef.current.value,
      image: uploadedImage.data.secure_url,
      is_active: isActiveRef.current.value,
    };

    setLoading(true);
    const fetchedData = await axios.post(`/api/service`, data);

    if (fetchedData.status === 200) {
      setLoading(false);
      Swal.fire("Great!", "Your product has been created.", "success");
    } else {
      Swal.fire("Error Occured!", data.data.message, "error");
    }
  };

  return (
    <div className='w-full flex lg:flex-row flex-col-reverse justify-between items-center bg-white lg:p-16 p-10 gap-10 rounded-bl-lg rounded-br-lg'>
      <form className='lg:w-3/5 w-full' onSubmit={createService}>
        <span>
          <label htmlFor='title' className='font-bold'>
            Service Title
          </label>
          <input
            id='title'
            className=' w-full mt-2 mb-5 p-3 border border-gray-500 block rounded-lg'
            type='text'
            placeholder='Enter Your Service Title'
            ref={titleRef}
            required
          />
        </span>
        <span>
          <label htmlFor='title' className='font-bold'>
            Service Image
          </label>
          <input
            id='title'
            className=' w-full mt-2 mb-5 p-3 border border-gray-500 block rounded-lg'
            type='file'
            placeholder='Enter Your Service Title'
            onChange={fileHandler}
            required
          />
        </span>
        <span>
          <label htmlFor='title' className='font-bold'>
            Service Status
          </label>
          <select
            className=' w-full mt-2 mb-5 p-3 border border-gray-500 block rounded-lg'
            ref={isActiveRef}
            required>
            <option selected disabled>
              Select Your Option
            </option>
            <option value='true' className='font-bold'>
              Active
            </option>
            <option value='false' className='font-bold'>
              Inactive
            </option>
          </select>
        </span>
        <span>
          <button className='py-2.5 px-10 rounded-3xl bg-[#0288D1] text-white'>
            {loading ? (
              <AiOutlineLoading3Quarters className='animate-spin font-bold text-2xl' />
            ) : (
              "Create"
            )}
          </button>
        </span>
      </form>
      <div className='lg:w-2/5 w-full'>
        <img
          src={images.headerSvg.src}
          className='w-full h-full object-cover'
          alt=''
        />
      </div>
    </div>
  );
};

export default ServiceCreateForm;
