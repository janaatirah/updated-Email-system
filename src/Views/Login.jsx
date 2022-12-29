import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LOGIN } from "../graphql/login";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { signUpSchemas } from './index';
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
  password: "",
};

const Login = () => {
  const history = useNavigate();
  const navigate = useNavigate();
  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchemas,
    onSubmit: (Login) => {
      console.log("I am clicked", errors)
      login({
        variables: {
          email: values.email,
          password: values.password,
        },
      }).then(() => {
        return history("/Loggedin")
      }).catch(()=>
      {
      //  alert("Please Enter valid credentials")
      setError(true)
      })
    },
  });
  console.log(errors);
  const [login] = useMutation(LOGIN);
  const [error, setError] = useState(false)
  return (


    <MDBContainer class="mainCard">

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 d-flex flex-column'>

            <center> <img class="img" src={logo} alt="logo" /> 
           
            </center> 

              <h5 className="fw-bold mb-2 text-center">Sign in</h5>
              <p></p>
              <p></p>

              <form onSubmit={handleSubmit}>

              <MDBInput wrapperClass='mb-4' label='Email address' type="email" name='email'
              helperText= {errors.email && touched.email ? (
                            <i>{errors.email}</i>
                          ) : null}
                          value={values.email}
                          onChange={handleChange} />

              <MDBInput wrapperClass='mb-4' label='Password' name= "password" type='password'
              
              helperText= {errors.password && touched.password ? (
                <i>{errors.password}</i>
              ) : null}
              value={values.password}
              onChange={handleChange}
              />

           <div className="d-grid gap-2 col-12 mx-auto">
              <MDBBtn type="submit"  size="mx-2">
              Login </MDBBtn>
              </div> 
              
              <p></p>

                </form>

               <p> <span class="btn-link link" onClick={()=> history("/ForgotPassword")}>Forgot password?</span> </p> 

              <p className="right text1">Not registered yet?  <span class="btn-link link" onClick={()=> navigate("/")}>Register Here</span> </p> 

              <hr className="my-4" />

            </MDBCardBody>
          </MDBCard>

        </MDBCol>



        
      </MDBRow>

    </MDBContainer>


   
//  <div class="container">
    
//  <div class="form-section">

//         <h2>Sign In</h2>
//         {
//           error && (
//             <h5 style= {{color:"red"}}>Please Enter valid credentials</h5>
//           )
//         }
//         <form onSubmit={handleSubmit}>
//           <TextField size="small" class="textfield"
//             variant="outlined"
//             type="email"
//             name="email"
//             helperText=
//             {errors.email && touched.email ? (
//               <i>{errors.email}</i>
//             ) : null}
//             placeholder="Email..."
//             value={values.email}
//             onChange={handleChange} />
//           <TextField size="small" class="textfield"
//             type="password"
//             name="password"
//             helperText=
//             {errors.password && touched.password ? (
//               <i>{errors.password}</i>
//             ) : null}
//             placeholder="Password..."
//             value={values.password}
//             onChange={handleChange} />
//           <button class="btn"
//             type="submit"
//           >
//             Submit
//           </button>
//         </form>
//         <p class="link margin" onClick={()=> history("/ForgotPassword")}> Forget Password </p> 
      
//       </div>
//     </div>
  );
};

export default Login;

