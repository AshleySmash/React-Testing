import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
// import { useState } from "react"; // no longer needed

// this is seperate form App.js because App.js is what is going to load this ExpenseItem.js
// This is a component
// variables that are passed intot the function () are called props

//------------------- Alternate Syntax for functions! ------------------------------
// const ExpenseItem = (props) => {}

function ExpenseItem(props) {
  /* useState() has to be delarced directly into a component function not 
   outside of the function or in the return() or in the nested functions of the component such as clickHandler
   The Value that you insert into useState Tells it that it is what you want to change so react knows what to update
   useState returns a function that allows us to reassign the value, it returns an array where the first element is the value the second is the updating function that allows us to change the data 
   const [title, setTitle] uses array destructoring, you can have the title, and setTitle be whatever words you want

// We no longer need these const's because of what we did in expenseForm 
      const [title, setTitle] = useState(props.title); 

  // function that is called in the click event on the button
      const clickHandler = () => {
        setTitle("Updated!");
        console.log(title);
      };
*/

  // didn't use () with return because we only have one element if we had multiple we would need to use ()
  //   return <h2>Expense Item!</h2>;

  // ----------- W/out Props ----------
  // This is a way to write an passs in date in the same file
  // const expenseDate = new Date(2023, 1, 4);
  // const expenseTitle = "Car Insurence";
  // const expenseAmount = 294.67;

  return (
    // you have to have one root element if the <Card> in this case is the root element and if it was gone it would throw an error
    // You can't use class like in html because that is a reserved word, so instead we use className to use css classes
    <Card className="expense-item">
      {/* sense there is nothing between the <ExpenseDate></ExpenseDate> change it to a single <ExpenseDate />*/}
      <ExpenseDate date={props.date} />

      {/* --------------- W/out Props ----------------
      -- To use dynamic data in React you will use {} the {} all JavaScript Expressions
      -- You have to use the .toISOString to get the date to show up 
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>{" "}
      */}

      {/* ***********With Props*********** */}
      {/* Use props infront of things becasue the data is being pass as one chunk of data or array of data and it is all put in props
          so to access it indivdually we access it by its second attribute (date, title, and amount are all within props) */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* The button has an anyonomus function () => {} which means we didn't specify a name and we created the function inside of the button tag 
          It also has an event the onClick when the button is clicked it displayes to the console clicked with the number of times it was clicked so far
      <button
        onClick={() => {
          console.log("Clicked!");
        }}
      >
        Change Title
      </button>
      */}

      {/* Calling a function in the event don't put () on the clickHandler() because we are not executing the function we are just pointing to it  
      We no longer need this button because of ExpenseForm
      <button onClick={clickHandler}> Change Title </button> */}
    </Card>
  );
}

export default ExpenseItem;
