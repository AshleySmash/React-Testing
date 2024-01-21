// ExpenseItem is the name we access the import by and the from is where it's located sense it's a js file we don't need to put the .js at the end
import ExpenseItem from "./components/ExpenseItem";

function App() {
  // Creating an array (we use this to create multiple peices of data)
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // JavaScript way to display to website
  // const para = document.createElement("p");
  // para.textContent = "This is also visible";
  // // root is already an ID that was imported from the react app package,
  // // if root wasn't imported we would need to create a diffrent id to append to
  // document.getElementById("root").append(para);

  // React way to display to website
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <p>This is visible</p> */}

      {/*JSX syntax to call component  */}
      {/* this way */}
      {/* <ExpenseItem /> */}
      {/* or this way */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
