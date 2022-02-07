import React from 'react';
import { Provider } from 'react-redux';
import { configureStore , combineReducers} from '@reduxjs/toolkit';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

//import pages
import Home from './pages/Home';
import Signin from './pages/Login';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import UserProfile from './pages/UserProfile';

import user from './reducers/user';
import Signup from './pages/SignUp';


const reducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({reducer}); 
  
export const App = () => {

  return (
    <>
    <BrowserRouter>
    <Provider store ={store}>
    <Routes>
        <Route path ="/" element = {<Home/> } />
        <Route path ="/login" element = {<Login/> }/>
        <Route path ="/signup" element = {<Signup/> }/>
        <Route path ="/userprofile"  element = {<UserProfile/> }/>
        <Route path ="*" element = {<NotFound/> } />
    </Routes>
    </Provider>
    </BrowserRouter>
    {/*<Footer/>*/}
    </>
  ); 
};
