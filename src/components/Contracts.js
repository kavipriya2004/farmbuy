import React, { useState } from 'react';
import './Contract.css'; // Import the CSS file

const ContractPage = () => {
  const [contracts, setContracts] = useState([
    { id: 1, title: 'Contract with Farmer A', date: '2024-08-01', status: 'Active' },
    { id: 2, title: 'Contract with Farmer B', date: '2024-09-01', status: 'Pending' },
    // Add more contract data as needed
  ]);

  const handleCreateContract = () => {
    // Logic to create a new contract
  };

  const handleEditContract = (id) => {
    // Logic to edit a contract
  };

  const handleViewContract = (id) => {
    // Logic to view contract details
  };

  return (
    <div className="contract-page">
      <h1>Contract Management</h1>
      <button onClick={handleCreateContract} className="create-contract-button">Create New Contract</button>
      <div className="contract-list">
        {contracts.map((contract) => (
          <div className="contract-box" key={contract.id}>
            <h2>{contract.title}</h2>
            <p>Date: {contract.date}</p>
            <p>Status: {contract.status}</p>
            <button onClick={() => handleViewContract(contract.id)} className="view-button">View Details</button>
            <button onClick={() => handleEditContract(contract.id)} className="edit-button">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractPage;
