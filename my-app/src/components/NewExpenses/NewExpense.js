import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
/* Now we want to do something with our data and we in order to do so we 
have to pass the data from the children to the parents in this case app.js 
is the parent with newExpense being a child of App and ExpenseForm a child of NewExpense
App(parent) -> newExpense(child) -> ExpenseForm(child of child) */

// we are now passing properties to the function ExpenseForm so we add props to the parameters
const NewExpense = (props) => {
  // This function is sent to the child in the return() field it is then in expenseForm is called and the child gives the data to the function and ultimally the parent file
  const saveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      // ...enteredExpense appeneds the expense and the data includes the other userInputs if they exists
      ...enteredExpense,
      // sets the id to a random num or letter
      id: Math.random().toString,
    };
    props.onAddExpense(expenseData); // this sends the data that NewExpense recived from expenseForm to App.js
    // console.log(expenseData) // do this so we can see if data from expenseForm makes it to newExpense
  };
  return (
    <div className="new-expense">
      {/* the child talks to the parent through events that we create
        we are going to create our own custom event that saves the expense data 
        Event: onSaveExpenseData={} calls the data from a function saveExpenseDataHandler*/}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
