import React from 'react';
import './BuyerDashboard.css'; // Import the CSS file

const BuyerDashboard = () => {
  const buyerInfo = [
    { title: 'Profile Information', content: 'Name: FreshProduce Inc.\nContact: contact@freshproduce.com | +987654321\nLocation: Downtown City, Metropolis\nBusiness Type: Wholesaler of fresh produce' },
    { title: 'Purchase History', content: 'Recent Purchases: 500 kg of tomatoes, 200 kg of lettuce\nPreferred Products: Tomatoes, lettuce, cucumbers' },
    { title: 'Buying Preferences', content: 'Order Frequency: Weekly\nBudget Range: $5000 - $10000 per order' },
    { title: 'Business Overview', content: 'Specializes in sourcing high-quality vegetables for local grocery stores.' },
    { title: 'Market Focus', content: 'Serving the metropolitan area with a focus on fresh and organic produce.' },
    { title: 'Achievements', content: 'Awarded "Best Organic Farmer" in 2022.' },
    // Add more items as needed
    { title: 'Profile Information', content: 'Name: FreshProduce Inc.\nContact: contact@freshproduce.com | +987654321\nLocation: Downtown City, Metropolis\nBusiness Type: Wholesaler of fresh produce' },
    { title: 'Purchase History', content: 'Recent Purchases: 500 kg of tomatoes, 200 kg of lettuce\nPreferred Products: Tomatoes, lettuce, cucumbers' },
    { title: 'Buying Preferences', content: 'Order Frequency: Weekly\nBudget Range: $5000 - $10000 per order' },
    { title: 'Business Overview', content: 'Specializes in sourcing high-quality vegetables for local grocery stores.' },
    { title: 'Market Focus', content: 'Serving the metropolitan area with a focus on fresh and organic produce.' },
    { title: 'Achievements', content: 'Awarded "Best Organic Farmer" in 2022.' },
    // Add more items as needed
    { title: 'Profile Information', content: 'Name: FreshProduce Inc.\nContact: contact@freshproduce.com | +987654321\nLocation: Downtown City, Metropolis\nBusiness Type: Wholesaler of fresh produce' },
    { title: 'Purchase History', content: 'Recent Purchases: 500 kg of tomatoes, 200 kg of lettuce\nPreferred Products: Tomatoes, lettuce, cucumbers' },
    { title: 'Buying Preferences', content: 'Order Frequency: Weekly\nBudget Range: $5000 - $10000 per order' },
    { title: 'Business Overview', content: 'Specializes in sourcing high-quality vegetables for local grocery stores.' },
    { title: 'Market Focus', content: 'Serving the metropolitan area with a focus on fresh and organic produce.' },
    { title: 'Achievements', content: 'Awarded "Best Organic Farmer" in 2022.' },
    // Add more items as needed
    { title: 'Profile Information', content: 'Name: FreshProduce Inc.\nContact: contact@freshproduce.com | +987654321\nLocation: Downtown City, Metropolis\nBusiness Type: Wholesaler of fresh produce' },
    { title: 'Purchase History', content: 'Recent Purchases: 500 kg of tomatoes, 200 kg of lettuce\nPreferred Products: Tomatoes, lettuce, cucumbers' },
    { title: 'Buying Preferences', content: 'Order Frequency: Weekly\nBudget Range: $5000 - $10000 per order' },
    { title: 'Business Overview', content: 'Specializes in sourcing high-quality vegetables for local grocery stores.' },
    { title: 'Market Focus', content: 'Serving the metropolitan area with a focus on fresh and organic produce.' },
    { title: 'Achievements', content: 'Awarded "Best Organic Farmer" in 2022.' },
    // Add more items as needed
    { title: 'Profile Information', content: 'Name: FreshProduce Inc.\nContact: contact@freshproduce.com | +987654321\nLocation: Downtown City, Metropolis\nBusiness Type: Wholesaler of fresh produce' },
    { title: 'Purchase History', content: 'Recent Purchases: 500 kg of tomatoes, 200 kg of lettuce\nPreferred Products: Tomatoes, lettuce, cucumbers' },
    { title: 'Buying Preferences', content: 'Order Frequency: Weekly\nBudget Range: $5000 - $10000 per order' },
    { title: 'Business Overview', content: 'Specializes in sourcing high-quality vegetables for local grocery stores.' },
    { title: 'Market Focus', content: 'Serving the metropolitan area with a focus on fresh and organic produce.' },
    { title: 'Achievements', content: 'Awarded "Best Organic Farmer" in 2022.' },
    // Add more items as needed
  ];

  return (
    <div className="buyer-dashboard">
      <h1>Buyer Dashboard</h1>
      <div className="info-grid">
        {buyerInfo.map((info, index) => (
          <div className="info-box" key={index}>
            <h2>{info.title}</h2>
            <p>{info.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerDashboard;
