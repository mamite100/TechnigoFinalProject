import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import backgroundImage from '../assets/NorraBryggan.png'; 
//import {Navbar} from '..components/Navbar';  


const Home = () => {
return(

<BackgroundImage>
<MainContiner>
<h1>Welcome</h1>
<ContentContainer>
<h3>Signup</h3>
</ContentContainer>
<h3>Create your account</h3>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        <LinkSection>
            <p>
            Already a member?
          </p>
          <Link to="/signup">Login</Link>
        </LinkSection>
    </MainContiner>
</BackgroundImage>       
); 
} ;

export default Home; 

const BackgroundImage =styled.main`
background-image:url(${backgroundImage});
background-repeat: no-repeat;
background-size: cover;
background-position: bottom;
height: 100%;
width: 100%;
display: flex;
position: absolute;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
`;

const Header=styled.section`
margin-bottom: 40px;
justify-content: center;
text-align: center;

`;

const MainContiner=styled.div`
width: 10%;
height: 80%;
font-size: 30px;
color: white;  
`;
const ContentContainer=styled.div`
display: flex;
text-align: center;
justify-content: center; 
`;
const LinkSection=styled.div`
 display: flex;
  gap: 50px;
`;

