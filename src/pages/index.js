import React, { useState } from "react";
import FeedbackForm from "../components/Home/FeedbackForm/FeedbackForm";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import MessageSection from "../components/Home/MessageSection/MessageSection";
import ReviewSection from "../components/Home/ReviewSection/ReviewSection";
import Services from "../components/Home/Services/Services";
import Slider from "../components/Home/Slider/Slider";
import OrderModal from "../components/Order/OrderModal/OrderModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <HeroSection />
      <Services setShowModal={setShowModal} />
      <Slider />
      <MessageSection />
      <ReviewSection />
      <FeedbackForm />
      {showModal && <OrderModal setShowModal={setShowModal} />}
    </div>
  );
};

export default Home;
