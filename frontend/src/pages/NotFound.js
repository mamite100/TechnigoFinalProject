import React from "react";
import {Link} from "react-router-dom"; 
import backgroundImage from '../assets/havet.png'; 
import styled from "styled-components/macro";
import Lottie from 'react-lottie';
import animation from '../lotties/lf30_editor_5zbwyoes.json';

const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
 const NotFound = () => {

    return (
      <BackgroundImage>
            <MainContainer>
              <h1>Sorry, can't find the page you're looking for</h1>
                  <LinkSection>
                      <Link to="/"> Go back to home </Link>
                  </LinkSection>
                <Lottie options={defaultOptions}
                height={400}
                width={400}
                />
            </MainContainer>
     </BackgroundImage>
    );
};
export default NotFound; 

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
const MainContainer=styled.div`
width: 70%;
height: 50%;
font-size: 30px;
color: white;  
border: 2px solid white; 
font-family: 'Roboto', sans-serif;
`;
const LinkSection=styled.div`
 display: flex;

`;