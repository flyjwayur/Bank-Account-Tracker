import React from "react";
import PropTypes from "prop-types";
import Aux from "../../hoc/Aux"

const OverView = props => {
  let { expensesList, incomesList, totalIncome, totalexpense } = props;
 
  const calTotalIncome = () => {
    return incomesList.reduce((acc, curr) => {
      return acc + parseFloat(curr.amount);
    }, 0);
  }

  const calTotalExpense = () => {
    return expensesList.reduce((acc, curr) => {
      return acc + parseFloat(curr.amount);
    }, 0);
  }

  const calAccountBalance = () => {
    let balance = calTotalIncome() - calTotalExpense()
    return balance;
  }
  
  console.log(expensesList, incomesList);
  return (
    <Aux>
      <div>OverView</div>
      <div>Total balance : {calAccountBalance()} {'\u20AC'}</div> 
      <div>Total Income : {calTotalIncome()} {'\u20AC'}</div>
      <div>Total Expense : {calTotalExpense()} {'\u20AC'}</div>
    </Aux>
  );
};

OverView.propTypes = {};

export default OverView;
