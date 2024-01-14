import React from 'react';
import './Dashboard.css';
const Dashboard = ({userName}) => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard, {userName}!</h2>
      {/* Add additional content for the dashboard here */}
    </div>
  );
};

export default Dashboard;
