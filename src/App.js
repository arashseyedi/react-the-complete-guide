import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: '760a2bjedb5i3gkaha7a8816ih1ak9f',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: '8llmh737j6im2nfgg4j9104232i2ll',
    title: 'New TV',
    amount: 799.99,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'k482f9i3328fad8bfjafj9b84hdcan7',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: '90ajal9da2mfam1h83jijn0d9dah',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-10">
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses item={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
