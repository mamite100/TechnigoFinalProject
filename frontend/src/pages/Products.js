import React from "react";
import styled from "styled-components/macro";
//import ProductsImg from '../assets/.ProductsImg.png'; 


const Products= ()=> {
  return(
<ProductWrapper>
   {/* <ProductsImage/>*/}
</ProductWrapper>
  );
   
};

export default Products;

const ProductWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
margin: auto;
width: 80%;
padding: 0 10%;
overflow: hidden;
min-height: calc(100vh - 250px);
`;
//const ProductsImage= styled.image`
//image:url(${ProductsImg});
//display:flex
//flex-direction: column;
//@media (min-width: 768px) {
   // width: 50%;
    //margin: 0 10px;
  //}
  //@media (min-width: 1024px) {
    //width: 40%;
    //margin: 20px;
  //}
//`;


