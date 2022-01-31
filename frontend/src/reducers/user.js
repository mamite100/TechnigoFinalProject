import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        name: null,
        userName: null,
        email: null, 
        error: null,  

    }, 
        reducers: {
        setUserId : (store, action) => { 
            store.userId = action.payload;
        }, 
        setName: (store, action) => {
            store.name = action.payload; 
        }, 
        setUserName: (store, action) => {
            store.username = action. payload; 
        }, 
        setEmail: (store, action) => {
        store.email = action.payload;
    },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload; 
        }, 
        setError: (store, action) => {
            store.error =action.payload;
        }, 
        
    }, 

}); 

export default user; 