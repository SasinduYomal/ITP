import React from "react";

const PartnershipFormSection = ({ formData, handleChange, handleSubmit, editId }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your full name"
        required
      />

      <label htmlFor="email">Your Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email address"
        required
      />

      <label htmlFor="companyName">Company Name:</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Enter your company name"
        required
      />

      <label htmlFor="website">Company Website:</label>
      <input
        type="url"
        id="website"
        name="website"
        value={formData.website}
        onChange={handleChange}
        placeholder="Enter your company website URL"
      />

      <label htmlFor="proposal">Your Proposal:</label>
      <textarea
        id="proposal"
        name="proposal"
        value={formData.proposal}
        onChange={handleChange}
        placeholder="Describe your proposal"
        required
      />

      <button type="submit">{editId ? "Update Proposal" : "Submit Proposal"}</button>
    </form>
  );
};

export default PartnershipFormSection;
