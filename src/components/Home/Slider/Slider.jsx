import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { images } from "../../../public/assets/images";

const Slider = () => {
  const options = {
    type: "loop",
    autoplay: true,
    arrows: false,
    pagination: false,
  };
  return (
    <div className='relative'>
      <Splide options={options}>
        <SplideSlide>
          <img src={images.sliderImg.src} alt='Image 1' />
        </SplideSlide>
        <SplideSlide>
          <img src={images.sliderImg.src} alt='Image 1' />
        </SplideSlide>
        <SplideSlide>
          <img src={images.sliderImg.src} alt='Image 1' />
        </SplideSlide>
      </Splide>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 flex justify-center items-center text-center px-20'>
        <h3 className='font-bold 2xl:text-[65px] lg:text-[55px] md:text-[30px] text-[20px]  text-white'>
          আমরা সর্বদা সৎ ও নিষ্ঠার সাথে আপনাদের সেবা প্রদানে বাধিত থাকি।
        </h3>
      </div>
    </div>
  );
};

export default Slider;
