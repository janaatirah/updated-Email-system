import React, { Component } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Compose from "./Compose";
import Navbar from "../Navbartest/Navbar";
import  "../style/style.css"

export default function Loggedin() {
  return (
    <div className = "loggedincontainer">
      <Navbar />
      <Outlet />
    </div>
  );
}
