import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import UserProfile from './pages/UserProfile'


export const App = () => {
  return (

    <BrowserRouter>
    <Routes>
        <Route path ="/" element = {<Home/> } />
        <Route path ="/login" element = {<Login/> }/>
        <Route path ="/userProfile"  element = {<UserProfile/> }/>
        <Route path ="*" element = {<NotFound/> } />
    </Routes>
    </BrowserRouter>
  ); 
};
