import React, { useState } from "react";
import { REGISTER } from "../graphql/register";
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { signUpSchema } from './index';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import logo from '../style/logo.jpg'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';


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
     }).then(()=>
     {
      return history("/Login")
     }).catch(()=>
     {
      alert("Please check your connection")
     })

    },
  });
  console.log(errors);
 
  const history = useNavigate(); 
  const [registerUser] = useMutation(REGISTER)
  return (



    <MDBContainer class="mainCard">

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 d-flex flex-column'>

            <center> <img class="img" src={logo} alt="logo" /> 
           
            </center> 

              <h5 className="fw-bold mb-2 text-center">Sign Up</h5>
              <p></p>
              <p></p>

              <form onSubmit ={handleSubmit} >

        <MDBInput  wrapperClass='mb-4 w-100' label='First Name' type='text' name="firstName" size="sm"
        helperText=
        {errors.firstName && touched.firstName?(
          <i>{errors.firstName}</i>
        ):null}
        value={values.firstName}
        onChange={handleChange}
        />
        <MDBInput wrapperClass='mb-4 w-100' label='Last Name' type='text' name="lastName" size="sm"
        
        helperText={errors.lastName && touched.lastName?(
          <i>{errors.lastName}</i>
        ):null}
        value={values.lastName}
        onChange={handleChange}
        />
        <MDBInput wrapperClass='mb-4 w-100' label='Email' type='email' name="email" size="sm"
        helperText={errors.email && touched.email?(
          <i>{errors.email}</i>
 
        ):null}
        value={values.email}
        onChange={handleChange}
        />
        <MDBInput wrapperClass='mb-4 w-100' label='Password' type='password' name="password" size="sm"
        helperText={errors.password && touched.password?(
          <i>{errors.password}</i>
        ):null}
        value={values.password}
        onChange={handleChange}
        
        />
        <MDBInput wrapperClass='mb-4 w-100' label='Confirm Password' type='password' name="confirmPassword" size="sm"
        
        helperText={errors.confirmPassword && touched.confirmPassword?(
          <i>{errors.confirmPassword}</i>
        ):null}
        value={values.confirmPassword}
        onChange={handleChange}
        />
        <div className="d-grid gap-2 col-12 mx-auto">
              <MDBBtn type="submit"  size="mx-2">
              Register </MDBBtn>
              </div> 
    


                </form>
                <p></p>

                <p>Already have an account? <span class="link" onClick={()=> history("/Login")}> Login </span> </p> 

              <hr className="my-4" />

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
        
      </MDBRow>

    </MDBContainer>


/* 
 <div class="container">
    
    <div class="form-section">
     
      <form onSubmit ={handleSubmit} >


      <h2>Sign Up</h2>

    
      <TextField size="small" class="textfield"
        variant="outlined"
        type="text"
        name="firstName"
        helperText=
        {errors.firstName && touched.firstName?(
          <i>{errors.firstName}</i>
        ):null}
        placeholder="First Name..."
        value={values.firstName}
        onChange={handleChange}/>

      
      

      <TextField size="small" class="textfield"
        variant="outlined"
        type="text"
        name="lastName"

        helperText={errors.lastName && touched.lastName?(
          <i>{errors.lastName}</i>
        ):null}
        placeholder="Last Name..."
        value={values.lastName}
        onChange={handleChange}
      />
    
    
      <TextField size="small" class="textfield"
        variant="outlined"
        type="email"
        name="email"
        placeholder="Email..."
        helperText={errors.email && touched.email?(
          <i>{errors.email}</i>
 
        ):null}
        value={values.email}
        onChange={handleChange}
      />
      
      
      <TextField size="small" class="textfield"
        variant="outlined"
        type="password"
        name="password"
        placeholder="Password..."
        helperText={errors.password && touched.password?(
          <i>{errors.password}</i>
        ):null}
        value={values.password}
        onChange={handleChange}
      />
      <TextField size="small" class="textfield"
        variant="outlined"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password..."

        helperText={errors.confirmPassword && touched.confirmPassword?(
          <i>{errors.confirmPassword}</i>
        ):null}
        value={values.confirmPassword}
        onChange={handleChange}
      />
      <button class="btn"
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
      <p>Already have an account? <span class="link" onClick={()=> history("/Login")}> Login </span> </p> 
    </div>
    </div> */
  
  );
};

export default Register;
