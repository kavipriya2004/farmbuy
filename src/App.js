// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FarmerDashboard from './components/FarmerDashboard';
import BuyerDashboard from './components/BuyerDashboard';
import Contracts from './components/Contracts';
import Register from './components/Register';
import ContractCreatePage from './components/ContractCreatePage';
import ContractDetailsPage from './components/ContractDetailsPage';
import ContractEditPage from './components/ContractEditPage';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/register" element={<Register />} /> 
          <Route
            path="/create-contract"
            element={<ProtectedRoute element={ContractCreatePage} />}
          />
          <Route
            path="/contract/:id"
            element={<ProtectedRoute element={ContractDetailsPage} />}
          />
          <Route
            path="/edit-contract/:id"
            element={<ProtectedRoute element={ContractEditPage} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
