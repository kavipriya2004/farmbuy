import React from 'react';
import './FarmerDashboard.css'; // Import the CSS file

const FarmerDashboard = () => {
  const farmerInfo = [
    { title: 'Profile Information', content: 'Name: John Doe\nContact: john.doe@example.com | +123456789\nLocation: Rural Farm, Springfield\nExperience: 15 years in organic farming' },
    { title: 'Crops Information', content: 'Types of Crops: Corn, soybeans, wheat\nCrop Yield: 5000 kg/ha annually\nSeasonal Crops: Wheat (spring), corn (summer)' },
    { title: 'Land Information', content: 'Farm Size: 100 hectares\nLand Type: Arable land with clay soil\nSoil Quality: Well-managed, high fertility\nWater Sources: Drip irrigation system' },
    { title: 'Farming Philosophy', content: 'Committed to organic farming, using eco-friendly methods to maintain soil health and crop productivity.' },
    { title: 'Achievements', content: 'Awarded "Best Organic Farmer" in 2022.' },
    { title: 'Future Plans', content: 'Expanding crop varieties and investing in new irrigation technologies.' },
    // Add more items as needed
    { title: 'Profile Information', content: 'Name: John Doe\nContact: john.doe@example.com | +123456789\nLocation: Rural Farm, Springfield\nExperience: 15 years in organic farming' },
    { title: 'Crops Information', content: 'Types of Crops: Corn, soybeans, wheat\nCrop Yield: 5000 kg/ha annually\nSeasonal Crops: Wheat (spring), corn (summer)' },
    { title: 'Land Information', content: 'Farm Size: 100 hectares\nLand Type: Arable land with clay soil\nSoil Quality: Well-managed, high fertility\nWater Sources: Drip irrigation system' },
    { title: 'Farming Philosophy', content: 'Committed to organic farming, using eco-friendly methods to maintain soil health and crop productivity.' },
    { title: 'Achievements', content: 'Awarded "Best Organic Farmer" in 2022.' },
    { title: 'Future Plans', content: 'Expanding crop varieties and investing in new irrigation technologies.' },
    // Add more items as needed
    { title: 'Profile Information', content: 'Name: John Doe\nContact: john.doe@example.com | +123456789\nLocation: Rural Farm, Springfield\nExperience: 15 years in organic farming' },
    { title: 'Crops Information', content: 'Types of Crops: Corn, soybeans, wheat\nCrop Yield: 5000 kg/ha annually\nSeasonal Crops: Wheat (spring), corn (summer)' },
    { title: 'Land Information', content: 'Farm Size: 100 hectares\nLand Type: Arable land with clay soil\nSoil Quality: Well-managed, high fertility\nWater Sources: Drip irrigation system' },
    { title: 'Farming Philosophy', content: 'Committed to organic farming, using eco-friendly methods to maintain soil health and crop productivity.' },
    { title: 'Achievements', content: 'Awarded "Best Organic Farmer" in 2022.' },
    { title: 'Future Plans', content: 'Expanding crop varieties and investing in new irrigation technologies.' },
    // Add more items as needed
    { title: 'Profile Information', content: 'Name: John Doe\nContact: john.doe@example.com | +123456789\nLocation: Rural Farm, Springfield\nExperience: 15 years in organic farming' },
    { title: 'Crops Information', content: 'Types of Crops: Corn, soybeans, wheat\nCrop Yield: 5000 kg/ha annually\nSeasonal Crops: Wheat (spring), corn (summer)' },
    { title: 'Land Information', content: 'Farm Size: 100 hectares\nLand Type: Arable land with clay soil\nSoil Quality: Well-managed, high fertility\nWater Sources: Drip irrigation system' },
    { title: 'Farming Philosophy', content: 'Committed to organic farming, using eco-friendly methods to maintain soil health and crop productivity.' },
    { title: 'Achievements', content: 'Awarded "Best Organic Farmer" in 2022.' },
    { title: 'Future Plans', content: 'Expanding crop varieties and investing in new irrigation technologies.' },
    
  ];

  return (
    <div className="farmer-dashboard">
      <h1>Farmer Dashboard</h1>
      <div className="info-grid">
        {farmerInfo.map((info, index) => (
          <div className="info-box" key={index}>
            <h2>{info.title}</h2>
            <p>{info.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerDashboard;
