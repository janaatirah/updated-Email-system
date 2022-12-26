import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword(){
  const navigate = useNavigate(); 
  // const submitHandler = async (event) => {
  //   navigate("/ResetPassword")
  //   }
    return(
       
            <div class="login-box">
              <div>
        
              <h2>ForgotPassword</h2>
             
            <div  class="user-box">
              <input
                type="email"
                name="email"
                placeholder="Email..."
                // value={Login.email}
                // onChange={changeHandler}
              ></input>
              </div>
              
              
              <button class="button2"
                type="submit" onClick={() => navigate("/ResetPassword")}
                // onClick={() => {
                //   login({
                //     variables: {
                //       email: Login.email,
                //       password: Login.password,
                //     },
                //   });
                // }}
              >
                Submit
                </button>
                </div>
                </div>
    );
}