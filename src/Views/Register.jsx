import React, { useState } from "react";
import { REGISTER } from "../graphql/register";
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { signUpSchema } from './index';
import { TextField } from "@mui/material";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const {  values,errors, touched,handleSubmit,handleChange}= useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(register)=>
    {    
      console.log("I am clicked",errors)
       
       registerUser({
        variables: {
          // username: values.userName,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
     })
     .then(() => {
      return history("/Login")
    })
    },
  });
  console.log(errors);
 
  const history = useNavigate(); 
  const [registerUser] = useMutation(REGISTER)
  return (
    <div>
    <div>
    <h2>Sign Up</h2>
      <form  onSubmit ={handleSubmit} class="user-box">
      <TextField
        variant="outlined"
        type="text"
        name="firstName"
        helperText=
        {errors.firstName && touched.firstName?(
          <p>{errors.firstName}</p>
        ):null}
        placeholder="First Name..."
        value={values.firstName}
        onChange={handleChange}/>

      <TextField 
        variant="outlined"
        type="text"
        name="lastName"

        helperText={errors.lastName && touched.lastName?(
          <p>{errors.lastName}</p>
        ):null}
        placeholder="Last Name..."
        value={values.lastName}
        onChange={handleChange}
      />
    
    
      <TextField 
        variant="outlined"
        type="email"
        name="email"
        placeholder="Email..."
        helperText={errors.email && touched.email?(
          <p>{errors.email}</p>
 
        ):null}
        value={values.email}
        onChange={handleChange}
      />
      
      
      <TextField
        variant="outlined"
        type="password"
        name="password"
        placeholder="Password..."
        helperText={errors.password && touched.password?(
          <p>{errors.password}</p>
        ):null}
        value={values.password}
        onChange={handleChange}
      />
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
        // onClick={() => {
        //   registerUser({
        //     variables: {
        //       username: values.userName,
        //       firstName: values.firstName,
        //       lastName: values.lastName,
        //       email: values.email,
        //       password: values.password,
        //       confirmPassword: values.confirmPassword,
        //     },
        //  });
       // }}
      >
        Register
      </button>
      </form>
      <button onClick={()=> history("/Login")}>
        Already have an account
      </button>
    </div>
    </div>
  );
};

export default Register;
