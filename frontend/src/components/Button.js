import React from "react";
import styled from "styled-components/macro";

const MainButton = styled.button`
 width: 150px;
height: 50px;
border: 2px solid black;
`;

const Button = ({buttonText, onClick}) => {
    return (
        <MainButton onClick= {onClick}>{buttonText}</MainButton>
    );
}; 

export default Button; 