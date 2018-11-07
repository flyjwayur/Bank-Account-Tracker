import React from "react";
import PropTypes from "prop-types";
import classes from './inputFields.module.css'

const InputFields = props => {
  let {inputType, description, amount, income, expense, handleInput, handleInputSubmit} = props;

  return (
    <form className={classes.input_field} onSubmit={handleInputSubmit}>
      <select value={inputType} className={classes.input_type} onChange={handleInput}>
        <option value={income}>Income</option>
        <option value={expense}>Expense</option>
      </select>
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        className={classes.description_input}
        placeholder="ex)part time job"
        onChange={handleInput}
        value={description}
        required
      />
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        name="amount"
        className={classes.amount_input}
        placeholder="ex)500.00"
        onChange={handleInput}
        value= {amount}
        required
      />
      <button className={classes.add_info_btn}>Add</button>
    </form>
  );
};

InputFields.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  inputType: PropTypes.string.isRequired
};

export default InputFields;
