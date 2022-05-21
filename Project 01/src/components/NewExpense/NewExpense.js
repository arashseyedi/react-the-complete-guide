import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

function NewExpense(props) {
  const [addingNewExpense, setAddingNewExpense] = useState(false);

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
    setAddingNewExpense(false);
  };

  const startEditingHandler = () => setAddingNewExpense(true);
  const stopEditingHandler = () => setAddingNewExpense(false);

  return (
    <div className="new-expense">
      {!addingNewExpense && (
        <button className="btn btn-primary" onClick={startEditingHandler}>
          Add new expense
        </button>
      )}
      {addingNewExpense && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDateHandler}
          onCancelHandler={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
