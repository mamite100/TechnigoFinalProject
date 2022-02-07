import React from 'react';
//import {Link} from 'react-dom';
import styled from 'styled-components/macro'; 

const Footer = () => {

    return (
        <FooterContainer>
        <p> Mamite made this</p>
        </FooterContainer>
    );
};

export default Footer; 

const FooterContainer = styled.div`
  display: flex;
  height: 30px;
  background-color: black;
  color: antiquewhite;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-right: 10px;
  padding-left: 10px;
`;