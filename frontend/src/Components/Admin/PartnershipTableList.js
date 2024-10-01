import React, { useState, useEffect } from "react";
import axios from "axios";

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

  const filteredProposals = proposals.filter(proposal =>
    proposal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    proposal.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    proposal.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    proposal.proposal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
      <h3>Existing Proposals</h3>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search proposals..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

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
