import * as React from 'react';


export default function Home (){
  return(
       
    <div class="login-box">
      <div>

      <h2>Search for user</h2>
     
    <div  class="user-box">
      <input
        type="email"
        name="email"
        placeholder="Email..."></input>
      </div>
      
      
      <button class="button2"
        type="submit" >
        Search
        </button>
        </div>
        </div>
);
}