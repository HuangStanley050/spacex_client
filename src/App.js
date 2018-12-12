import React, { Component } from "react";
import logo from "./logo.svg";
//import "./App.css";
import rocketLogo from "./rocket.jpg";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import Launches from "./components/launches";
import Launch from "./components/launch";
const heroku_server = "https://immense-forest-81738.herokuapp.com/graphql";

const client = new ApolloClient({
  uri: heroku_server
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="container">
            <img
              alt="Space X app"
              src={rocketLogo}
              style={{
                width: 200,
                height: 200,
                display: "block",
                margin: "auto"
              }}
            />
            <h1 style={{ textAlign: "center", color: "red" }}>SpaceX App</h1>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
