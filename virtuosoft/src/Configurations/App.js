// App.js
import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import styled from "styled-components";
import AboutSection from "../Components/AboutSection";
import OurMission from "../Components/OurMission";
import ForWhomSection from "../Components/ForWhomSection";
import OurProducts from "../Components/OurProducts";
import OurServices from "../Components/OurServices";
import LandingPage from "../Routes/LandingPage";
import AboutUsPage from "../Routes/AboutusPage";
import OurProductsPage from "../Routes/OurProductsPage";
import OurAchievements from "../Routes/OurAchievements";

const App = () => {

  return (
    <div>
      <Navbar />
      <LandingPage/>
      {/* <AboutUsPage/> */}
      {/* <OurProductsPage/> */}
      {/* <OurAchievements/> */}
    </div>
  );
};

export default App;
