import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../graphql/login";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { signUpSchemas } from './index';
import { TextField } from "@mui/material";
const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const history = useNavigate();
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
      })
    },
  });
  console.log(errors);
  const [login] = useMutation(LOGIN);
  return (
    <div>
      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            type="email"
            name="email"
            helperText=
            {errors.email && touched.email ? (
              <p>{errors.email}</p>
            ) : null}
            placeholder="Email..."
            value={values.email}
            onChange={handleChange} />
          <TextField
            type="password"
            name="password"
            helperText=
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
            placeholder="Password..."
            value={values.password}
            onChange={handleChange} />
          <button
            type="submit"
          >
            Submit
          </button>
        </form>
        <button onClick={() => history("/ForgotPassword")}>Forget Password</button>
      </div>
    </div>
  );
};

export default Login;

