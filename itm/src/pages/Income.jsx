import { useState } from "react";
import "./Income.css";

const Income = () => {
  const [incomeList, setIncomeList] = useState([]);
  const [formData, setFormData] = useState({
    userId: "",
    clientId: "",
    amount: "",
    currency: "USD",
    description: "",
    category: "",
    dateReceived: "",
    invoiceId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIncome = {
      id: incomeList.length + 1,
      userId: formData.userId,
      clientId: formData.clientId,
      amount: formData.amount,
      currency: formData.currency,
      description: formData.description,
      category: formData.category,
      dateReceived: formData.dateReceived,
      dateCreated: new Date().toISOString().split("T")[0],
      dateUpdated: new Date().toISOString().split("T")[0],
      invoiceId: formData.invoiceId || null,
    };
    setIncomeList([...incomeList, newIncome]);
    setFormData({
      userId: "",
      clientId: "",
      amount: "",
      currency: "USD",
      description: "",
      category: "",
      dateReceived: "",
      invoiceId: "",
    });
  };

  return (
    <div className="page-container">
      <h2>Income</h2>
      <form className="income-form" onSubmit={handleSubmit}>
        <input
          type="number"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="clientId"
          placeholder="Client ID"
          value={formData.clientId}
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
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dateReceived"
          value={formData.dateReceived}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="invoiceId"
          placeholder="Invoice ID (optional)"
          value={formData.invoiceId}
          onChange={handleChange}
        />
        <button type="submit">Add Income</button>
      </form>
      <table className="income-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Client ID</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Description</th>
            <th>Category</th>
            <th>Date Received</th>
            <th>Date Created</th>
            <th>Date Updated</th>
            <th>Invoice ID</th>
          </tr>
        </thead>
        <tbody>
          {incomeList.length > 0 ? (
            incomeList.map((income) => (
              <tr key={income.id}>
                <td>{income.id}</td>
                <td>{income.userId}</td>
                <td>{income.clientId}</td>
                <td>{income.amount}</td>
                <td>{income.currency}</td>
                <td>{income.description}</td>
                <td>{income.category}</td>
                <td>{income.dateReceived}</td>
                <td>{income.dateCreated}</td>
                <td>{income.dateUpdated}</td>
                <td>{income.invoiceId || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11" className="no-data">
                No income records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Income;
