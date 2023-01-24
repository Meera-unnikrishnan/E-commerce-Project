import React from 'react';
import styled from 'styled-components';
import logo from '../images/E-kart-logo.png';
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";




const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`;

function Navbar() {
  const navigate = useNavigate();
  return (
    <Container>
    <Wrapper>
      <Left>
      <img src={logo} style={{width:"150px",height:"40px"}}></img>
      </Left>
      <Right>
      <Nav>
      <Button  variant="outline-info" onClick={() => navigate(-1)}>Go back</Button>
      </Nav>
      </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar