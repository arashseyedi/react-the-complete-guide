import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };

    props.onSaveExpenseDate(expenseData);

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control__title">
          <input
            type="text"
            value={title}
            placeholder="item"
            required
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control__amount">
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            placeholder="amount"
            required
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control__date">
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            value={date}
            required
            onChange={dateChangeHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
