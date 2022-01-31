import React, {useState, useEffect} from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled from 'styled-components/macro'; 

import user from '../reducers/user'; 

const Login = () => {
    const [name, setName]= useState ("")
    const [name, setName]= useState ("")
    const [name, setName]= useState ("")
    const [name, setName]= useState ("")
    const [name, setName]= useState ("")
    const [name, setName]= useState ("")

const accessToken = useSelector ((store) => store.user.accessToken);

const error = useSelector ((store) => store.user.error);

const dispatch = useDispatch (); 
const navigate = useNavigate ();

useEffect (() => {
    if (accessToken) {
        navigate("/profile");
    }
}, [accessToken, navigate]); 

const onFormSubmit = (event) => {
    event.preventDefault (); 

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        }, 
         body: JSON.stringify({ name, username, password, email }),
    };

    fetch(API_URL(mode), options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
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
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setName(null));
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setEmail(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setError(data.response));
            setErrorMessage(data.message);
          });
        }
      });
  };

    return (
        <LoginContainer>
            <LoginSection>
                <RadioButtonContainer>
                    <label htmlFor="signin"> Sign in </label>
                    <input 
                    id= "signin"
                    type="radio"
                    checked = {mode === "signin"}
                    onChange = {() => setMode("signin")}
                    />
                </RadioButtonContainer>
                <form onSubmit={onFormSubmit}>
                    <p>Username: </p>
                    <input 
                        id= "username"
                        type= "text"
                        value = {username}
                        onChange = {(event) =>  setUsername (event.target.value)}
                    />
                    <p>Password: </p>
                    <input
                    id= "password"
                    type="password"
                    value ={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />

                    <ButtonContainer>
                        <SubmitButton type=" submit"> Continue</SubmitButton>
                    </ButtonContainer>
                    {errorMessage !== null && <p> {error.message}</p>}
                    </form>
                    
            </LoginSection>
            <Link to ="/">Home</Link>
        </LoginContainer>
    );
    
} ;

export default Login; 