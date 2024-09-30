import React from "react";

// Partnership List Component
const PartnershipsTable = ({ proposals, handleEdit, handleDelete }) => {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      <h3>Existing Proposals</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Company Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Website</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Proposal</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((proposal) => (
            <tr key={proposal._id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{proposal.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{proposal.email}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{proposal.companyName}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{proposal.website}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{proposal.proposal}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button
                  onClick={() => handleEdit(proposal)}
                  style={{
                    marginRight: '10px',
                    padding: '5px',
                    backgroundColor: '#2196F3',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(proposal._id)}
                  style={{
                    padding: '5px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
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
  );
};

export default PartnershipsTable;
