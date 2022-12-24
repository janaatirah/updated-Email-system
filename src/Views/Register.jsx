import React, { useState } from "react";
import { REGISTER } from "../graphql/register";
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const history = useNavigate(); 
  const initialValues = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [register, setRegister] = useState(initialValues);
  const changeHandler = (event) => {
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
            username: register.userName,
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
    <div style={{display:"flex"}}>
      <input
        type="text"
        name="userName"
        placeholder="User Name..."
        value={register.userName}
        onChange={changeHandler}
      ></input>
      <input
        type="text"
        name="firstName"
        placeholder="First Name..."
        value={register.firstName}
        onChange={changeHandler}
      ></input>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name..."
        value={register.lastName}
        onChange={changeHandler}
      ></input>
      <input
        type="email"
        name="email"
        placeholder="Email..."
        value={register.email}
        onChange={changeHandler}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Password..."
        value={register.password}
        onChange={changeHandler}
      ></input>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password..."
        value={register.confirmPassword}
        onChange={changeHandler}
      ></input>
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
