import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import InputFields from "../../components/InputFields/InputFields";
import TrackerDisplay from "../../components/TrackerDisplay/TrackerDisplay";
import OverView from "../../components/OverView/OverView";
import { userIdGenerator, displayDateTime } from "../../library/methods";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


class BankAccount extends Component {
  state = {
    description: "",
    amount: "",
    expensesList: JSON.parse(localStorage.getItem("expensesList")) || [],
    incomesList: JSON.parse(localStorage.getItem("incomesList")) || [],
    totalIncome: 0,
    totalexpense: 0,
    inputType: "income",
    income: "income",
    expense: "expense"
  };

  handleInput = e => {
    console.log("type", e.target.type);
    console.log("name", e.target.name);
    if (e.target.type === "select-one") {
      this.setState({
        inputType: e.target.value
      });
    }

    if (e.target.type === "text") {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    if(e.target.name === "amount"){
      this.setState({
        amount: parseFloat(e.target.value)
      });
    }
    
    console.log("type?", e.target.value);
  };

  addItems = () => {
    let date = displayDateTime();
    const description = this.state.description;
    const amount = parseFloat(this.state.amount).toFixed(2);
    const id = userIdGenerator();
    if (this.state.inputType === "income") {
      const incomesList = this.state.incomesList;
      incomesList.push({ id, description, amount, date });
      this.setState({
        incomesList
      });
      // Save income data to localStorage
      localStorage.setItem(
        "incomesList",
        JSON.stringify(incomesList, undefined, 4)
      );
    }
    if (this.state.inputType === "expense") {
      const expensesList = this.state.expensesList;
      expensesList.push({ id, description, amount, date });
      this.setState({
        expensesList
      });
      // Save expense data to localStorage
      localStorage.setItem(
        "expensesList",
        JSON.stringify(expensesList, undefined, 4)
      );
    }
  };

  handleInputSubmit = e => {
    e.preventDefault();
    alert("hei " + this.state.inputType + parseFloat(this.state.amount).toFixed(2));
    //Add income or expense according to input type
    this.addItems();
  };

  handleDeleteItem = (e, arrName, item) => {
     console.log(arrName);
    if(arrName === "incomesList"){
      console.log("selected item.id", item.id);
      const newDataList = this.state.incomesList.filter(i => 
        i.id !== item.id
        );
      this.setState({ "incomesList" : newDataList});
      localStorage.setItem(
        "incomesList",
        JSON.stringify(newDataList, undefined, 4)
      );
      console.log("after delete", newDataList);
    }else if(arrName === "expensesList"){
      console.log("selected item.id", item.id);
      const newDataList = this.state.expensesList.filter(i => 
        i.id !== item.id
        );
      this.setState({ "expensesList" : newDataList});
      localStorage.setItem(
        "expensesList",
        JSON.stringify(newDataList, undefined, 4)
      );
      console.log("after delete", newDataList);
    }
  }

  componentDidUpdate = () => {
    // console.log("description", this.state.description);
    // console.log("amount", this.state.amount);
    // console.log("inputType", this.state.inputType);
    //console.log("add Income", this.state.incomesList);
    //console.log("add expense", this.state.expensesList);
  };

  render() {
    return (
      <Aux>
        <OverView
          expensesList={this.state.expensesList}
          incomesList={this.state.incomesList}
          totalIncome={this.state.totalIncome}
          totalexpense={this.state.totalexpense}
        />
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
          incomesList={this.state.incomesList}
          handleDeleteItem={(e, arr, item) => (this.handleDeleteItem(e, arr, item))}
          icon={faTrash}
        />
      </Aux>
    );
  }
}

export default BankAccount;
