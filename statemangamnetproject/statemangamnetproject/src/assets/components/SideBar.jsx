import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/list.css'
import { Card } from 'react-bootstrap';
const SideBar = ({ username }) => {
  return (
    <>

      <div className="row mt-5 " >

        <div className="">
          <div className="card">
            <div className='card-body'>
              <h5 className='card-title'>Personal Info</h5>
              <ul className="list-group">
              <li className='list-group-item'>
                <Link to="/personalInfo">Update Info </Link>
              </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Licence</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="">Apply For New Licence</Link>
                </li>
                {/* <li className="list-group-item">
                    <Link to="/dashboard/profile">Apply For Duplicate Licence</Link>
                  </li> */}
                <li className="list-group-item">
                  <Link to="/">Apply For Renew Licence</Link>
                </li>

                {/* Add more navigation links as needed */}
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Vehical Registration</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/dashboard/registerVL">Apply For New Vehical Registration</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/dashboard/registerNVL">Apply For Renew Vehical Registration</Link>
                </li>
                {/* Add more navigation links as needed */}
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Test</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/dashboard">Apply For Test</Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SideBar
