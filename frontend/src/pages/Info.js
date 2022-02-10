import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import backgroundImage from '../assets/NorraBryggan.png'; 
//import Navbar from "../components/Navbar";



const Info = () => {
    return(
<BackgroundImage>
<InfoWrapper>
<InfoContainer>
    <h1>This page is made by me, Mamite</h1>
    <br></br>
    <p> The project was created during the last sprint of a 26 weeks bootcamp that I attended at Technigo august 2021- february 2022.The future of this project is to use it for our future project where we want to produce mussel flour. Why mussel flur you ask?
     Well mussels have a unique ability to produce proteins without significantly impacting on the environment. As well as producing lower CO2 emissions per gram of protein, mussels also have the ability to improve the quality of coastal waters; as mussels grow, they bind nitrogen and phosphorous. These are nutrients that cause eutrophication in sea water when present in excessive amounts. Once harvested, the nutrients in mussels can be returned to the land and recycled.</p>
</InfoContainer>
</InfoWrapper>
</BackgroundImage>
    )
}
export default Info;

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

const InfoContainer = styled.div`
width: 60%;
height: 60%;
font-size: 30px;
color: white;  
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
border: 1px solid white; 
font-family: 'Roboto', sans-serif;
`;


const InfoWrapper= styled.div`
`; 

