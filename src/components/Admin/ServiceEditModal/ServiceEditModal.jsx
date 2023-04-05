import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { AiOutlineLoading3Quarters, AiFillDelete } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "react-query";

const ServiceEditModal = ({ setShowModal, id, serviceItem, refetch }) => {
  const titleRef = useRef();
  const priceRef = useRef();
  const weightRef = useRef();

  const [showWeightInput, setShowWeightInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [whatIncludes, setWhatIncludes] = useState([]);
  const [whatIncludesText, setWhatIncludesText] = useState("");
  const [deleted, setDeleted] = useState("");

  const closeBackdrop = (e) => {
    if (e.target.id === "backdrop") {
      setShowModal(false);
    }
  };

  const addWhatIncludes = (e) => {
    e.preventDefault();
    setWhatIncludes([...whatIncludes, whatIncludesText]);
    setWhatIncludesText("");
  };

  const createServiceVarient = async (e) => {
    e.preventDefault();
    const data = {
      serviceId: id,
      title: titleRef.current.value,
      price: priceRef.current.value,
      what_includes: whatIncludes,
      ac_weight: weightRef.current.value,
    };

    setLoading(true);
    const createdVarient = await axios.post("/api/service-varient", data);
    console.log(createdVarient);

    if (createdVarient.status === 200) {
      refetch();
      setLoading(false);
      Swal.fire("Success!", "Service Varient Created Successfully", "success");
    } else {
      Swal.fire("Failed!", "An error has occured", "error");
    }
  };

  ////////////////////////////////////////////////// Delete Varient Function ////////////////////////////////////////////////////////

  const deleteVarient = (id) => {
    const deleteItem = async (itemId) => {
      const data = await axios.delete("/api/service-varient", {
        data: { id: itemId },
      });
      if (data.status === 200) {
        refetch();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        Swal.fire("Error", "Your file cannot be deleted", "error");
      }
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(id);
      }
    });
  };

  //////////////////////////////////////////////// Delete Service Item Function ////////////////////////////////////////////////////

  const deleteService = (id) => {
    const deleteItem = async (itemId) => {
      const data = await axios.delete("/api/service", {
        data: { id: itemId },
      });
      if (data.status === 200) {
        refetch();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        Swal.fire("Error", "Your file cannot be deleted", "error");
      }
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(id);
      }
    });
  };

  return (
    <div
      className='fixed inset-0 h-full bg-black/70 z-50 flex justify-center items-center'
      id='backdrop'
      onClick={closeBackdrop}>
      <div
        className='w-11/12 h-[90%] m-auto bg-white rounded-2xl relative md:p-10 p-5 flex justify-between lg:flex-row flex-col gap-x-16'
        data-aos='fade-up'>
        <form
          className='flex-1 md:mb-5 lg:mb-0 mb-2'
          onSubmit={createServiceVarient}>
          <div className='py-4 text-slate-600 rounded-tl-lg rounded-tr-lg'>
            <h2 className='text-xl md:text-2xl font-bold uppercase'>
              Create Service Varient
            </h2>
          </div>
          <div className='space-y-5'>
            <span className='block'>
              <label htmlFor='' className='font-bold'>
                Service Varient Title
              </label>
              <input
                type='text'
                className='p-2 w-full border border-gray-500 rounded-lg block mt-1'
                ref={titleRef}
                placeholder='Enter Your Service Title Here'
              />
            </span>
            <span className='block'>
              <label htmlFor='' className='font-bold'>
                Price
              </label>
              <input
                type='text'
                className='p-2 w-full border border-gray-500 rounded-lg block mt-1'
                ref={priceRef}
                placeholder='Enter Your Service Price Here'
              />
            </span>
            <span className='flex justify-start items-center gap-1'>
              <input
                className='mt-0.5'
                type='checkbox'
                id='checkbox'
                onChange={() => setShowWeightInput(!showWeightInput)}
              />
              <label className='text-xs font-bold' htmlFor='checkbox'>
                Check this for creating AC related services.
              </label>
            </span>

            {showWeightInput && (
              <span className='block'>
                <label htmlFor='' className='font-bold'>
                  AC Weight
                </label>
                <select
                  type='text'
                  className='p-2 w-full border border-gray-500 rounded-lg block mt-1'
                  ref={weightRef}>
                  <option selected disabled>
                    Select an option
                  </option>
                  <option value='1-1.5 Ton'>1-1.5 Ton</option>
                  <option value='2-3 Ton'>2-3 Ton</option>
                  <option value='4-5 Ton'>4-5 Ton</option>
                </select>
              </span>
            )}
            <span className='block'>
              <label htmlFor='' className='font-bold'>
                What Includes
              </label>
              <span className='flex justify-center items-center gap-2'>
                <input
                  type='text'
                  className='p-2 w-full border border-gray-500 rounded-lg block mt-1'
                  onChange={(e) => setWhatIncludesText(e.target.value)}
                  value={whatIncludesText}
                  placeholder="Enter What's Included Here"
                />
                <button
                  className='py-2 px-3 bg-[#0288D1] text-white rounded-lg mt-0.5'
                  onClick={addWhatIncludes}>
                  Add
                </button>
              </span>
              <span>
                <ol className='list-decimal pl-4 my-4 max-h-24 overflow-y-auto scrollbar-custom font-[500]'>
                  {whatIncludes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              </span>
            </span>
          </div>
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
        <div className='flex-1'>
          <div className='py-4 text-slate-600 rounded-tl-lg rounded-tr-lg '>
            <h2 className='text-xl md:text-2xl font-bold uppercase'>
              Existing Service Varients
            </h2>
          </div>

          <div className=' space-y-4 lg:h-96 md:h-80 h-48 overflow-y-auto scrollbar-custom px-5 py-5 border border-gray-300 rounded-md'>
            {!serviceItem.service_varients.length ? (
              <div className='flex flex-col h-full justify-center items-center'>
                <h3 className='text-4xl font-bold'>No Varients Created</h3>
              </div>
            ) : (
              serviceItem.service_varients.map((item) => (
                <div
                  className='box-shadow_one p-5 rounded-md relative'
                  key={item._id}>
                  <button
                    className='text-2xl text-red-600 absolute right-5 top-5'
                    onClick={() => deleteVarient(item._id)}>
                    <AiFillDelete />
                  </button>
                  <h5 className='font-bold text-lg text-gray-700'>
                    {item.title}
                  </h5>
                  <p className='text-gray-600 text-md font-bold'>
                    Price: {item.price}
                  </p>

                  <div>
                    <h4 className='font-bold'>What Included:</h4>
                    <ol className='list-decimal pl-4 mt-1'>
                      {item.what_includes.map((what, i) => (
                        <li key={i}>{what}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <button
          className='absolute top-5 right-5 text-2xl text-gray-600'
          onClick={() => setShowModal(false)}>
          <FaTimes />
        </button>
        <span className='absolute bottom-5 right-5'>
          <button
            className='py-2.5 px-10 rounded-3xl bg-red-600 text-white'
            onClick={() => deleteService(id)}>
            {loading ? (
              <AiOutlineLoading3Quarters className='animate-spin font-bold text-2xl' />
            ) : (
              "Delete"
            )}
          </button>
        </span>
      </div>
    </div>
  );
};

export default ServiceEditModal;
