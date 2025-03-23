import { useState } from "react";
import "./Invoices.css"; 

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  const [newInvoice, setNewInvoice] = useState({
    id: "",
    userId: "",
    clientId: "",
    invoiceNumber: "",
    issueDate: new Date().toISOString().split("T")[0],
    dueDate: "",
    status: "draft",
    subtotal: "",
    taxAmount: "",
    totalAmount: "",
    currency: "USD",
    notes: "",
    dateCreated: new Date().toISOString().split("T")[0],
    dateUpdated: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    setNewInvoice({ ...newInvoice, [e.target.name]: e.target.value });
  };

  const addInvoice = (e) => {
    e.preventDefault();
    setInvoices([...invoices, { ...newInvoice, id: invoices.length + 1 }]);
    setNewInvoice({
      id: "",
      userId: "",
      clientId: "",
      invoiceNumber: "",
      issueDate: new Date().toISOString().split("T")[0],
      dueDate: "",
      status: "draft",
      subtotal: "",
      taxAmount: "",
      totalAmount: "",
      currency: "USD",
      notes: "",
      dateCreated: new Date().toISOString().split("T")[0],
      dateUpdated: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="page-container">
      <h2>Invoices</h2>
      <p>Manage your invoices.</p>

      <form onSubmit={addInvoice} className="invoice-form">
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={newInvoice.userId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="clientId"
          placeholder="Client ID"
          value={newInvoice.clientId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="invoiceNumber"
          placeholder="Invoice Number"
          value={newInvoice.invoiceNumber}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dueDate"
          value={newInvoice.dueDate}
          onChange={handleChange}
          required
        />
        <select name="status" value={newInvoice.status} onChange={handleChange}>
          <option value="draft">Draft</option>
          <option value="sent">Sent</option>
          <option value="paid">Paid</option>
          <option value="overdue">Overdue</option>
        </select>
        <input
          type="number"
          name="subtotal"
          placeholder="Subtotal"
          value={newInvoice.subtotal}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="taxAmount"
          placeholder="Tax Amount"
          value={newInvoice.taxAmount}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="totalAmount"
          placeholder="Total Amount"
          value={newInvoice.totalAmount}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="currency"
          placeholder="Currency"
          value={newInvoice.currency}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="notes"
          placeholder="Notes"
          value={newInvoice.notes}
          onChange={handleChange}
        />
        <button type="submit">Add Invoice</button>
      </form>

      <div className="table-container">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Client ID</th>
              <th>Invoice Number</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Subtotal</th>
              <th>Tax Amount</th>
              <th>Total Amount</th>
              <th>Currency</th>
              <th>Notes</th>
              <th>Created</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {invoices.length > 0 ? (
              invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>{invoice.userId}</td>
                  <td>{invoice.clientId}</td>
                  <td>{invoice.invoiceNumber}</td>
                  <td>{invoice.issueDate}</td>
                  <td>{invoice.dueDate}</td>
                  <td>{invoice.status}</td>
                  <td>{invoice.subtotal}</td>
                  <td>{invoice.taxAmount}</td>
                  <td>{invoice.totalAmount}</td>
                  <td>{invoice.currency}</td>
                  <td>{invoice.notes}</td>
                  <td>{invoice.dateCreated}</td>
                  <td>{invoice.dateUpdated}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="14" className="no-data">
                  No invoices found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
