// RegisterForm.jsx
import React, { useState } from 'react';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const RegisterForm = () => {
 
  const [formData, setFormData] = useState({
    username: '',
    password:'',
    mobileNumber: '',
    email: '',
  });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   // Simulate saving data (you can replace this with an API call or other logic)
  //   localStorage.setItem('user', JSON.stringify(formData));

  //   // Redirect to login page
  //   history.push('/login');
  // };
  const myStyles = {
    marginTop: "40px" ,marginLeft:'3%' ,marginBottom:"40px"
  };
  return (<>
    <CustomNavbar/>
    
    <div className="row" >
           <div className="card col-sm-6 shadow "
				style={myStyles}>
				<div className="card-body" style={{marginBottom:'30px'}}>
      <div className="container  mt-4">
      <h2 style={{textAlign:'center'}}>Registration Form</h2>
      {/* <form onSubmit={handleSubmit}> */}
        <div className="mb-3 ">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="username" className="form-label">
            S/D/W  
          </label>
          <input
            type="text"
            className="form-control"
            id="middlename"
            name="middlename"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            // onChange={handleChange}
            required
          />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/Dashboard" className="btn btn-primary mt-3">
        Register
      </Link>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/" className="btn btn-primary mt-3">
        Login
      </Link>
      {/* </form> */}
    </div>
    </div>
    </div>
    <div className="col-sm-5">
			
					<img src='/img/signup.jpg' style={{height:'100%',width:'100%'}}></img>
				
			
		</div>
    </div>
   
    <Footer/>
    </>
  );
};

export default RegisterForm;
