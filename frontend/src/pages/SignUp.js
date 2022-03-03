import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import { API_URL } from "../utils/urls";
import user from "../reducers/user";
import Navbar from "../components/Navbar";
import BurgerMenu from "../lib/BurgerMenu";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signup");
  const [errorMessage, setErrorMessage] = useState(null);

  const accessToken = useSelector((store) => store.user.accessToken);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/userprofile");
    }
  }, [accessToken, navigate]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
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
            //dispatch(user.actions.setError(null));
          });
        } else {
          batch(() => {
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setName(null));
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setEmail(null));
            dispatch(user.actions.setAccessToken(null));
            setErrorMessage(data.response);
          });
        }
      });
  };

  return (
    
   <Container>
        <Wrapper>
            <BurgerMenu/>
                  <Navbar/>
                      <LoginContainer>
                            <LoginSection>
                    <h3>Logga in eller signa up</h3>
                    <form onSubmit={onFormSubmit}>
                    {mode === "signup" ?
                    <FormField
                      name = "Name"
                      id="name"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    >
                    </FormField>: ""} 
                    
                    <p> Användarnamn: </p>
                    <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
                    <p> Lösenord: </p>
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                    <p> E-mail: </p>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
              
                 <SubmitButton type="submit">Fortsätt</SubmitButton>
                 </form>
          <ButtonContainer>
            <RadioButtonContainer>
                        <label htmlFor="signup">Signa up</label>
                         <input
                            id="signup"
                            type="radio"
                            checked={mode === "signup"}
                            onChange={() => setMode("signup")}
                         />
                </RadioButtonContainer>
                          <RadioButtonContainer>
                        <label htmlFor="login">Logga in</label>
                         <input
                            id="login"
                            type="radio"
                            checked={mode === "login"}
                            onChange={() => setMode("login")}
                         />
                           </RadioButtonContainer>
                 </ButtonContainer>
                {errorMessage !== null && <p>{errorMessage}</p>}
            
                   
                 </LoginSection>
        {/*<Link to="/about">About</Link>*/}
            </LoginContainer>
      </Wrapper>
</Container>
  );
};

export default Signup;

//const BackgroundImage =styled.main`
//background-image:url(${backgroundImage});
//background-repeat: no-repeat;
//background-size: cover;
//background-position: center;
//height: 1000px;
//width: 1000px;
//display: flex;
//position: absolute;
//flex-direction: column;
//align-items: center;
//justify-content: center;
//margin: 0 auto;
//`;
const Container= styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 90vh;
`;

const Wrapper=styled.section`
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column; 
  //padding-top: 10px;
  padding-bottom: 20px;
  align-items: center; 
`;

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  padding: 90px;
  margin: 100px;
  border: 2px solid white;
  color: white;
  font-size: 20px;
`;


const RadioButtonContainer = styled.div`
  background-color: transparent;
  border: 1px solid white; 
  display: inline-block;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 50px;
  padding: 20px;
  margin-top: 30px;
  border-radius: 4px;
  color: white;
  background-color: transparent; 
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row; 
  margin-top: 20px;
  justify-content: center:
  margin-bottom: 20px; 
`;
 
const SubmitButton = styled.button`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  justify-content: center; 
  border: 1px solid white; 
  background-color: transparent;
  color: white;
  font-size: 20px;   
  background-color: transparent; 
`;


const FormField = ({name,id,type, placeholder,value, onChange})=>{
return(
  <>
  <p>{name}:</p>
  <input 
  id={id}
  type={type}
  placeholder={placeholder}
  value={value}
  onChange={onChange}
  />
  </>
);
}; 
