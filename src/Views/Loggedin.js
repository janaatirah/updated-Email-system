import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Compose from './Compose'
import Navbar from '../Navbartest/Navbar'

export default function Loggedin (){
    return(
<> 
<Navbar/>
<Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Users" element={<Users />} />
            <Route path="Compose" element={<Compose />} />
            {/* <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Loggedin" element={<Loggedin />} /> */}
          </Routes>
</>
    )
}