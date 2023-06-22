import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container= styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
`;
const Title = styled.h1`
    font-size: 74px;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;


const Line = styled.img`
    height: 5px;
`;

const Subtitle = styled.h3`
  color: #A64FE0;
  font-size: 20;
`;

const Desc = styled.p`
    font-size: 24px;
    color: lightgrey;
`;

const Button = styled.button`
  background-color: #A64FE0;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const About = () => {
  return (
    <Section>
      <Container>
        <Left>
            
        </Left>
        
        <Right>
          <Title>Think Outside the Box</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Who Am I?</Subtitle>
          </WhatWeDo>
          <Desc>An Information Technology junior who likes to come up with innovative solutions to complex problems, and strive for successful outcomes</Desc>  
          <Button>See my Works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default About;