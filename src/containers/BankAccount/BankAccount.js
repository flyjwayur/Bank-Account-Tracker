import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import InputFields from "../../components/InputFields/InputFields";
import TrackerDisplay from "../../components/TrackerDisplay/TrackerDisplay";
import OverView from "../../components/OverView/OverView";
import { userIdGenerator, displayDateTime} from "../../library/methods";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


class BankAccount extends Component {
  state = {
    description: "",
    amount: "",
    expensesList: JSON.parse(localStorage.getItem("expensesList")) || [],
    incomesList: JSON.parse(localStorage.getItem("incomesList")) || [],
    inputType: "income",
    income: "income",
    expense: "expense",
    month: ""
  };

  handleInput = e => {
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
  };

  addItems = () => {
    let date = displayDateTime();
    const description = this.state.description;
    const amount = parseFloat(this.state.amount).toFixed(2);
    const id = userIdGenerator();
    if (this.state.inputType === "income") {
      const incomesList = this.state.incomesList;
      const newIncomesList = incomesList.concat([
        { id, description, amount, date }
      ])

      this.setState({
        incomesList : newIncomesList
      });

      // Save income data to localStorage
      localStorage.setItem(
        "incomesList",
        JSON.stringify(newIncomesList, undefined, 4)
      );
    }
    if (this.state.inputType === "expense") {
      const expensesList = this.state.expensesList;
      const newExpenseList = expensesList.concat([
        { id, description, amount, date }
      ])

      this.setState({
        expensesList : newExpenseList
      });
      // Save expense data to localStorage
      localStorage.setItem(
        "expensesList",
        JSON.stringify(newExpenseList, undefined, 4)
      );
    }
  };

  handleInputSubmit = e => {
    e.preventDefault();
    //Add income or expense according to input type
    this.addItems();
  };

  handleDeleteItem = (arrName, item) => {
    if(arrName === "incomesList"){
      const newDataList = this.state.incomesList.filter(i => 
        i.id !== item.id
        );
      this.setState({ "incomesList" : newDataList});
      localStorage.setItem(
        "incomesList",
        JSON.stringify(newDataList, undefined, 4)
      );
    }else if(arrName === "expensesList"){
      const newDataList = this.state.expensesList.filter(i => 
        i.id !== item.id
        );
      this.setState({ "expensesList" : newDataList});
      localStorage.setItem(
        "expensesList",
        JSON.stringify(newDataList, undefined, 4)
      );
    }
  }

  render() {
    return (
      <Aux>
        <OverView
          expensesList={this.state.expensesList}
          incomesList={this.state.incomesList}
          totalIncome={this.state.totalIncome}
          totalexpense={this.state.totalexpense}
          month={this.state.month}
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
          handleDeleteItem={this.handleDeleteItem}
          icon={faTrash}
        />
      </Aux>
    );
  }
}

export default BankAccount;
