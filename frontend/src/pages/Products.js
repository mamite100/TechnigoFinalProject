import React from "react";
import styled from "styled-components/macro";



const Products= ()=> {
  return(
<Page>
    <Card/>
    <Card />
    <Card/>
</Page>
  );
   
};

export default Products;

const Card = styled.div`
position: realtive;
box-sizing: border-box;
display: flex;
flex-grow: 1;
flex-direction: row;
border-radius: 10px;
align-items: stretch;
background-color: whitesmoke; 
box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
 0 100px 80px rgba(0, 0, 0, 0.12);
display: inline-block;
justify-content: space-between;
align-items: center;
margin: 20px; 
width: 80%;
padding: 0 10%;
overflow: hidden;
min-height: calc(70vh - 250px);

@media (min-width: 768px) {width: 80%;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin:10px;
  }
  @media (min-width: 1024px) {
    flex-direction: row; 
    width: 40%;
    margin: 20px;
  }
`;

const Page= styled.div`
  margin:20px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
    
  };
`;
