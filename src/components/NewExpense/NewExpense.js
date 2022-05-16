import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

function NewExpense(props) {
  const id = () => {
    const idGen = () => Math.random().toString(24).slice(4);
    return idGen() + idGen() + idGen();
  };
  const saveExpenseDateHandler = (data) => {
    const expenseData = {
      ...data,
      id: id(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
    </div>
  );
}

export default NewExpense;
