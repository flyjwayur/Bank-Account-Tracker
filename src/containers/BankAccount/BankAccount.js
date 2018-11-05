import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import InputFields from "../../components/InputFields/InputFields";
import TrackerDisplay from "../../components/TrackerDisplay/TrackerDisplay";
import { displayDateTime } from "../../library/methods";

class BankAccount extends Component {
  state = {
    description: "",
    amount: 0,
    expensesList: JSON.parse(localStorage.getItem("expensesList")) || [],
    incomesList: JSON.parse(localStorage.getItem("incomesList")) || [],
    totalIncome: "",
    totalexpense: "",
    inputType: "income",
    income: "income",
    expense: "expense",
  };

  handleInput = e => {
    console.log("type", e.target.type);
    if (e.target.type === "text") {
      this.setState({
        [e.target.name]: e.target.value
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        inputType: e.target.value
      });
    }
    console.log("type?", e.target.value);
  };

  addItems = () => {
    let date = displayDateTime();
    const description = this.state.description;
    const amount = this.state.amount;
    if(this.state.inputType === "income"){
      const incomesList = this.state.incomesList;
      incomesList.push({ description, amount, date });
      this.setState({
        incomesList
      })
      // Save income data to localStorage
      localStorage.setItem("incomesList", JSON.stringify(incomesList, undefined, 4));
    }
    if(this.state.inputType === "expense"){
      const expensesList = this.state.expensesList;
      expensesList.push({ description, amount, date });
      this.setState({
        expensesList
      })
      // Save expense data to localStorage
      localStorage.setItem("expensesList", JSON.stringify(expensesList, undefined, 4));
    }
  };


  handleInputSubmit = e => {
    e.preventDefault();
    alert("hei " + this.state.inputType + this.state.amount);
    //Add income or expense according to input type
    this.addItems();
  };

  componentDidUpdate = () => {
    // console.log("description", this.state.description);
    // console.log("amount", this.state.amount);
    // console.log("inputType", this.state.inputType);
    console.log("add Income", this.state.incomesList)
    console.log("add expense", this.state.expensesList)
  };

  render() {
    return (
      <Aux>
        <InputFields
          description={this.state.description}
          amount={this.state.amount}
          income={this.state.income}
          expense={this.state.expense}
          inputType={this.state.inputType}
          handleInput={this.handleInput}
          handleInputSubmit={this.handleInputSubmit}
        />
        <TrackerDisplay
          expensesList={this.state.expensesList}
          incomesList={ this.state.incomesList}
        />
      </Aux>
    );
  }
}

export default BankAccount;
