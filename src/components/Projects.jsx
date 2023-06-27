import React, { useState } from 'react'
import styled from 'styled-components';
import WebDesign from './WebDesign';
import AppDesign from './AppDesign';
import VisualDesign from './VisualDesign';
import Blogging from './Blogging';
import UXResearch from './UXResearch';

const data = [
    "Web Development",
    "App Development",
    "Visual Design",
    "UX Research",
    "Blogging",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 80px;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ListItems = styled.li`
    font-size: 60px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px white;
    position: relative;

    ::after{
      content:"${(props)=>props.text}";
      position: absolute;
      top:0;
      left: 0;
      color: pink;
      width: 0px;
      overflow: hidden;
      white-space: nowrap;
    }

    &:hover{
      ::after{
        animation: moveText 0.7s linear both;

        @keyframes moveText{
          to{
              width: 100%;
          }
        }
      }
    }
`

const Right = styled.div`
 flex: 1;
`


const Projects = () => {
  const [projects, setProjects] = useState("Web Development")
  return (
    <Section>
      <Container>
        <Left>
            <List>
              {data.map((item) =>(
                <ListItems key={item} text={item} onClick={()=> setProjects(item)}>{item}</ListItems>
              ))}
              
            </List>
        </Left>
        <Right>
          {projects === "Web Development" ? (
          <WebDesign/>
          ): projects === "App Development" ? (
            <AppDesign/>
          ) : projects === "Visual Design" ? (
            <VisualDesign/>
          ): projects === "UX Research" ? (
            <UXResearch/>
          ):(
            <Blogging/>
          )
          }
        </Right>
      </Container>
    </Section>
  )
}

export default Projects;