import React from 'react';
import styled from 'styled-components/macro'; 

const Footer = () => {

    return (
        <FooterContainer>
        <p>© Mamite Andersson  <Tag href='https://github.com/mamite100/TechnigoFinalProject'> GitHub</Tag><br></br>Technigos front end developer boot camp aug 2021-feb 2022 </p>
               
        </FooterContainer>
    );
};

export default Footer; 

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 60px;
  margin-bottom: 30px; 
  background-color: transparent;
  color: white;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 10px 0;
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
  color: white;
  font-weight: bold;
`; 
