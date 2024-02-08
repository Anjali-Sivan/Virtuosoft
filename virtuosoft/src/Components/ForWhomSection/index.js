import React from "react";
import styled from "styled-components";
import { data } from "./Contents";

const ContainerDiv = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100%;
  gap: 40px; 
  box-sizing: border-box;
  padding-bottom: 40px;
  @media screen and (max-width: 768px) {
    gap: 10px; 
  }
`;

const Col = styled.div`
  color: #0e1014;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    flex-basis: 100%; 
  }
`;

const Col4 = styled(Col)`
  flex: 1 1 calc(33.3333% - (2 * 40px / 3)); 
  max-width: calc(33.3333% - (2 * 40px / 3));
  font-size: 31px;
  font-weight: 500;
  line-height: 34.1px;
  border: 1px solid #ced4da;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  @media screen and (max-width: 768px) {
    flex-basis: 100%; 
    max-width: 100%; 
    font-size: 24px; 
  }
`;


const Heading = styled.h5`
  font-size: 31px;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const DescriptionText = styled.p`
  font-size: 21px;
  color: #000000;
  padding-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding-top: 5px;
  }
`;

const ForWhomSection = () => {
  return (
    <ContainerDiv>
      <Row>
        <Heading>{"FOR WHOM ?"}</Heading>
      </Row>
      <Row>
        {data.slice(0, 3).map((item, index) => (
          <Col4 key={index}>
            <div>{item.icon}</div>
            <DescriptionText>{item.desc}</DescriptionText>
          </Col4>
        ))}
      </Row>
      <Row>
        {data.slice(3).map((item, index) => (
          <Col4 key={index}>
            <div>{item.icon}</div>
            <DescriptionText>{item.desc}</DescriptionText>
          </Col4>
        ))}
      </Row>
    </ContainerDiv>
  );
};

export default ForWhomSection;
