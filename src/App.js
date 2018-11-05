import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Bankaccount from "./containers/BankAccount/BankAccount"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Bankaccount></Bankaccount>
        </Layout>
      </div>
    );
  }
}

export default App;
