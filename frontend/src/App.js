import React from 'react';
import GlobalStyle from './components/GlobalStyles';
import { Provider } from 'react-redux';
import { configureStore , combineReducers} from '@reduxjs/toolkit';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


//import pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import UserProfile from './pages/UserProfile';
import Signup from './pages/SignUp';
import Info from './pages/Info';
import Products from './pages/Products';

import Navbar from './components/Navbar';

//import reducers
import user from './reducers/user';
import ui from './reducers/ui';


const reducer = combineReducers({
  user: user.reducer,
  ui: ui.reducer,
});

const store = configureStore({reducer}); 
  
export const App = () => {

  return (
    <>
    <BrowserRouter>
      <Provider store ={store}>
        <GlobalStyle/>
        <Navbar/>
            <Routes>
                <Route path ="/" element = {<Home/> } />

       {/* <Route path ="/login" element = {<Login/> }/>*/}

        <Route path ="/signup" element = {<Signup/> }/>
        <Route path ="/userprofile"  element = {<UserProfile/> }/>
         <Route path ="/info"  element = {<Info/> }/>

         <Route path ="/products"  element = {<Products/> }/>
        <Route path ="*" element = {<NotFound/> } />
    </Routes>
    </Provider>
    </BrowserRouter>
    </>
  ); 
};
