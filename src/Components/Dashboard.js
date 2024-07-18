// Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>This is your personalized dashboard.</p>
      <ul>
        <li><Link to="/admin/karyawan">Karyawan Database</Link></li>
        <li><Link to="/admin/orders">Order Database</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
