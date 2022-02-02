import React from 'react';
import { Provider } from 'react-redux';
import { configureStore , combineReducers} from '@reduxjs/toolkit';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import UserProfile from './pages/UserProfile';

import {user} from './reducers/user';

const reducer = combineReducers({
  user: user.reducer
});
const store = configureStore({reducer}); 
  
export const App = () => {

  return (
    <>
    <BrowserRouter>
    <Provider store ={store}>
    <Routes>
        <Route path ="/" element = {<Home/> } />
        <Route path ="/login" element = {<Signin/> }/>
        <Route path ="/userProfile"  element = {<UserProfile/> }/>
        <Route path ="*" element = {<NotFound/> } />
    </Routes>
    </Provider>
    </BrowserRouter>
    </>
  ); 
};
