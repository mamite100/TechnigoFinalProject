import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import BurgerMenu from "../lib/BurgerMenu";
import Footer from "../components/Footer";



const Info = () => {
    return(
<Container>
   <Navbar/>
      <BurgerMenu/>
          <Wrapper>
                        <TextHeader> Mjölet/</TextHeader>
    <br></br>
                        <TextContainer>
                  I made this page during the last sprint of a 26 weeks bootcamp that I attended at Technigo august 2021- february 2022.<br></br>The future of this project is to use the struture og this page for our future project where we want to produce mussel flour.
                    </TextContainer>
            </Wrapper>
        <Footer/>
</Container>
    ); 
}; 
export default Info;


const Container= styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 90vh;
`;

const Wrapper= styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: 30px;
border-radius: 50px;
background-color: whitesmoke; 

box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);


  min-height: 200px;
  width: 240px;
  margin: 50px auto;
  background: white;
  border-radius: 10px;
min-height: 200px;
  width: 240px;
  margin: 50px auto;
  background: white;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 450px;
  }
  @media (min-width: 1024px) {
    width: 550px;
    min-height: 450px;
  }
`;
//const InfoContainer = styled.div`
//color: white;  
//width: 80%;
//height: 70%;
//font-size: 20px;
//color:white;
//position: realtive;
//display:flex;
//flex-direction: column; 
//justify-content: center; 
//text-align; center; 
//margin-left: 40px; 
//padding: 10px;
//border: 1px solid white; 
//font-family: 'Roboto', sans-serif;
//`;

const TextHeader= styled.h1`
 text-align: center; 
 margin: 20px; 
 font-size: 20px;
 color: black; 
`; 

const TextContainer=styled.p`
text-align: center; 
font-size: 25px;
color: black;
`;


