import React, { useState } from "react";
import styled from "styled-components";
import { data } from "./contents";
import product1 from "../../Assets/product1.png";

const Container = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  padding-top: 100px;
  @media screen and (max-width: 768px) {
    padding-top: 70px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  box-sizing: border-box;
  width: 100%;
`;

const Col7 = styled.div`
  flex: 0 0 calc((7 / 12) * 100% - (40px * (5 / 12)));
  max-width: calc((7 / 12) * 100% - (40px * (5 / 12)));
  border: 1.2px solid #c2ccd3;
  box-sizing: border-box;
  border-radius: 24px;
  padding: 40px;
  display: ${(props) => (props.active ? "block" : "none")};
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
    padding: 20px;
  }
`;

const Col5 = styled.div`
  flex: 0 0 calc((5 / 12) * 100% - (40px * (7 / 12)));
  max-width: calc((5 / 12) * 100% - (40px * (7 / 12)));
  display: ${(props) => (props.active ? "block" : "none")};
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

const ResponsiveSVG = styled.div`
  display: block;
  max-width: 100%;
  height: auto;
  svg {
    width: 493px;
    height: 544px;
    @media screen and (max-width: 768px) {
      width: 292px;
      height: 204px;
    }
  }
  img {
    max-width: 100%;
    max-height: 100%;
    width: 429px;
    height: 300px;
    @media screen and (max-width: 768px) {
      width: 292px;
      height: 204px;
    }
  }
`;

const Heading = styled.h5`
  font-size: 31px;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const Heading1 = styled.h5`
  font-size: 31px;
  font-weight: 400;
  padding: 0;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const SubHeading = styled.p`
  font-size: 18px;
  font-weight: 800;
  padding: 0;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  padding: 0;
  color: #555c67;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ArrowsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  padding-top: 90px;
  color: #555c67;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding-top: 50px;
  }
`;

const ArrowsAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ViewMoreButton = styled.button`
  border: 1.5px solid #0e1014;
  border-radius: 60px;
  height: 48px;
  padding-right: 26px;
  padding-left: 26px;
  color: #0e1014;
  font-size: 18px;
  background: #fff;
  font-weight: 600;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    height: 32px;
    padding-right: 18px;
    padding-left: 18px;
  }
`;

const ArrowButton = styled.button`
  background: #fff;
  border: 1.5px solid #d2dae0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const OurProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container>
      <Row>
        <Heading>{"OUR PRODUCTS"}</Heading>
      </Row>
      <Row>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Col7 active={index === currentIndex}>
              <Heading1>{"SmartSync"}</Heading1>
              <SubHeading>
                <b>{item.subheading}</b>
              </SubHeading>
              <Paragraph>{item.paragrapgh}</Paragraph>
              <ArrowsDiv>
                <ArrowsAndText>
                  <ArrowButton onClick={handlePrevClick}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.53906 10.2266L16.0391 10.2266"
                        stroke="#0E1014"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.57812 15.2479L3.53646 10.2279L8.57812 5.20703"
                        stroke="#0E1014"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ArrowButton>
                  <ArrowButton onClick={handleNextClick}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.4609 10.2266L3.96094 10.2266"
                        stroke="#0E1014"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.4219 15.2479L16.4635 10.2279L11.4219 5.20703"
                        stroke="#0E1014"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ArrowButton>
                  {`0${item.id}/03`}
                </ArrowsAndText>
                <ViewMoreButton>{"View More"}</ViewMoreButton>
              </ArrowsDiv>
            </Col7>
            <Col5 active={index === currentIndex}>
              <ResponsiveSVG>
                <svg
                  viewBox="0 0 493 544"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M400.292 0H20C8.95431 0 0 8.95429 0 20V524C0 535.046 8.9543 544 20 544H473C484.046 544 493 535.046 493 524V92.2809C493 84.8227 490.024 77.6727 484.733 72.4165L420.025 8.13552C414.779 2.92458 407.686 0 400.292 0Z"
                    fill="#E8F0F6"
                  />
                  <image
                    href={product1}
                    x={(493 - 429) / 2} // Calculate the x position to center align
                    y={(544 - 300) / 2} // Calculate the y position to center align
                    width="429"
                    height="300"
                  />
                </svg>
              </ResponsiveSVG>
            </Col5>
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
};

export default OurProducts;
