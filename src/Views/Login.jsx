import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
import {LOGIN } from "../graphql/login";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { signUpSchema } from './index';
import { TextField } from "@mui/material";
const initialValues = {
  email: "",
  password: "",
 
};

const Login= () => {
  const {  values,errors, touched,handleSubmit,handleChange}= useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(login)=>
    {    
      console.log("I am clicked",errors)
        return history("/Login")
        login({
          variables: {
            email: Login.email,
            password: Login.password,
          },
        });
      }
    });
    console.log(errors);

  const history = useNavigate();
  
  //   const [Login, setLogin] = useState(initialValues);
  //   const changeHandler = (event) => {
  //   const { name, value } = event.target;
  //   console.log("value", value, "event", event.target.name, "name", name);
  //   setLogin({
  //     ...Login,
  //     [name]: value,
  //   })
   
  // };
  const [login] = useMutation(LOGIN); 
  // const [message, setmessage] = useState(false)
  // const submitHandler = async (event) => {
  //   navigate("/Loggedin")
   
  // }
  return (
    <div>
      <div>
      <h2>Sign In</h2>
      {/* {
        message && (<p>Permission denied</p>) 
      } */}
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        type="email"
        name="email"
        helperText=
        {errors.email && touched.email?(
          <p>{errors.email}</p>
        ):null}
        placeholder="Email..."
        value={Login.email}
        onChange={handleChange}/>
  
      
      <TextField
        type="password"
        name="password"
        helperText=
        {errors.password && touched.password?(
          <p>{errors.password}</p>
        ):null}
        placeholder="Password..."
        value={Login.password}
        onChange={handleChange}/>  
      <button
        type="submit"
        // onClick={submitHandler}
        //   login({
        //     variables: {
        //       email: Login.email,
        //       password: Login.password,
        //     },
        //   });
        // }}
      >
        Submit
      
      </button>
      </form>
      <button onClick={()=>history("/ForgotPassword")}>Forget Password</button>
      </div>
    </div>
  
  );
};

export default Login;

   