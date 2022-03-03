import React from "react";
//import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import Navbar from '../components/Navbar'; 

import { Link } from "react-router-dom";
import backgroundImage from '../assets/NorraBryggan.png'; 
import Footer from "../components/Footer";

//import { LoadingIndicator } from '../lib/LoadingIndicator';

//import {ui} from '../reducers/ui'; 

//import { BASE_URL } from '../App';


const Home = () => {
return(

<BackgroundImage>
   <Navbar/>
      <HomeWrapper>
        <ContentContainer>
            <TextHeader>
            Mjölet /
            </TextHeader>
            <TextContainer>
              Mer information kommer!
              </TextContainer>
                <Text>
                  Kom ihåg att logga in om du vill ta del av erbjudanden
              </Text>
          <LinkSection>
                  </LinkSection>  
                </ContentContainer>
           </HomeWrapper>
      <Footer/>
</BackgroundImage>       
); 
} ;

export default Home; 

const BackgroundImage =styled.main`
background-image:url(${backgroundImage});
background-repeat: no-repeat;
background-size: cover;
background-position: bottom;
height: 130%;
width: 100%;
display: flex;
position: absolute;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
`;
 const TextHeader= styled.h1`
 text-align: center; 
 margin: 20px; 
 font-size: 30px;
`; 
const TextContainer= styled.h3`
font-size: 20px; 
text-align: center; 
background-color: red;

`;

const Text = styled.p`
text-align: center; 
font-size: 25px;
color: white;
`;

const HomeWrapper = styled.div`
  flex-flow: row wrap;
  background-color: green;
`; 

const ContentContainer=styled.div`
width: 80%;
height: 100%;
font-size: 30px;
color:white;
position: realtive;
display:flex;
flex-direction: column; 
justify-content: center; 
text-align; center; 
margin-left: 40px; 
padding: 10px;
//justify-content: space-around;
border: 2px solid white; 
font-family: 'Roboto Condensed', sans-serif;
//background: linear-gradient(rgba(247,247,247,0.25),rgba(247,247,247, 
 // 0.25), rgba(247,247,247, 0.25));
`;


const LinkSection=styled.div`
display: flex;
color: white;
text-align; center; 
justify-content: center; 
`;

const StyledLink = styled(Link)`
color: white;
`;

