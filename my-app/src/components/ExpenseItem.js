import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// this is seperate form App.js because App.js is what is going to load this ExpenseItem.js
// This is a component
// variables that are passed intot the function () are called props
function ExpenseItem(props) {
  // didn't use () with return because we only have one element if we had multiple we would need to use ()
  //   return <h2>Expense Item!</h2>;

  // ----------- W/out Props ----------
  // This is a way to write an passs in date in the same file
  // const expenseDate = new Date(2023, 1, 4);
  // const expenseTitle = "Car Insurence";
  // const expenseAmount = 294.67;

  return (
    // you have to have one root element if the top div in this case it is the root element and if it was gone it would throw an error
    // You can't use class like in html because that is a reserved word, so instead we use className to use css classes
    <div className="expense-item">
        {/* sense there is nothing between the <ExpenseDate></ExpenseDate> change it to a single <ExpenseDate />*/}
        <ExpenseDate date={props.date}/>


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
    </div>
  );
}

export default ExpenseItem;
