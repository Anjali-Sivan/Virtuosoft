import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background-color: #e9e6fa;
  padding-left: 100px;
  padding-right: 100px; // Add right padding for symmetry
  padding-top: 83px;
  padding-bottom: 72px;
  box-sizing: border-box; // Include padding in width calculation

  @media screen and (max-width: 768px) {
    padding-left: 20px; // Reduced padding for smaller screens
    padding-right: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    box-sizing: border-box;
  }
`;

const Text = styled.p`
  font-size: 48px;
  color: #000000;
  font-weight: 400;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const OurMission = () => {
  return (
    <ContainerDiv>
      <Text>
        {
          "Our commitment to excellence, integrity, and continuous improvement ensures that we deliver reliable and high-quality software solutions that exceed expectations."
        }
      </Text>
    </ContainerDiv>
  );
};

export default OurMission;
