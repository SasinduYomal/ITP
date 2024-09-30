import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import PartnershipFormSection from "./PartnershipFormSection";  // Import the form component
import PartnershipsTable from "./PartnershipsTable";  // Import the table component

const PartnershipsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    website: "",
    proposal: "",
  });
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    
    <div className="partnership-form-container">
      <h2>Express Interest in Partnerships</h2>
      <PartnershipFormSection
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editId={editId}
      />
      <PartnershipsTable
        proposals={proposals}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default PartnershipsForm;
