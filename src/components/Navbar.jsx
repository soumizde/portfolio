import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
`;
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Logo = styled.img`
    height: 60px;
`;

const List = styled.ul`
    display: flex;
    gap: 30px;
    list-style: none;
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #A64FE0;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;


const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png"/>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About Me</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png"/>
          <Button>Hire Now</Button>
        </Icons>

      </Container>
    </Section>
  )
}

export default Navbar;