import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
import {ForgotSchemas } from './index';
import { useFormik } from "formik";
import { TextField } from "@mui/material";
const initialValues = {

  email: "",
 
};

  const ForgotPassword= () => {
  const history= useNavigate();
  const {  values,errors, touched,handleSubmit,handleChange}= useFormik({
    initialValues:initialValues,
    validationSchema:ForgotSchemas,
    onSubmit:(forgot)=>
    {    
      console.log("I am clicked",errors)
        return history("/ResetPassword") 

    },
  });
  console.log(errors);
 
  return (
    <div>
      <div>
      <h2>ForgotPassword</h2>
      
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
        value={values.email}
        onChange={handleChange}/>
      <button 
        type="submit"
      >
        Submit 
      </button>
      </form>     
       </div>
    </div>
  
  );
};

export default ForgotPassword;

   