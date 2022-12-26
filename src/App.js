import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
 import  Login from "./Views/Login";
 import Register from "./Views/Register";
 import ForgotPassword from "./Views/ForgotPassword";
 import ResetPassword from "./Views/ResetPassword"
 import Loggedin from "./Views/Loggedin";
 import './style/login.css'
import "./style/register.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// changes in App.js
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:
      "http://emailproject-env.eba-pwtpkn6y.ap-south-1.elasticbeanstalk.com/graphql",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Loggedin" element={<Loggedin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
