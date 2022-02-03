import React from "react";
import {Link} from "react-router-dom"; 

//import Button from "../components/Button";


const NotFound = () => {
    return (
        <div>
            <Link to="/">Go back to home </Link>
        
    <h1>Sorry, we can't find the page you're looking for</h1>
    </div>
    );
};

export default NotFound;