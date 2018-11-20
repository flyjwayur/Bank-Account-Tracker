import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./overView.module.css";
import { displayMonth } from "../../library/methods";
import { giveCommaEverythreeDigits } from "../../library/methods";

const OverView = props => {
  let { expensesList, incomesList} = props;

  const calTotalIncome = () => {
    return incomesList.reduce((acc, curr) => {
      return acc + parseFloat(curr.amount);
    }, 0);
  };

  const calTotalExpense = () => {
    return expensesList.reduce((acc, curr) => {
      return acc + parseFloat(curr.amount);
    }, 0);
  };

  const calAccountBalance = () => {
    let balance = calTotalIncome() - calTotalExpense();
    return balance;
  };

  return (
    <Aux>
      <div className={classes.overViewTitle}>Account Tracker</div>
      <div className={classes.currentMonth}>Hei, HyeSoo. It is the account status in <span className={classes.monthHightlight}>{displayMonth()}</span></div>
      <div className={classes.overViewWrapper}>
        <div className={classes.overViewContent}>
          Total balance :{" "}
          <span className={(calAccountBalance() < 0)? classes.minusBalance : classes.plusBalance}>
            {giveCommaEverythreeDigits(calAccountBalance())} {"\u20AC"}
          </span>
        </div>
        <div className={classes.overViewContent}>
          Total Income :{" "}
          <span className={classes.hightlightIncome}>
            {" "}
            {giveCommaEverythreeDigits(calTotalIncome())} {"\u20AC"}{" "}
          </span>
        </div>
        <div className={classes.overViewContent}>
          Total Expense :{" "}
          <span className={classes.hightlightExpense}>
            - {giveCommaEverythreeDigits(calTotalExpense())} {"\u20AC"}
          </span>
        </div>
      </div>
    </Aux>
  );
};

export default OverView;
