import { useRef, useState } from "react";

function ExpenseForm({addExpense}) {
  const [title, SetTitle] = useState("");
  const [amount, setAmount] = useState("");
  const titleRef = useRef();

  const  handleSubmit = (e) => {
    e.preventDefault();

    if(!title || !amount) return alert("Please fill all fields!");

    const newExpense = {
        id:Date.now(),
        title: title,
        amount: parseFloat(amount)
    }

    addExpense(newExpense)

    SetTitle("");
    setAmount("");
    titleRef.current.focus();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="expense-form">
        <input
          placeholder="Expense Title"
          type="text"
          value={title}
          onChange={(e) => SetTitle(e.target.value)}
          ref={titleRef}
        />

        <input
          placeholder="Amount BDT"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Add Expense</button>
      </form>
    </>
  );
}

export default ExpenseForm;
