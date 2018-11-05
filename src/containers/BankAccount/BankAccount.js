import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import InputFields from '../../components/InputFields/InputFields'

class BankAccount extends Component{
  state = {
    description: "",
    amount: 0,
    income : "income",
    expense : "expense",
    expensesLists : {},
    incomesLists : {},
    totalIncome : "",
    totalexpense : "",
    inputType : "income"
  }

  handleInput = e => {
    console.log("type", e.target.type);
    if(e.target.type === 'text'){
      this.setState({
        [e.target.name] : e.target.value
      })
    }else if (e.target.type === 'select-one'){
      this.setState({
        inputType : e.target.value
      })
    }
    console.log("type?", e.target.value);
  }

  handleInputSubmit = e => {
    e.preventDefault();
    alert('hei ' + this.state.inputType + this.state.amount);
  }

  componentDidUpdate = () => {
    // console.log("description", this.state.description);
    // console.log("amount", this.state.amount);
    // console.log("inputType", this.state.inputType);
  }

  render(){
    return (
      <Aux>
        <InputFields description={this.state.description} amount={this.state.amount} income={this.state.income} expense={this.state.expense} inputType={this.state.inputType} handleInput={this.handleInput} handleInputSubmit={this.handleInputSubmit}/>
        <div>Display</div>
      </Aux> 
    )
  }
}

export default BankAccount;