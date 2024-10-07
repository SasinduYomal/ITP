import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const PartnershipsTable = () => {
  const [proposals, setProposals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProposals();
  }, []);

  const fetchProposals = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/proposals");
      setProposals(response.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching proposals.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/proposals/${id}`);
      alert("Proposal deleted successfully.");
      fetchProposals();
    } catch (err) {
      console.error(err);
      alert("Error deleting proposal.");
    }
  };

  // Filtered proposals based on search query
  const filteredProposals = proposals.filter(proposal =>
    proposal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    proposal.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    proposal.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    proposal.proposal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to generate the PDF report with a table
  const generatePDFReport = () => {
    const doc = new jsPDF();

    // Add company name and current date
    doc.text("BlueWave", 10, 10); // Customize this line for your company name
    const currentDate = new Date().toLocaleDateString();
    doc.text(`Date: ${currentDate}`, 150, 10);

    // Generate the table with proposals data
    doc.autoTable({
      head: [['Name', 'Email', 'Company Name', 'Website', 'Proposal']],
      body: filteredProposals.map(proposal => [
        proposal.name,
        proposal.email,
        proposal.companyName,
        proposal.website,
        proposal.proposal,
      ]),
      startY: 20, // Start after the header text
    });

    // Save the generated PDF
    doc.save("Proposals_Report.pdf");
  };

  // Function to download proposals as CSV
  const downloadCSV = () => {
    const headers = ['Name', 'Email', 'Company Name', 'Website', 'Proposal'];
    const rows = filteredProposals.map(proposal => [
      proposal.name,
      proposal.email,
      proposal.companyName,
      proposal.website,
      proposal.proposal,
    ]);

    // Combine headers and rows into CSV format
    const csvContent = [headers, ...rows]
      .map(e => e.join(","))
      .join("\n");

    // Create a blob and download the CSV file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Proposals_Report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section>
      <h2>Existing Proposals</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search proposals..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      <button onClick={generatePDFReport} style={{ marginRight: "10px" }}>
        Generate PDF Report
      </button>
      <button onClick={downloadCSV} style={{ marginBottom: "10px" }}>
        Download CSV
      </button>

      <table className="proposal-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Website</th>
            <th>Proposal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProposals.length > 0 ? (
            filteredProposals.map((proposal) => (
              <tr key={proposal._id}>
                <td>{proposal.name}</td>
                <td>{proposal.email}</td>
                <td>{proposal.companyName}</td>
                <td>{proposal.website}</td>
                <td>{proposal.proposal}</td>
                <td>
                  <button
                    onClick={() => handleDelete(proposal._id)}
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No proposals found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default PartnershipsTable;
