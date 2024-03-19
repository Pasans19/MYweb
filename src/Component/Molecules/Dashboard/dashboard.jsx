import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats">
        <div className="stat-item">
          <h3>Total Posts</h3>
          <p>100</p>
        </div>
        <div className="stat-item">
          <h3>Total Comments</h3>
          <p>250</p>
        </div>
        {/* Add more statistics as needed */}
      </div>
    </div>
  );
};

export default Dashboard;
