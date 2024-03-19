import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/posts">Posts</Link>
        </li>
        <li>
          <Link to="/admin/categories">Categories</Link>
        </li>
        <li>
          <Link to="/admin/tags">Tags</Link>
        </li>
        <li>
          <Link to="/admin/comments">Comments</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
