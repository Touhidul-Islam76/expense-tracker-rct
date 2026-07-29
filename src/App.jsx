import { useState } from "react";
import "./App.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
function App() {
  const [expense, setExpense] = useState([]);

  const addExpense = (expense) =>{
    setExpense((prev) => [...prev, expense]);
  }

  const deleteExpense = (id) =>{
    setExpense((prev) => prev.filter((item) => item.id != id) )
  }

  const totalExpenses  = expense.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <h3 className="total">Total Expense: BDT- {totalExpenses}</h3>
      <ExpenseList expenses={expense} deleted={deleteExpense} />

    </div>
  );
}

export default App;