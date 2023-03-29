import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { images } from "../../../public/assets/images";

const ReviewSection = () => {
  const options = {
    padding: {
      top: "10rem",
    },
    pagination: false,
    perPage: 2,
    gap: "2rem",
    breakpoints: {
      640: {
        perPage: 1,
        gap: ".7rem",
      },
      480: {
        perPage: 1,
        gap: ".7rem",
      },
    },
  };
  return (
    <div className='bg-[#0288D1]/30 py-10'>
      <div className='lg:w-3/5 mx-auto px-5'>
        <h2 className='text-[32px] text-[#0288D1] text-center pb-5'>
          আমাদের ক্লায়েন্ট ফিডব্যাক
        </h2>
        <Splide options={options}>
          <SplideSlide>
            <div className='flex justify-center p-5 bg-white box-shadow_one gap-5 rounded-lg'>
              <img
                className='w-20 h-20 rounded-[50%]'
                src={images.user.src}
                alt=''
              />
              <div>
                <h5 className='font-bold'>আয়শা আক্তার</h5>
                <p className='font-[300] text-gray-700'>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='flex justify-center p-5 bg-white box-shadow_one gap-5 rounded-lg'>
              <img
                className='w-20 h-20 rounded-[50%]'
                src={images.user.src}
                alt=''
              />
              <div>
                <h5 className='font-bold'>আয়শা আক্তার</h5>
                <p className='font-[300] text-gray-700'>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='flex justify-center p-5 bg-white box-shadow_one gap-5 rounded-lg'>
              <img
                className='w-20 h-20 rounded-[50%]'
                src={images.user.src}
                alt=''
              />
              <div>
                <h5 className='font-bold'>আয়শা আক্তার</h5>
                <p className='font-[300] text-gray-700'>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='flex justify-center p-5 bg-white box-shadow_one gap-5 rounded-lg'>
              <img
                className='w-20 h-20 rounded-[50%]'
                src={images.user.src}
                alt=''
              />
              <div>
                <h5 className='font-bold'>আয়শা আক্তার</h5>
                <p className='font-[300] text-gray-700'>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s.
                </p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default ReviewSection;
