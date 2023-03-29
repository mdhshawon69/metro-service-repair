import React from "react";
import FeedbackForm from "../components/Home/FeedbackForm/FeedbackForm";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import MessageSection from "../components/Home/MessageSection/MessageSection";
import ReviewSection from "../components/Home/ReviewSection/ReviewSection";
import Services from "../components/Home/Services/Services";
import Slider from "../components/Home/Slider/Slider";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Slider />
      <MessageSection />
      <ReviewSection />
      <FeedbackForm />
    </div>
  );
};

export default Home;
