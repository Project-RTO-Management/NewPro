// Dashboard.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dash = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        {/* Sidebar */}
        <div className="col-md-3  text-light p-2">
          {/* Add your sidebar content here */}
          <h3>Sidebar</h3>
          <ul className="list-group">
            <li className="list-group-item">Link 1</li>
            <li className="list-group-item">Link 2</li>
            {/* Add more sidebar links as needed */}
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-5 col-lg-10 p-3">
          {/* Add your user dashboard content here */}
          <h3>User Dashboard</h3>
          <p>Welcome to your dashboard!</p>
          {/* Add more user dashboard content as needed */}
        </div>
      </div>
    </div>
  );
};

export default Dash;
