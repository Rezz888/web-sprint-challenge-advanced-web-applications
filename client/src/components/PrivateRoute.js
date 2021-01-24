import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// Private route requirements
// 1. It has the same API (interface) as <Route>
// 2. If an auth token exists, it renders a <Route/> and passes all props through it
// 3. Otherwise, redirect to the login page

// take the component prop, rename it Component (Capitalized so that it'll render in JSX) and assigned the 

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
          {...rest} 
             render={(componentProps) => {
                 //   If the token is in localStorage, render the component
                 if (localStorage.getItem("token")){
                     return <Component {...componentProps} />
                 }
                // Otherwise redirect to login
                 else {
                     return <Redirect to="/login" />
                 }
             }}
        />
    )
}

export default PrivateRoute;