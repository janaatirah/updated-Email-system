import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
import {ForgotSchemas } from './index';
import { useFormik } from "formik";
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
    
    <MDBContainer class="mainCard">

    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
      <MDBCol col='12'>

        <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
          <MDBCardBody className='p-5 d-flex flex-column'>

          <center> <img class="img" src={logo} alt="logo" /> 
         
          </center> 

            <h5 className="fw-bold mb-2 text-center">Forgot Password</h5>
            <p></p>
            <p></p>

            <form onSubmit={handleSubmit}>

            <MDBInput wrapperClass='mb-4' label='Email address' type="email" name='email'
              helperText= {errors.email && touched.email ? (
                            <i>{errors.email}</i>
                          ) : null}
                          value={values.email}
                          onChange={handleChange} />
      <div className="d-grid gap-2 col-12 mx-auto">
              <MDBBtn type="submit"  size="mx-2">
              Submit </MDBBtn>
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

export default ForgotPassword;

   