import React from "react";

const PartnershipsTable = ({ proposals, handleEdit, handleDelete }) => {
  return (
    <section>
      <h3>Existing Proposals</h3>
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
          {proposals.map((proposal) => (
            <tr key={proposal._id}>
              <td>{proposal.name}</td>
              <td>{proposal.email}</td>
              <td>{proposal.companyName}</td>
              <td>{proposal.website}</td>
              <td>{proposal.proposal}</td>
              <td>
                <button onClick={() => handleEdit(proposal)}>Edit</button>
                <button onClick={() => handleDelete(proposal._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default PartnershipsTable;
