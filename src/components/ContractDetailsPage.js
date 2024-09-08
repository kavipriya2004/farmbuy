// src/components/ContractDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const ContractDetailsPage = () => {
  const { id } = useParams();
  const [contract, setContract] = useState(null);
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      // Fetch contract details based on ID
      // Example fetch call
      fetch(`/api/contracts/${id}`)
        .then((response) => response.json())
        .then((data) => setContract(data))
        .catch((error) => console.error('Error fetching contract:', error));
    } else {
      navigate('/login');
    }
  }, [id, auth, navigate]);

  if (!auth) {
    return <div>Please log in to view contract details.</div>;
  }

  if (!contract) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Contract Details</h1>
      <p><strong>Title:</strong> {contract.title}</p>
      <p><strong>Description:</strong> {contract.description}</p>
      <p><strong>Start Date:</strong> {contract.startDate}</p>
      <p><strong>End Date:</strong> {contract.endDate}</p>
      {/* Add additional details and edit functionality here */}
    </div>
  );
};

export default ContractDetailsPage;
