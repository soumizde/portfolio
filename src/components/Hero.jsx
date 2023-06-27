import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

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
    flex: 2;
    position: relative;
`;
const Img = styled.img`
    width: 400px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
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
        <Canvas>
              <OrbitControls enableZoom={false}/>
              <ambientLight intensity={1}/>
              <directionalLight position={[3,2,1]}/>
              <Sphere args={[1,100,200]} scale={2.4}>
                <MeshDistortMaterial 
                  color="#5B0197"
                  attach="material" 
                  distort={0.55} 
                  speed={2}
                />
              </Sphere>
            </Canvas>
            <Img src="./img/moon.svg"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero;