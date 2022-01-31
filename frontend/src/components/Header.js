import React from "react";
import styled from "styled-components"; 

const Header = ( ) => {
    return (
        <HeaderContainer>
            <p> This is the header</p>

        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
display: flex 
background-color: green:
align-items: center;
justify-content: space-between;
border: 2px solid black; 
`;