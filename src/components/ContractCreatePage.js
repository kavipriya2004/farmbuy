// src/components/ContractCreatePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const ContractCreatePage = () => {
  const [contractData, setContractData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
  });
  const { auth } = useAuth();
  const navigate = useNavigate();

  if (!auth) {
    return <div>Please log in to create a contract.</div>;
  }

  const handleChange = (e) => {
    setContractData({ ...contractData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the contract data to your server
    // Redirect to the contracts page or show a success message
    navigate('/contracts');
  };

  return (
    <div>
      <h1>Create New Contract</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={contractData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={contractData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={contractData.startDate}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={contractData.endDate}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create Contract</button>
      </form>
    </div>
  );
};

export default ContractCreatePage;
