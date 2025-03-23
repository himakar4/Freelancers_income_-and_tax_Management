import { useState } from "react";
import "./Expenses.css"
const Expenses = () => {
  const [expensesList, setExpensesList] = useState([]);
  const [formData, setFormData] = useState({
    userId: "",
    category: "",
    amount: "",
    currency: "USD",
    description: "",
    receipt: null,
    dateIncurred: "",
    isTaxDeductible: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, receipt: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: expensesList.length + 1,
      userId: formData.userId,
      category: formData.category,
      amount: formData.amount,
      currency: formData.currency,
      description: formData.description,
      receipt: formData.receipt ? formData.receipt.name : "No Receipt",
      dateIncurred: formData.dateIncurred,
      isTaxDeductible: formData.isTaxDeductible,
      dateCreated: new Date().toISOString().split("T")[0],
      dateUpdated: new Date().toISOString().split("T")[0],
    };
    setExpensesList([...expensesList, newExpense]);
    setFormData({
      userId: "",
      category: "",
      amount: "",
      currency: "USD",
      description: "",
      receipt: null,
      dateIncurred: "",
      isTaxDeductible: false,
    });
  };

  return (
    <div className="page-container">
      <h2>Expenses</h2>
      <form className="expense-form" onSubmit={handleSubmit}>
        <input
          type="number"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <select
          name="currency"
          value={formData.currency}
          onChange={handleChange}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input type="file" name="receipt" onChange={handleFileChange} />
        <input
          type="date"
          name="dateIncurred"
          value={formData.dateIncurred}
          onChange={handleChange}
          required
        />
        <label>
          <input
            type="checkbox"
            name="isTaxDeductible"
            checked={formData.isTaxDeductible}
            onChange={handleChange}
          />
          Tax Deductible
        </label>
        <button type="submit">Add Expense</button>
      </form>

      <table className="expense-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Description</th>
            <th>Receipt</th>
            <th>Date Incurred</th>
            <th>Tax Deductible</th>
            <th>Date Created</th>
            <th>Date Updated</th>
          </tr>
        </thead>
        <tbody>
          {expensesList.length > 0 ? (
            expensesList.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.userId}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>{expense.currency}</td>
                <td>{expense.description}</td>
                <td>{expense.receipt}</td>
                <td>{expense.dateIncurred}</td>
                <td>{expense.isTaxDeductible ? "Yes" : "No"}</td>
                <td>{expense.dateCreated}</td>
                <td>{expense.dateUpdated}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11" className="no-data">
                No expense records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
