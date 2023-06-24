import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'

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

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;
const Title = styled.h1`
    font-size: 74px;
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
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
    flex: 3;
    position: relative;
`;
const Img = styled.img`
    width: 500px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate{
      to{
        transform: translateY(35px);
      }
    }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Dream. Believe. Engineer.</Title>
          <Desc>Hi! I am Soumi De.</Desc>  
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Developer | UI/UX Designer</Subtitle>
          </WhatWeDo>  
            
          <Button>Learn More</Button>  
        </Left>
        <Right>
            <Canvas camera={{fov: 25, position: [5,5,5]}}>
              <OrbitControls enableZoom={false} autoRotate={true}/>
              <ambientLight intensity={1}/>
              <directionalLight position={[3,2,1]}/>
              <Cube/>
            </Canvas>
            <Img src="./img/moon.svg"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero;