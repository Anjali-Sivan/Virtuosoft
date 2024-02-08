import React from "react";
import styled from "styled-components";
import useInView from "../../Configurations/useInView";
import HeroSection from "../../Components/HeroSection";
import AboutSection from "../../Components/AboutSection";
import OurServices from "../../Components/OurServices";
import OurProducts from "../../Components/OurProducts";
import ForWhomSection from "../../Components/ForWhomSection";
import OurMission from "../../Components/OurMission";

const Section = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 96px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 56px;
  }
`;

const LandingPage = () => {
  const [heroRef, isHeroSectionInView] = useInView();
  const [aboutRef, isAboutSectionInView] = useInView();
  const [servicesRef, isOurServicesInView] = useInView();
  const [productsRef, isOurProductsInView] = useInView();
  const [forWhomRef, isForWhomSectionInView] = useInView();
  const [missionRef, isOurMissionInView] = useInView();

  return (
    <>
      <Section ref={heroRef}>{isHeroSectionInView && <HeroSection />}</Section>
      <Section ref={aboutRef}>
        {isAboutSectionInView && <AboutSection />}
      </Section>
      <Section ref={servicesRef}>
        {isOurServicesInView && <OurServices />}
      </Section>
      <Section ref={productsRef}>
        {isOurProductsInView && <OurProducts />}
      </Section>
      <Section ref={forWhomRef}>
        {isForWhomSectionInView && <ForWhomSection />}
      </Section>
      <Section ref={missionRef}>{isOurMissionInView && <OurMission />}</Section>
    </>
  );
};

export default LandingPage;
