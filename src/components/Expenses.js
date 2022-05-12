import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return (
    <ExpenseItem
      title={props.expense.title}
      amount={props.expense.amount}
      date={props.expense.date}
    />
  );
}

export default Expenses;
