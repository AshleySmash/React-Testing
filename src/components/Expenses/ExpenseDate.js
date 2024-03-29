import "./ExpenseDate.css";

//------------------- Alternate Syntax for functions! ------------------------------
// const ExpenseDate = (props) => {}

function ExpenseDate(props) {
  //toLocalString displays time/date in a more readable way 'long' gives the whole month name
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
