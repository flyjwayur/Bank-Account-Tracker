import React from "react";
import PropTypes from "prop-types";
import Aux from "../../hoc/Aux"

const OverView = props => {
  let { expensesList, incomesList, totalIncome, totalexpense } = props;
  const calTotalIncome = () => {
    return incomesList.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  }

  const calTotalExpense = () => {
    return expensesList.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  }

  const calAccountBalance = () => {
    let balance = calTotalIncome() - calTotalExpense()
    return balance;
  }
  
  console.log(expensesList, incomesList);
  return (
    <Aux>
      <div>Total Income : {calTotalIncome()}</div>
      <div>Total Expense : {calTotalExpense()}</div>
      <div>Total balance : {calAccountBalance()}</div> 
    </Aux>
  );
};

OverView.propTypes = {};

export default OverView;
