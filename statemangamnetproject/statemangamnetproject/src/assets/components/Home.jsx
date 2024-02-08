
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Login from './Login';
import { useState } from 'react'
import Footer from './Footer';
import CustomNavbar from './CustomNavbar';
const navbarStyle= {
    marginRight:'16%'
  };
const Home = () => (
   
  <>
  <CustomNavbar/>
    <div className="row">
    <div className="col-md-4 mt-4">
          <Login />
        </div>
        <div className="col-md-6 col-lg-8">
          <img src="/img/user.jpg" alt="Background" className="w-100 h-0" />
        </div>
        </div>
<Footer/>
    </>
  );
  export default Home