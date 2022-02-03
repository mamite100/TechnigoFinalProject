import React, {useState, useEffect} from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useNavigate} from "react-router-dom";
import styled from 'styled-components/macro'; 


import {API_URL} from '../utils/urls';
import user from '../reducers/user'; 



const MainContainer = styled.container`
display: flex; 
flex-direction: column;
width: 100%
height: 700px;
//background-image:
background-position: center;
background-repeat: no-repeat; 
background-size: cover;
height: 100vh;

@media (min-width: 768px) {
  flex-direction: row; 
}
`; 

const MainFormContainer= styled.div`
display: flex;
margin: auto;
width: 90%;

@media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;
 
const FormContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;

@media (min 786px) {
  background-color: pink;
  width: 50%;
  height: 600px;
}
`;
const Form = styled.form`
display: flex;
flex-direction: column;
margin: auto;
`;
const FormHeader = styled.h1`
margin: 60px;
color: red; 
font-size: 10px;
text-align: center; 
`;
const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  height: 35px;
  width: 225px;
  border: 4px solid black;
  border-radius: 5px;
  background-color: red;
`;

const SignButton = styled.button`
  padding: 7px;
  width: 150px;
  font-size: 20px;
  border-radius: 20px;
  background-color: orange;
  color: white;
  border: none;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

const RegisterBtn = styled.button`
  padding: 7px;
  width: 150px;
  font-size: 20px;
  border-radius: 20px;
  background-color: rgb(120, 196, 195);
  color: white;
  border: none;
  margin: 30px auto;
  cursor: pointer;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: white;
  padding-bottom: 3px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 992px) {
    margin: auto;
  }
`;

const SignParagraph = styled.p`
  color: white;
  font-size: 10px;
`;
const Signin = () => {
  const [name, setName]= useState (""); 
  const [username, setUsername]= useState ("");
  const [email, setEmail]= useState ("");
  const [password, setPassword]= useState ("");
  const [mode, setMode]= useState ("signin ");
  const error = useSelector ((store) => store.user.error);
  const accessToken = useSelector ((store) => store.user.accessToken);
    
  const dispatch = useDispatch();
  const navigate = useNavigate ();

    useEffect (() => {
        if (accessToken) {
          navigate("/user"); 
        }
      }, [accessToken, navigate]);
    
      const onHandleSignIn = (event) => {
        event.preventDefault ();
          const options ={
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
              name,
              username, 
              email,
              password, 
            }), 
          } ; 
      fetch(API_URL(mode) , options)
      .then ((res) => res.json())
      .then((data) =>{
        
        if (data.sucess) {
          batch(() => {
             dispatch(user.actions.setUserId(data.response.userId));
            dispatch(user.actions.setName(data.response.name));
            dispatch(user.actions.setUsername(data.response.username));
            dispatch(user.actions.setEmail(data.response.email));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
          });
        } else {
         batch(() => {
              dispatch(user.actions.setUserId(data. response.userId));
              dispatch(user.actions.setName(data.response.name));
              dispatch(user.actions.setUsername(data.response.username));
              dispatch(user.actions.setEmail(data.response.email));
              dispatch(user.actions.setAccessToken(data.response.accessToken));
              dispatch(user.actions.setError(data.response));
        });
      }
      });

      const handleUsernameChange = (event) => setUsername (event.target.value); 
      const handlePasswordChange = (event) => setPassword(event.target.value); 
      const handleEmailChange = (event) => setEmail(event.target.value);

      return (
      <MainContainer>
        <MainFormContainer>
            <FormContainer>
               {mode === 'signin' ? (
                  <FormHeader> Sign In </FormHeader>
        ) : (
                  <FormHeader> Sign Up </FormHeader>
        )}
        <Form onSubmit ={onHandleSignIn}>
            <LabelContainer>
                <Label htmlFor="username">
                  Username
                <StyledInput
                    id="username"
                    type="text"
                    value ={username}
                    placeholder="username"
                    onChange={handleUsernameChange}></StyledInput>
            </Label>
            </LabelContainer>
        <LabelContainer>
            <Label htmlFor="password">
            Password
              <StyledInput
                  id="password"
                  type="text"
                  value={password}
                  onChange={handlePasswordChange}></StyledInput>
         </Label>
         </LabelContainer> 
          {mode === "signup" && (

    <LabelContainer>
         <Label htmlFor="email">
            Email
         <StyledInput
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}></StyledInput>
      </Label>
        </LabelContainer>             
          )}

      <RegisterBtn primary type="submit">
          {mode === "signin" ? "Log In" : "Register"}
      </RegisterBtn>
        </Form>
      <Buttons>
           {mode === "signup" ? (
         <ButtonContainer>
            <SignParagraph>
         If you already have an account? Please sign in!
            </SignParagraph>
            <SignButton  onClick={() => setMode("signin")} >
            Sign In
            </SignButton>
        </ButtonContainer> 
        ) : (

<ButtonContainer>
    <SignParagraph>
    Welcome! Sign up if you do not already have an account. 
    </SignParagraph>
    <SignButton onClick={() => setMode("signup")}>
    Sign Up
    </SignButton>
    </ButtonContainer>
        )}
      </Buttons>
    </FormContainer>
  </MainFormContainer>
</MainContainer>
      );
        };
    export default Signin; 