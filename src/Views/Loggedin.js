import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Compose from './Compose'

export default function Loggedin (){
    return(
<> 
<h1>
    NAVBAR
</h1>
<Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Compose" element={<Compose />} />
            {/* <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Loggedin" element={<Loggedin />} /> */}
          </Routes>
</>
    )
}