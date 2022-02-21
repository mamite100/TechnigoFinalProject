import React from 'react';
import styled from 'styled-components/macro'; 

const Footer = () => {

    return (
        <FooterContainer>
        <p>Denna sida är gjort av Mamite Andersson som en del av Technigos front end developer boot camp aug 2021-feb 2022 </p>
        <br></br>
        <Tag href='https://github.com/mamite100/TechnigoFinalProject'>GitHub</Tag>        
        </FooterContainer>
    );
};

export default Footer; 

const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 30px;
  background-color: #FAE5A2;
  color: antiquewhite;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 10px;
  @media (min-width: 768px) {
    margin-top: 20px;
    padding: 20px;
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;
const Tag = styled.a`
  text-decoration: underline;
  font-family: 'Quicksand', sans-serif;
  color: #0C4458;
`; 
