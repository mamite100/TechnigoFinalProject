import React from "react";
import styled from 'styled-components/macro';
import Lottie from 'lottie-react';
import animationData from '../lotties/404-error.json'; 
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";

const NotFoundContainer = styled.footer `
width: 80%
height: auto;
display: flex;
margin:0 auto;
flex-direction: column; 
background-color: pink;
align-items: center; 
`;

const NotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const navigate = useNavigate();
    function handleClick() {
        navigate("/");
    };
    return (

        <NotFoundContainer>
           <Button onClick={handleClick} buttonText={"Return Home"}></Button>
            <Lottie options={defaultOptions} maxHeight={100} maxWidth={100} />
        </NotFoundContainer>
    );
};

export default NotFound;