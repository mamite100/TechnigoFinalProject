import React , {useEffect} from "react";
import styled from "styled-components/macro";
import {Link} from 'react-dom'; 

const Home = () => {
return(

<BackgroundImage>
    <Header>
                <Link to = "/login"> Login</Link>
    </Header>
<MainContiner>
<h1>Welcome</h1>
<ContentContainer>
<h3>Signup</h3>
</ContentContainer>
<h3>Create your account</h3>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <LinkSection>
            <p>
            Already a member?
            <Link to="/login">Login</Link>
          </p>
        </LinkSection>
    </MainContiner>
</BackgroundImage>       
); 
} ;

export default Home; 

const BackgroundImage =styled.main`
background-image: url ("https://ibb.co/t890tL4");
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

