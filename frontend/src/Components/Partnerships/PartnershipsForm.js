import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";

const PartnershipsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    website: "",
    proposal: "",
  });
  const [errors, setErrors] = useState({});
  const [proposals, setProposals] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch existing proposals
  const fetchProposals = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/proposals");
      setProposals(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProposals();
  }, []);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const websiteRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,4}\/?$/;
    const numberRegex = /^\d+$/; // Regex to check if the proposal contains only numbers

    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.companyName) {
      newErrors.companyName = "Company name is required";
    }
    if (!formData.website || !websiteRegex.test(formData.website)) {
      newErrors.website = "Valid website URL is required";
    }
    if (!formData.proposal) {
      newErrors.proposal = "Proposal is required";
    } else if (numberRegex.test(formData.proposal)) {
      newErrors.proposal = "Proposal cannot contain only numbers";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      if (editId) {
        // Update existing proposal
        await axios.put(`http://localhost:5000/api/proposals/${editId}`, formData);
        alert("Proposal updated successfully!");
      } else {
        // Create new proposal
        await axios.post("http://localhost:5000/api/proposals", formData);
        alert("Proposal submitted successfully!");
      }
      setEditId(null);
      setFormData({
        name: "",
        email: "",
        companyName: "",
        website: "",
        proposal: "",
      });
      fetchProposals();
    } catch (err) {
      console.error(err);
      alert("Error submitting proposal. Please try again.");
    }
  };

  const handleEdit = (proposal) => {
    setFormData(proposal);
    setEditId(proposal._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/proposals/${id}`);
      alert("Proposal deleted successfully!");
      fetchProposals();
    } catch (err) {
      console.error(err);
      alert("Error deleting proposal. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Express Interest in Partnerships</h2>

      {/* Partnership Form Section */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3>Submit Your Proposal</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your company name"
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          {errors.companyName && <p style={{ color: "red" }}>{errors.companyName}</p>}
          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Enter your company website URL"
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          {errors.website && <p style={{ color: "red" }}>{errors.website}</p>}
          <textarea
            name="proposal"
            value={formData.proposal}
            onChange={handleChange}
            placeholder="Describe your proposal"
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          {errors.proposal && <p style={{ color: "red" }}>{errors.proposal}</p>}
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {editId ? "Update Proposal" : "Submit Proposal"}
          </button>
        </form>
      </div>

      {/* Adding space between the form and list */}
      <div style={{ margin: "40px 0" }}></div>

      {/* Partnership List Section */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3>Existing Proposals</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Company Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Website</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Proposal</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((proposal) => (
              <tr key={proposal._id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{proposal.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{proposal.email}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{proposal.companyName}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{proposal.website}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{proposal.proposal}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <button
                    onClick={() => handleEdit(proposal)}
                    style={{
                      marginRight: "10px",
                      padding: "5px",
                      backgroundColor: "#2196F3",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(proposal._id)}
                    style={{
                      padding: "5px",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnershipsForm;
