import React, { useState } from "react";
 
import {LOGIN } from "../graphql/login";
import { useMutation } from "@apollo/client";
const Login= () => {
    const initialValues = {
      email: "",
      password: "",
     
    };

    const [Login, setLogin] = useState(initialValues);
    const changeHandler = (event) => {
    const { name, value } = event.target;
    console.log("value", value, "event", event.target.name, "name", name);
    setLogin({
      ...Login,
      [name]: value,
    });
  };
  const [login] = useMutation(LOGIN);
  return (
    <div class="login-box">
      <div>

      <h2>Sign In</h2>
    <div  class="user-box">
      <input
        type="email"
        name="email"
        placeholder="Email..."
        value={Login.email}
        onChange={changeHandler}
      ></input>
      </div>
      <div  class="user-box">
      <input
        type="password"
        name="password"
        placeholder="Password..."
        value={Login.password}
        onChange={changeHandler}
      ></input>
      </div>
      
      <button class="button2"
        type="submit"
        onClick={() => {
          login({
            variables: {
              email: Login.email,
              password: Login.password,
            },
          });
        }}
      >
        Submit
      
      </button>
      <button class="button1">Forget Password</button>
      </div>
    </div>
  
  );
};

export default Login;

   