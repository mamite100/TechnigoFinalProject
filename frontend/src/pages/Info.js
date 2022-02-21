import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import backgroundImage from '../assets/arcipelago1.png'; 
import Navbar from "../components/Navbar";
import BurgerMenu from "../lib/BurgerMenu";



const Info = () => {
    return(
<BackgroundImage>
    <BurgerMenu/>
        <Navbar/>
            <InfoContainer>
            
                     <TextHeader>
                    <h1>Denna sida är gjort som ett startskott för projektet Mjölet/</h1></TextHeader>
    <br></br>
                        <TextContainer>
                  <p> I made this page during the last sprint of a 26 weeks bootcamp that I attended at Technigo august 2021- february 2022.The future of this project is to use it for our future project where we want to produce mussel flour. <br></br> <h3>Why mussel flour you ask?</h3>
     Well mussels have a unique ability to produce proteins without significantly impacting on the environment. As well as producing lower CO2 emissions per gram of protein, mussels also have the ability to improve the quality of coastal waters; as mussels grow, they bind nitrogen and phosphorous. These are nutrients that cause eutrophication in sea water when present in excessive amounts. Once harvested, the nutrients in mussels can be returned to the land and recycled.</p>
            </TextContainer>
        </InfoContainer>
</BackgroundImage>
    ); 
}; 
export default Info;

const BackgroundImage =styled.main`
background-image:url(${backgroundImage});
background-repeat: no-repeat;
background-size: cover;
height: 100%;
width: 100%;
display: flex;
position: absolute;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
`;

const InfoContainer = styled.div`
color: white;  
width: 80%;
height: 70%;
font-size: 20px;
color:white;
position: realtive;
display:flex;
flex-direction: column; 
justify-content: center; 
text-align; center; 
margin-left: 40px; 
padding: 10px;
border: 1px solid white; 
font-family: 'Roboto', sans-serif;
`;

const TextHeader= styled.h1`
 text-align: center; 
 margin: 20px; 
 font-size: 20px;
`; 

const TextContainer=styled.p`
text-align: center; 
font-size: 25px;
color: white;
`;


