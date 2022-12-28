import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ResetSchemas } from './index';
import { TextField } from "@mui/material";
const initialValues = {
  password: "",
  confirmPassword:""
 
};

const ResetPassword= () => {
  const history= useNavigate();

  const {  values,errors, touched,handleSubmit,handleChange}= useFormik({
    initialValues:initialValues,
    validationSchema:ResetSchemas,
    onSubmit:(Reset)=>
    {    
      console.log("I am clicked",errors)
        return history("/Login")
    },
  });
  console.log(errors);
 
  return (
    <div>
      <div>
      <h2>ResetPassword</h2>
    <form onSubmit={handleSubmit}>
      
      <TextField
        type="password"
        name="password"
        helperText=
        {errors.password && touched.password?(
          <p>{errors.password}</p>
        ):null}
        placeholder="Password..."
        value={values.password}
        onChange={handleChange}/> 
        <TextField
        variant="outlined"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password..."
        helperText={errors.confirmPassword && touched.confirmPassword?(
          <p>{errors.confirmPassword}</p>
        ):null}
        value={values.confirmPassword}
        onChange={handleChange}
      /> 
      <button 
      type="submit"
      >
        ChangePassword 
      </button>
      </form>
      </div>
    </div>
  
  );
};

export default ResetPassword;

   