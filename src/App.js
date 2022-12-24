import "./App.css";
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import  Login from "./Views/Login";
import './style/login.css'
import Register from "./Views/Register";
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://emailproject-env.eba-pwtpkn6y.ap-south-1.elasticbeanstalk.com/graphql",
  
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Login/>
      </div>
    </ApolloProvider>
  );
}

export default App;
