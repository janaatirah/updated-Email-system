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
  const {errors,handleBlur }= useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(register)=>
    {  console.log(register);
    },
  });
  console.log(errors);
 
  const history = useNavigate(); 
  
  const [register, setRegister] = useState(initialValues);
  const changeHandler = (event) => {
    event.preventDefault()
    const { name, value } = event.target;
    console.log(useNavigate)
    setRegister({
      ...register,
      [name]: value,
    });
  };
  const [registerUser] = useMutation(REGISTER);
  const submitHandler = async (event) => {
   history("/Login")

    registerUser({
          variables: {
            firstName: register.firstName,
            lastName: register.lastName,
            email: register.email,
            password: register.password,
            confirmPassword: register.confirmPassword,
          },
       });
    console.log("message")
  }
  
  return (
    <div class="user-box">
      <TextField
        type="text"
        name="firstName"
        error
        helperText={errors.firstName}
        placeholder="First Name..."
        value={register.firstName}
        onChange={changeHandler}
      />
     
      <input
        type="text"
        name="lastName"
        placeholder="Last Name..."
        value={register.lastName}
        onChange={changeHandler}
      ></input>
       <p>{errors.lastName}</p>
      <input
        type="email"
        name="email"
        placeholder="Email..."
        value={register.email}
        onChange={changeHandler}
      ></input>
       <p>{errors.email}</p>
      <input
        type="password"
        name="password"
        placeholder="Password..."
        value={register.password}
        onChange={changeHandler}
      ></input>
       <p>{errors.password}</p>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password..."
        value={register.confirmPassword}
        onChange={changeHandler}
      ></input>
       <p>{errors.confirmPassword}</p>
      <button
        type="submit"
        onClick={submitHandler}
        // onClick={() => {
        //   registerUser({
        //     variables: {
        //       username: register.userName,
        //       firstName: register.firstName,
        //       lastName: register.lastName,
        //       email: register.email,
        //       password: register.password,
        //       confirmPassword: register.confirmPassword,
        //     },
        //  });
       // }}
      >
        Register
      </button>
      <button onClick={()=> history("/Login")}>
        Already have an account
      </button>
    </div>
  );
};

export default Register;
