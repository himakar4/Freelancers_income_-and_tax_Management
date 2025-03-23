import { useState } from "react";
import "./PaymentMethods.css"; // Ensure the CSS file is properly linked

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [newMethod, setNewMethod] = useState({
    userId: "",
    type: "bank",
    accountName: "",
    accountDetails: "",
    isDefault: false,
    dateCreated: new Date().toISOString().split("T")[0],
    dateUpdated: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewMethod({
      ...newMethod,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addPaymentMethod = (e) => {
    e.preventDefault();
    const updatedMethods = [
      ...paymentMethods,
      { ...newMethod, id: paymentMethods.length + 1 },
    ];
    setPaymentMethods(updatedMethods);
    setNewMethod({
      userId: "",
      type: "bank",
      accountName: "",
      accountDetails: "",
      isDefault: false,
      dateCreated: new Date().toISOString().split("T")[0],
      dateUpdated: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="page-container">
      <h2>Payment Methods</h2>
      <p>Manage your payment methods.</p>

      <form onSubmit={addPaymentMethod} className="payment-method-form">
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={newMethod.userId}
          onChange={handleChange}
          required
        />
        <select name="type" value={newMethod.type} onChange={handleChange}>
          <option value="bank">Bank</option>
          <option value="paypal">PayPal</option>
          <option value="credit_card">Credit Card</option>
        </select>
        <input
          type="text"
          name="accountName"
          placeholder="Account Name"
          value={newMethod.accountName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="accountDetails"
          placeholder="Account Details"
          value={newMethod.accountDetails}
          onChange={handleChange}
          required
        />
        <label>
          <input
            type="checkbox"
            name="isDefault"
            checked={newMethod.isDefault}
            onChange={handleChange}
          />{" "}
          Set as Default
        </label>
        <button type="submit">Add Payment Method</button>
      </form>

      <div className="table-container">
        <table className="payment-method-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Type</th>
              <th>Account Name</th>
              <th>Account Details</th>
              <th>Default</th>
              <th>Date Created</th>
              <th>Date Updated</th>
            </tr>
          </thead>
          <tbody>
            {paymentMethods.length > 0 ? (
              paymentMethods.map((method) => (
                <tr key={method.id}>
                  <td>{method.id}</td>
                  <td>{method.userId}</td>
                  <td>{method.type}</td>
                  <td>{method.accountName}</td>
                  <td>{method.accountDetails}</td>
                  <td>{method.isDefault ? "Yes" : "No"}</td>
                  <td>{method.dateCreated}</td>
                  <td>{method.dateUpdated}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-data">
                  No payment methods found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentMethods;
