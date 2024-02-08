import React from "react";
import styled from "styled-components";
import { data } from "../../Components/OurProducts/contents";
import product1 from "../../Assets/product1.png";
import diagram from '../../Assets/diagram.png';

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
  flex: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    width:100%;
  }
`;

const Col5 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    width:100%;
  }
`;

const ResponsiveSVG = styled.div`
  display: block;
  max-width: 100%;
  height: 100%;
  svg {
    width: 100%;
    height: auto;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: auto;
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

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: 100%;
`;

const OurProductsPage = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col7>
            <Image src={diagram} alt='data-diagram'/>
          </Col7>
        </Row>
        <Row>
          <Heading>{"OUR PRODUCTS"}</Heading>
        </Row>
        {data.map((item, index) => (
          <Row key={index}>
            {index % 2 === 0 ? (
              <>
                <Col7>
                  <Heading1>{"SmartSync"}</Heading1>
                  <SubHeading>
                    <b>{item.subheading}</b>
                  </SubHeading>
                  <Paragraph>{item.paragrapgh}</Paragraph>
                </Col7>
                <Col5>
                  <ResponsiveSVG>
                    <svg
                      viewBox="0 0 493 432"
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
                        x={(493 - 429) / 2}
                        y={(432 - 300) / 2}
                        width="429"
                        height="300"
                      />
                    </svg>
                  </ResponsiveSVG>
                </Col5>
              </>
            ) : (
              <>
                <Col5>
                  <ResponsiveSVG>
                    <svg
                      viewBox="0 0 493 432"
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
                        x={(493 - 429) / 2}
                        y={(432 - 300) / 2}
                        width="429"
                        height="300"
                      />
                    </svg>
                  </ResponsiveSVG>
                </Col5>
                <Col7>
                  <Heading1>{"SmartSync"}</Heading1>
                  <SubHeading>
                    <b>{item.subheading}</b>
                  </SubHeading>
                  <Paragraph>{item.paragrapgh}</Paragraph>
                </Col7>
              </>
            )}
          </Row>
        ))}
      </Container>
    </Section>
  );
};

export default OurProductsPage;
