import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //In enteredExpenseDate we get the expenseData obj in the child component(ExpenseFrom.js)
    //Math.random() generate a random num

    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData); //it will send the expenseData to the pointer function in App.js
  };
  //Custom props should have any name // Props points the function with args(onSaveExpenData)
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
