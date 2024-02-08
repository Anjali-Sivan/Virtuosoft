import React, { useState } from "react";
import styled from "styled-components";
import { data } from "./contents";

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
  flex-wrap: nowrap;
  gap: 40px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
`;

const Col7 = styled.div`
  flex: 0 0 calc((7 / 12) * 100% - (40px * (5 / 12)));
  max-width: calc((7 / 12) * 100% - (40px * (5 / 12)));
  box-sizing: border-box;
  padding: 40px;
  display: block;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
    padding: 20px;
  }
`;

const Col5 = styled.div`
  flex: 0 0 calc((5 / 12) * 100% - (40px * (7 / 12)));
  max-width: calc((5 / 12) * 100% - (40px * (7 / 12)));
  display: block;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

const Heading = styled.h5`
  font-size: 31px;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const SubHeading = styled.h5`
  font-size: 44px;
  color: #0e1014;
  font-weight: 400px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
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

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 312px;
  border-radius: 24px;
  background: ${(props) => props.color};
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 148px;
    border-radius: 12px;
  }
`;

const OurServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    const container = e.target;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.offsetWidth;

    const newIndex = Math.floor(scrollPosition / itemWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <Container>
      <Row onScroll={handleScroll}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Col5>
              <Heading>{"OUR SERVICES"}</Heading>
              {`0${index + 1}/05`}
            </Col5>
            <Col7>
              <ImageDiv color={item.bgcolor}>{item.image}</ImageDiv>
              <SubHeading>{item.heading}</SubHeading>
              <Paragraph>
                {item.paragrapgh.map((para, paraIndex) => (
                  <p key={paraIndex}>{para}</p>
                ))}
              </Paragraph>
            </Col7>
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
};

export default OurServices;
