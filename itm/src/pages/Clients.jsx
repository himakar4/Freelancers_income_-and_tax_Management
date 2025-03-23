import { useState, useEffect } from "react";
import "./Clients.css"; // Ensure this file is present

const Clients = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      userId: "101",
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      address: "123 Main St, City, Country",
      companyName: "Doe Enterprises",
      taxIdentifier: "TAX123456",
      notes: "VIP client",
      status: "active",
      dateCreated: "2025-01-10",
      dateUpdated: "2025-03-20",
    },
    {
      id: 2,
      userId: "102",
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
      address: "456 Elm St, City, Country",
      companyName: "Smith Solutions",
      taxIdentifier: "TAX654321",
      notes: "Requires monthly reports",
      status: "inactive",
      dateCreated: "2025-02-15",
      dateUpdated: "2025-03-18",
    },
  ]);

  const [newClient, setNewClient] = useState({
    userId: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    companyName: "",
    taxIdentifier: "",
    notes: "",
    status: "active",
    dateCreated: new Date().toISOString().split("T")[0],
    dateUpdated: new Date().toISOString().split("T")[0],
  });

  // Fetch clients from API if available
  useEffect(() => {
    fetch("http://localhost:5000/clients")
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Error fetching clients:", error));
  }, []);

  const handleInputChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newClient),
      });

      if (!response.ok) {
        throw new Error("Failed to add client");
      }

      const addedClient = await response.json();
      setClients([...clients, addedClient]); // Add client to state

      // Reset form fields
      setNewClient({
        userId: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        companyName: "",
        taxIdentifier: "",
        notes: "",
        status: "active",
        dateCreated: new Date().toISOString().split("T")[0],
        dateUpdated: new Date().toISOString().split("T")[0],
      });
    } catch (error) {
      console.error("Error adding client:", error);
    }
  };

  return (
    <div className="page-container">
      <h2>Clients</h2>
      <p>Manage your client information.</p>

      {/* Add Client Form */}
      <form className="client-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={newClient.userId}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newClient.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newClient.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={newClient.phone}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={newClient.address}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={newClient.companyName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="taxIdentifier"
          placeholder="Tax ID"
          value={newClient.taxIdentifier}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="notes"
          placeholder="Notes"
          value={newClient.notes}
          onChange={handleInputChange}
        />
        <select
          name="status"
          value={newClient.status}
          onChange={handleInputChange}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button type="submit">Add Client</button>
      </form>

      {/* Clients Table */}
      <div className="table-container">
        <table className="client-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Company</th>
              <th>Tax ID</th>
              <th>Notes</th>
              <th>Status</th>
              <th>Created</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {clients.length > 0 ? (
              clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.userId}</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.address}</td>
                  <td>{client.companyName}</td>
                  <td>{client.taxIdentifier}</td>
                  <td>{client.notes}</td>
                  <td
                    className={
                      client.status === "active" ? "active" : "inactive"
                    }
                  >
                    {client.status}
                  </td>
                  <td>{client.dateCreated}</td>
                  <td>{client.dateUpdated}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="no-data">
                  No clients found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clients;
