import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ResetSchemas } from './index';
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


/*
 <TextField size="small" class="textfield"
        type="password"
        name="password"
        helperText=
        {errors.password && touched.password?(
          <i>{errors.password}</i>
        ):null}
        placeholder="Password..."
        value={values.password}
        onChange={handleChange}/> 
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
    

*/



    <MDBContainer class="mainCard">

    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
      <MDBCol col='12'>

        <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
          <MDBCardBody className='p-5 d-flex flex-column'>

          <center> <img class="img" src={logo} alt="logo" /> 
         
          </center> 

            <h5 className="fw-bold mb-2 text-center">Reset Password</h5>
            <p></p>
            <p></p>

            <form onSubmit={handleSubmit}>

            <MDBInput wrapperClass='mb-4' label='New Password' type="password" name='password'
                 helperText=
        {errors.password && touched.password?(
          <i>{errors.password}</i>
        ):null}
      
        value={values.password}
        onChange={handleChange}/> 
        <MDBInput wrapperClass='mb-4' label='Confirm Password' type="password" name='confirmPassword'
                 

      helperText={errors.confirmPassword && touched.confirmPassword?(
          <i>{errors.confirmPassword}</i>
        ):null}
        value={values.confirmPassword}
        onChange={handleChange}
      /> 
        


      <div className="d-grid gap-2 col-12 mx-auto">
              <MDBBtn type="submit"  size="mx-2">
              Reset </MDBBtn>
              </div> 
              
              <p></p>

                </form>

              <hr className="my-4" />

            </MDBCardBody>
          </MDBCard>

        </MDBCol>



        
      </MDBRow>

    </MDBContainer>
      
     
  
  );
};

export default ResetPassword;

   