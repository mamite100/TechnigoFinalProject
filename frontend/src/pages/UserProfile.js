import React from 'react';
import {useState } from 'react';
import { useSelector } from 'react-redux';

//import { API_URL } from "../utils/urls";
//import { useEffect } from 'react';

 const UserProfile = () => {
    //const [] = useState (""); 

//const accessToken = useSelector((store) => store.user.accessToken);
  const name = useSelector((store) => store.user.name);
  const username = useSelector((store) => store.user.username);

  const email = useSelector((store) =>store.user.email);
return(

        <div>
                <h1>Welcome to your profile page</h1>
                <p>Namn: {name}</p>
                <p>Användarnamn: {username}</p>
                <p>Email:{email}</p>
        </div>
    )


};
     
export default UserProfile;