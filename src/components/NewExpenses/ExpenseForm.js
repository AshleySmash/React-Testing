import "./ExpenseForm.css";
import { useState } from "react";

/* Now we want to do something with our data and we in order to do so we 
have to pass the data from the children to the parents in this case app.js 
is the parent with newExpense being a child of App and ExpenseForm a child of NewExpense
App(parent) -> newExpense(child) -> ExpenseForm(child of child) */

// we are now passing properties to the function ExpenseForm so we add props to the parameters
const ExpenseForm = (props) => {
  /* we put "" in useState because there isn't values that we want to update
     We can use useState() multiple times in a document if needed
  */
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* to use only one useState instead of the three above we 
     put an object in the useState() with the entered:title, amount, and date equal to an empty string
     in the array destructor [] we but the value: userInput, and then set UserInput for the second value
    const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",}); 
  */

  /* DOM has a parameter called event we pass it in to the titleChangeHandler function
     it displays/creates an object one of the properties is target and inside target there is get value and set value
     in order to get the value that is being passed into the form to change one or multiple values of the expenses
     we do event.target.value
  */
  const titleChangeHandler = (event) => {
    // use this when doing multiple useState()'s
    setEnteredTitle(event.target.value);

    //use this when doing single useState()
    /* setUserInput takes an object */
    // setUserInput({
    //   /* ...userInput includes the other userInputs if they exists (this is either a spread or rest operator I'm not sure) */
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };

  const amountChangeHandler = (event) => {
    // use this when doing multiple useState()'s
    setEnteredAmount(event.target.value);

    //use this when doing single useState()
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    // use this when doing multiple useState()'s
    setEnteredDate(event.target.value);

    //use this when doing single useState()
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  // This function will be what sets the new data
  const submitHandler = (event) => {
    // preventDefault() is a function that prevents the refresh of the page when the button is clicked
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // this calls the NewExpense parents function that it passed to the child and forces the child function to give the data to the function and back to the parent
    props.onSaveExpenseData(expenseData); // sends the data to NewExpense form where it is outputed to the console log

    /* Two-way data binding will make it so the form input fields will clear themselves on submission, but won't reset the whole page
   Two-way data binding listens to the event and then passes a new value (In this case it will listen for the submit event and then reset the value/input fields)
   In react the only thing you need to do to get Two-way data binding is add the value attribute to the input fields */
    setEnteredTitle(""); // this resets the input field when the submit button is pushed
    setEnteredAmount(""); // but if we didn't want the input reset we could set it to whatever value we wanted
    setEnteredDate("");
  };

  return (
    // call the submitHandler in form tag
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* onChange can take any value: number, string, character, etc. 
          value={enteredAmount} is how we call the two-way data binding (so it will refresh the input fields when the submit is pressed)*/}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
