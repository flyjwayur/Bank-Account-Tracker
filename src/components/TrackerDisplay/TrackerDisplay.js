import React from "react";
import PropTypes from "prop-types";
import classes from "./trackerDisplay.module.css";
import { userIdGenerator } from "../../library/methods";

const TrackerDisplay = props => {
  let { expensesList, incomesList } = props;

  const displayIncomesList =
    incomesList !== []
      ? incomesList.map((income, index) => {
          let { description, amount, date } = income;
          return (
            <li key={index}>
              <span className={classes.desc_span}>
                {description.toUpperCase()}
              </span>
              <span className={classes.amount_span}>{amount}</span>
              <span className={classes.date_span}>{date}</span>
            </li>
          );
        })
      : null;

  const displayExpensesList =
    expensesList !== []
      ? expensesList.map((expense, index) => {
          let { description, amount, date } = expense;
          return (
            <li key={index}>
              <span className={classes.desc_span}>
                {description.toUpperCase()}
              </span>
              <span className={classes.amount_span}>{amount}</span>
              <span className={classes.date_span}>{date}</span>
            </li>
          );
        })
      : null;

  return (
    <div className={classes.account_info_display}>
      <div className={classes.incomes_expenses}>
        <div className={classes.incomes}>
          <p className={classes.title}>Income</p>
          <ul className={classes.income_display}>{displayIncomesList}</ul>
        </div>
        <div className={classes.expenses}>
          <p className={classes.title}>Expense</p>
          <ul className={classes.expense_display}>{displayExpensesList}</ul>
        </div>
      </div>
      <div className={classes.balance_display} />
    </div>
  );
};

TrackerDisplay.propTypes = {};

export default TrackerDisplay;
