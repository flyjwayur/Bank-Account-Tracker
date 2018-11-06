import React from "react";
import PropTypes from "prop-types";
import classes from "./trackerDisplay.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TrackerDisplay = props => {
  let { expensesList, incomesList, handleDeleteItem, icon} = props;

  const displayIncomesList =
    incomesList !== []
      ? incomesList.map((income, index) => {
          let { description, amount, date } = income;
          return (
            <li key={index}>
              <span className={classes.desc_span}>
                {description.toUpperCase()}
              </span>
              <span className={classes.amount_span}>{amount} </span>
              <span className={classes.date_span}>{date}</span>
              <button className={[classes.deleteBtn, classes.income_deleteBtn].join(' ')} onClick={(e) => {handleDeleteItem(e,"incomesList", income)}}><FontAwesomeIcon className={classes.deleteFontIcon} icon={icon}/></button>
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
              <span className={classes.amount_span}> - {amount} {'\u20AC'}</span>
              <span className={classes.date_span}>{date}</span>
              <button className={[classes.deleteBtn, classes.expense_deleteBtn].join(' ')} onClick={(e) => {handleDeleteItem(e, "expensesList", expense)}}><FontAwesomeIcon className={classes.deleteFontIcon} icon={icon}/></button>
            </li>
          );
        })
      : null;

  return (
      <div className={classes.incomes_expenses}>
        <div className={classes.incomes}>
          <p className={[classes.title, classes.incomesTitle].join(' ')}>Income</p>
          <ul className={classes.income_display}>{displayIncomesList}</ul>
        </div>
        <div className={classes.expenses}>
          <p className={[classes.title, classes.expensesTitle].join(' ')}>Expense</p>
          <ul className={classes.expense_display}>{displayExpensesList}</ul>
        </div>
      </div>
  );
};

TrackerDisplay.propTypes = {};

export default TrackerDisplay;
