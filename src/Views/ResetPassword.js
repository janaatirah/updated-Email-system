import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ResetPassword(){
  const navigate =useNavigate();
    return(
      
        
            <div class="login-box">
              <div>
        
              <h2>Reset Password</h2>
             
            <div  class="user-box">
              <input
                type="password"
                name="password"
                placeholder="Password..."
                // value={Login.email}
                // onChange={changeHandler}
              ></input>
              </div>

              <div class="user-box">
              <input
                type="confirmpassword"
                name="confirmPassword"
                placeholder="Confirm Password..."
                // value={Login.email}
                // onChange={changeHandler}
              ></input>
              </div>
              
              
              <button class="button2"
                type="submit" onClick={() => navigate("/Login")}>
                {/* // onClick={() => { */}
                {/* //   login({
                //     variables: {
                //       email: Login.email,
                //       password: Login.password,
                //     },
                //   });
                // }} */}
              
                ChangePassword
                </button>
                </div>
                </div>
    )
}