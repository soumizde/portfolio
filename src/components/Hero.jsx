import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container= styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div``;
const Title = styled.h1``;
const WhatWeDo = styled.div``;
const Line = styled.img``;
const Subtitle = styled.h2``;
const Desc = styled.p``;
const Button = styled.button``;

const Right = styled.div``;
const Img = styled.img``;

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Dream. Believe. Engineer.</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Developer | UI/UX Designer</Subtitle>
          </WhatWeDo>  
          <Desc>Hi! I am Soumi De.</Desc>    
          <Button>Learn More</Button>  
        </Left>
        <Right>
          <Img src="./img/moon.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero;