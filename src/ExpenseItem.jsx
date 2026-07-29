function ExpenseItem( {item, deleted} ) {
  return (
    <>
      <div className="expense-item">
        <span>{item.title}</span>
        <span>₹{item.amount}</span>
        <button onClick={() => deleted(item.id) } >❌</button>
      </div>
    </>
  );
}

export default ExpenseItem;
