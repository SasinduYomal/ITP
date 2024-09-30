import React from "react";

// Partnership Form Component
const PartnershipFormSection = ({ formData, handleChange, handleSubmit, editId }) => {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      <h3>Submit Your Proposal</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter your company name"
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Enter your company website URL"
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <textarea
          name="proposal"
          value={formData.proposal}
          onChange={handleChange}
          placeholder="Describe your proposal"
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {editId ? "Update Proposal" : "Submit Proposal"}
        </button>
      </form>
    </div>
  );
};

export default PartnershipFormSection;
