// src/components/ContractEditPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const ContractEditPage = () => {
  const { id } = useParams();
  const [contractData, setContractData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
  });
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      // Fetch existing contract details based on ID
      fetch(`/api/contracts/${id}`)
        .then((response) => response.json())
        .then((data) => setContractData(data))
        .catch((error) => console.error('Error fetching contract:', error));
    } else {
      navigate('/login');
    }
  }, [id, auth, navigate]);

  const handleChange = (e) => {
    setContractData({ ...contractData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the contract data
    fetch(`/api/contracts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contractData),
    })
      .then(() => navigate(`/contract/${id}`))
      .catch((error) => console.error('Error updating contract:', error));
  };

  if (!auth) {
    return <div>Please log in to edit the contract.</div>;
  }

  return (
    <div>
      <h1>Edit Contract</h1>
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
        <button type="submit">Update Contract</button>
      </form>
    </div>
  );
};

export default ContractEditPage;
