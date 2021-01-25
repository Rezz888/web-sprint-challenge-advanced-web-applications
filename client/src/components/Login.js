import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    const initialState = {
         username: "",
         password: ""
    }
    
    const [credentials, setCredentials] = useState(initialState);

    const handleChange = (e)=> {
      // console.log(e.target.name, e.target.value)
      setCredentials({...credentials,
        [e.target.name] : e.target.value
      })

    }

       const login = (e)=> {
         e.preventDefault();

         axios.post("http://localhost:5000/api/login", credentials)
         .then(res => {
          //  console.log(res);
           localStorage.setItem("token", res.data.payload) 
           props.history.push("./bubble-page-this-is-protected")
         }
           )

         .catch(err => console.log(err))

       }

  return (
    <div>
    <form onSubmit={login}>
      <h1>Welcome to the Bubble App!</h1>
      <input 
      type="text"
      name= "username"
      id="username"
      value= {credentials.username}
      onChange={handleChange}
      placeholder= "Username"
      />
      
      <input 
      type="text"
      name= "password"
      id="password"
      value= {credentials.password}
      onChange={handleChange}
      placeholder= "Password"
      />
      <button>Login</button>
    </form>
    </div>
    
  );
};

export default Login;
