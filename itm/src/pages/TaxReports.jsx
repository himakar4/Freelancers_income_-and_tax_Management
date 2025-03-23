import { useState } from "react";
import "./TaxReports.css"; // Ensure the CSS file is properly linked

const TaxReports = () => {
  const [taxReports, setTaxReports] = useState([]);
  const [newReport, setNewReport] = useState({
    userId: "",
    taxYear: "",
    totalIncome: "",
    totalExpenses: "",
    taxableIncome: "",
    estimatedTaxDue: "",
    generatedDate: new Date().toISOString().split("T")[0],
    status: "draft",
  });

  const handleChange = (e) => {
    setNewReport({ ...newReport, [e.target.name]: e.target.value });
  };

  const addTaxReport = (e) => {
    e.preventDefault();
    const updatedReports = [
      ...taxReports,
      { ...newReport, id: taxReports.length + 1 },
    ];
    setTaxReports(updatedReports);
    setNewReport({
      userId: "",
      taxYear: "",
      totalIncome: "",
      totalExpenses: "",
      taxableIncome: "",
      estimatedTaxDue: "",
      generatedDate: new Date().toISOString().split("T")[0],
      status: "draft",
    });
  };

  return (
    <div className="page-container">
      <h2>Tax Reports</h2>
      <p>Review your tax reports.</p>

      <form onSubmit={addTaxReport} className="tax-report-form">
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={newReport.userId}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="taxYear"
          placeholder="Tax Year"
          value={newReport.taxYear}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="totalIncome"
          placeholder="Total Income"
          value={newReport.totalIncome}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="totalExpenses"
          placeholder="Total Expenses"
          value={newReport.totalExpenses}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="taxableIncome"
          placeholder="Taxable Income"
          value={newReport.taxableIncome}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="estimatedTaxDue"
          placeholder="Estimated Tax Due"
          value={newReport.estimatedTaxDue}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="generatedDate"
          value={newReport.generatedDate}
          onChange={handleChange}
          required
        />
        <select name="status" value={newReport.status} onChange={handleChange}>
          <option value="draft">Draft</option>
          <option value="finalized">Finalized</option>
        </select>
        <button type="submit">Add Report</button>
      </form>

      <div className="table-container">
        <table className="tax-report-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Tax Year</th>
              <th>Total Income</th>
              <th>Total Expenses</th>
              <th>Taxable Income</th>
              <th>Estimated Tax Due</th>
              <th>Generated Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {taxReports.length > 0 ? (
              taxReports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.userId}</td>
                  <td>{report.taxYear}</td>
                  <td>${report.totalIncome}</td>
                  <td>${report.totalExpenses}</td>
                  <td>${report.taxableIncome}</td>
                  <td>${report.estimatedTaxDue}</td>
                  <td>{report.generatedDate}</td>
                  <td
                    className={
                      report.status === "finalized" ? "finalized" : "draft"
                    }
                  >
                    {report.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="no-data">
                  No tax reports found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxReports;
